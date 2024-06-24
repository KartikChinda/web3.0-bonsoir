// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// serving the purpose of a class. Solidity is also statically typed.
contract Transactions {
    uint256 transactionCounter;

    // this is essentially a function declaration.
    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    // sort of like a typescript interface, telling the props.
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // here is our global store.
    TransferStruct[] transactions;

    // creating functions

    function addToBlockchain() public {}

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        // return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        // returns the current transaction count.
    }
}
