"use client";
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Hero = () => {

    const handleSubmit = (e: any) => {

    };


    const connectWallet = () => {

    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 md:gap-14">
                <div className="flex justify-start items-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Send cryptocurrency <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
                    </p>

                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#a099ff] p-3 rounded-full cursor-pointer hover:bg-[#8982eb] duration-150"
                    >
                        <AiFillPlayCircle className="text-black mr-2" />
                        <p className="text-black text-base font-semibold">
                            Connect Wallet
                        </p>
                    </button>


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
                                    Address of the account
                                </p>
                                <p className="text-black font-bold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Hero