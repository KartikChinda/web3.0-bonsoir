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

    const checkWalletConnected = async () => {
        if (!ethereum) return alert("Please install Metamask.");
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        console.log(accounts);
    }

    useEffect(() => {
        checkWalletConnected();
    }, [])



    return (
        <TransactionContext.Provider value={{ value: "testing testing hello 123 awaaz aa rhi h?" }}>
            {children}
        </TransactionContext.Provider>
    )
}