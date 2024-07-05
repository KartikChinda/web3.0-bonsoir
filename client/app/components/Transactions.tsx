"use client";

import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";


const Transactions = () => {

    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
        <div className="flex flex-col w-full justify-center items-center 2xl:px-20">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 className="text-white text-3xl text-center my-2">
                        Latest Transactions
                    </h3>
                ) : (
                    <h3 className="text-white text-3xl text-center my-2">
                        Connect your account to see the latest transactions
                    </h3>
                )}
            </div>
            <div className="flex flex-wrap gap-6 p-4 w-full justify-center items-center">
                {transactions && transactions.map((transaction: any) => {
                    return (
                        <div className="w-[450px] h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <img className="rounded-t-lg w-full h-40" src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="" />

                            <div className="p-5 m-5">
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                                    From: <span className="font-light text-[#DBDBE3]">{transaction.sender.substr(0, 5)}......{transaction.sender.substr(transaction.sender.length - 5, transaction.sender.length - 1)}</span>
                                </h5>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                                    To: <span className="font-light text-[#DBDBE3]">{transaction.receiver.substr(0, 5)}......{transaction.receiver.substr(transaction.receiver.length - 5, transaction.receiver.length - 1)}</span>
                                </h5>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                                    Amount: <span className="font-light text-[#DBDBE3]">{transaction.amount} ETH</span>
                                </h5>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                                    Keyword: <span className="font-light text-[#DBDBE3]">
                                        {transaction.keyword}
                                    </span>
                                </h5>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                                    Message: <span className="font-light text-[#DBDBE3]">{transaction.message.substr(0, 30)} </span>
                                </h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}


export default Transactions; 