### Blockchain

```sh
truffle init

# new contract
truffle compile

# deploy contract to blockchain 
truffle migrate

truffle migrate --reset

# check smart contracts from blockchain
truffle console

# type in console
truffle(development)> todolist = await TodoList.deployed()

todolist
todolist.address
taskcount = await todocist.taskCount()

# 0
taskcount.toNumer()

# list maps
task1 = await todolist.tasks(1)
task1
# output
Result {
  '0': BN {
    negative: 0,
    words: [ 1, <1 empty item> ],
    length: 1,
    red: null
  },
  '1': 'Genesis',
  '2': false,
  id: BN {
    negative: 0,
    words: [ 1, <1 empty item> ],
    length: 1,
    red: null
  },
  content: 'Genesis',
  completed: false
}
```

### List Tasks

- List tasks in the smart contract
- List tasks in the console
- List tasks in the client side application
- List tasks in the test

### Integrating Blockchain with Frontend

- Connect App to Blockchain => Web3.js
- Connect Browser to Blockchain => metamask (Ethereum Wallet)
