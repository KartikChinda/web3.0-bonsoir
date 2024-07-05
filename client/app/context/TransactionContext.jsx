"use client";

import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { contractABI, contractAddress } from "../../utils/constants";

export const TransactionContext = React.createContext();

if (typeof window !== "undefined") {
    const { ethereum } = window;
}

// fecthing the contract

const getEthereumContract = async () => {
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    // console.log({
    //     provider,
    //     signer,
    //     transactionContract
    // })
    return transactionContract;
}

// now, we need to call this function somewhere. So here we are essentially creating a wrapper for this transaction contract. 

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setcurrentAccount] = useState("");

    const [transactions, settransactions] = useState([])

    const [formData, setFormData] = useState({
        addressTo: "", amount: "", keyword: "", message: ""
    });

    const handleChange = (e, name) => {
        // console.log("Inside handle change, changing value of name to ", name, e.target.value);
        setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    }

    // fetching all transactions 
    const getTransactions = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask");

            const transactionContract = await getEthereumContract();
            const transactionsList = await transactionContract.getAllTransactions();

            // Transform the transactions list to a more usable format
            const formattedTransactions = transactionsList.map(transaction => ({
                sender: transaction.sender,
                receiver: transaction.receiver,
                amount: transaction.amount.toString() / (10 ** 18),  // Dividing by 10^18 so that we can get the value in Eth, and not in GWEI
                message: transaction.message,
                timestamp: new Date(Number(transaction.timestamp) * 1000).toLocaleString(),  // Convert BigInt to number then to Date object
                keyword: transaction.keyword
            }));

            console.log(formattedTransactions);
            settransactions(formattedTransactions);


        } catch (error) {
            console.log(error);
        }
    }

    // checking if metamask is connected. 
    const checkWalletConnected = async () => {
        if (!ethereum) return alert("Please install Metamask.");
        const accounts = await ethereum.request({ method: 'eth_accounts' });


        // checking that if we already have an account connected at the start of the render, we can already set the value of the account. 
        if (accounts.length > 0) {
            setcurrentAccount(accounts[0]);
        } else {
            console.log("No accounts found");
        }
        console.log(accounts);
        getTransactions();
    }

    // retreiving the first waller. 
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask.");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setcurrentAccount(accounts[0]);
            // console.log(currentAccount);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object has been found.");
        }
    }



    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask.");

            // getting form data
            const { addressTo, amount, keyword, message } = formData;

            // knowing what contract to invoke 
            const transactionContract = await getEthereumContract();

            // sim reason as to what is explained below, this passes your amount into GWEI hexadecimal amount. 
            console.log("Amount is: ", amount, "type: ", typeof (amount));
            const parsedAmount = ethers.parseEther(amount);
            console.log("This is the parsed amount: ", parsedAmount);
            console.log("This is the parsed amount in hex: ", parsedAmount.toString(16));


            // let's send shit mf
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', //so here's the tea about this. Gas here is the amount of money we want to spend in this transaction. Also, all of this is written in hexadecimal. Now, this in decimal format is 21000. But this is in GWEI, not ETH. GWEI is a subunit of ETH, like cent is to a dollar, and 21K gwei is 0.000021 eth. 
                    value: parsedAmount.toString(16),
                }]
            });

            // adding to the blockchain 
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
            console.log("This is your transaction hash: ", transactionHash.hash);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        checkWalletConnected();
    }, [])



    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, sendTransaction, handleChange, transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}