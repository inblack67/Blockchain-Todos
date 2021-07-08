import React, { useCallback, useEffect, useState } from 'react';
import Web3 from 'web3';

const Home = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    loadWeb3();
    getAccounts();
  }, []);

  useEffect(() => {
    getBalance();
  }, [account]);

  const loadWeb3 = useCallback(async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('No Ethereum browser detected');
    }
  }, []);

  const getAccounts = useCallback(async () => {
    const web3Accounts = await window.web3.eth.getAccounts();

    setAccount(web3Accounts[0]);
  }, []);

  const getBalance = useCallback(async () => {
    if (account) {
      const web3Balance = await window.web3.eth.getBalance(account);
      setBalance(web3Balance);
    }
  }, [account]);

  return (
    <div>
      <h1>Balance: {balance} </h1>
    </div>
  );
};

export default Home;
