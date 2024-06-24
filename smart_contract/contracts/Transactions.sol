// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// serving the purpose of a class. Solidity is also statically typed.
contract Transactions {
    uint256 transactionCount;

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

    function addToBlockchain(
        address payable receiver,
        uint amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;

        // msg is smth you immediately get when you call a function in the blockchain. It is identical to a req.body you'd get in REST.
        // block is the specific block that got executed in the blockchain when this was called.
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        // calling the event that actually makes the payment.
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        // returns the current transaction count.
        return transactionCount;
    }
}
