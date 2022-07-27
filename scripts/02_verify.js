const hre = require("hardhat");

async function main() {
    const name    = process.env.BITS_NAME || "BITS";
    const symbol  = process.env.BITS_SYMBOL || "BITS";
    const addr    = process.env.ADDRESS;
    const amount  = process.env.AMOUNT || hre.ethers.utils.parseEther("1000000000");

    await hre.run("verify:verify", {
        address: process.env.TOKEN_ADDRESS,
        constructorArguments: [name, symbol, addr, amount],
    });    
    console.log("Contract verified");     
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });