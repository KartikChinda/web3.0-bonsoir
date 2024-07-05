"use client";
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { TransactionContext } from "../context/TransactionContext";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Hero = () => {

    const { connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction } = useContext(TransactionContext);


    const handleSubmit = (e: any) => {
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();
        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    };




    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 md:gap-14">
                <div className="flex justify-start items-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Send cryptocurrency <br /> across the world.
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
                    </p>

                    {!currentAccount && <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#a099ff] p-3 rounded-full cursor-pointer hover:bg-[#8982eb] duration-150"
                    >
                        <AiFillPlayCircle className="text-black mr-2" />
                        <p className="text-black text-base font-semibold">
                            Connect Wallet
                        </p>
                    </button>}


                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl hover:bg-[#0a0942] hover:text-[17px] duration-150 ${companyCommonStyles}`}>
                            Reliability
                        </div>
                        <div className={`hover:bg-[#0a0942] hover:text-[17px] duration-150  ${companyCommonStyles}`}>Security</div>
                        <div className={`sm:rounded-tr-2xl hover:bg-[#0a0942] hover:text-[17px] duration-150 ${companyCommonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`sm:rounded-bl-2xl hover:bg-[#0a0942] hover:text-[17px] duration-150 ${companyCommonStyles}`}>
                            Web 3.0
                        </div>
                        <div className={`hover:bg-[#0a0942] hover:text-[17px] duration-150 ${companyCommonStyles}`}>Low Fees</div>
                        <div className={`rounded-br-2xl hover:bg-[#0a0942] hover:text-[17px] duration-150 ${companyCommonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-44 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-black flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#000" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#000" />
                            </div>
                            <div>
                                <p className="text-black font-md text-sm">
                                    {currentAccount.substr(0, 10)}........{currentAccount.substr(currentAccount.length - 5, currentAccount.length - 1)}
                                </p>
                                <p className="text-black font-bold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <form id="sendMoney" onSubmit={(e) => handleSubmit(e)} className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism gap-2" >
                        <input placeholder="Enter address to send the amount to" name="addressTo" onChange={(e) => handleChange(e, "addressTo")} type="text" className=" p-2 w-full rounded-lg my-2 blue-glassmorphism text-white" />
                        <input placeholder="Enter the amount (ETH)" name="amount" onChange={(e) => handleChange(e, "amount")} type="number" className=" p-2 w-full rounded-lg my-2 blue-glassmorphism text-white" />
                        <input placeholder="Enter a keyword" name="keyword" onChange={(e) => handleChange(e, "keyword")} type="text" className=" p-2 w-full rounded-lg my-2 blue-glassmorphism text-white" />
                        <input placeholder="Enter a message" name="message" onChange={(e) => handleChange(e, "message")} type="text" className=" p-2 w-full rounded-lg my-2 blue-glassmorphism text-white" />

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-white w-full  mt-2  p-2 hover:bg-[#4F4EBE] rounded-full duration-150 cursor-pointer hover:font-bold"
                        >
                            Send now
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Hero