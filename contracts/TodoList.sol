// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
    // public gives access to the var => outside the contract
    uint256 public taskCount = 0;

    // structs => custom data types
    struct Task {
        uint256 id;
        string content;
        bool completed;
    }

    // key value
    mapping(uint256 => Task) public tasks;

    // runs on deployment => one time
    constructor() public {
        createTask("Genesis");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}
