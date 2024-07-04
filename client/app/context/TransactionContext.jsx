"use client";

import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { contractABI, contractAddress } from "../../utils/constants";

export const TransactionContext = React.createContext();

if (typeof window !== "undefined") {
    const { ethereum } = window;
}

// fecthing the contract

const getEthereumContract = () => {
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}

// now, we need to call this function somewhere. So here we are essentially creating a wrapper for this transaction contract. 

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setcurrentAccount] = useState("");

    const [formData, setFormData] = useState({
        addressTo: "", amount: "", keyword: "", message: ""
    });

    const handleChange = (e, name) => {
        // console.log("Inside handle change, changing value of name to ", name, e.target.value);
        setFormData((prev) => ({ ...prev, [name]: e.target.value }));
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
            getEthereumContract();

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object has been found.");
        }
    }

    useEffect(() => {
        checkWalletConnected();
    }, [])



    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, sendTransaction, handleChange }}>
            {children}
        </TransactionContext.Provider>
    )
}