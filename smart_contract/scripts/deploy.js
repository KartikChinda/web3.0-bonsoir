const main = async () => {
    const Transactions = await ethers.deployContract("Transactions");
    // const transactions = await Transactions.deploy();

    await Transactions.waitForDeployment();

    console.log("Transactions have been deployed to: ", await Transactions.getAddress());
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runMain(); 