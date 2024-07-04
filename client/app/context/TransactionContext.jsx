"use client";

import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { contractABI, contractAddress } from "../../utils/constants";

export const TransactionContext = React.createContext();

// fecthing the contract

const getEthereumContract = () => {
    const provider = new ethers.BrowserProvider(window.ethereum)
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
    return (
        <TransactionContext.Provider value={{ value: "testing testing hello 123 awaaz aa rhi h?" }}>
            {children}
        </TransactionContext.Provider>
    )
}