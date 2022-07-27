const hre = require("hardhat");

async function main() {
  const name    = process.env.BITS_NAME || "BITS";
  const symbol  = process.env.BITS_SYMBOL || "BITS";
  const addr    = process.env.ADDRESS;
  const amount  = process.env.AMOUNT || hre.ethers.utils.parseEther("1000000000");

  const Bits = await hre.ethers.getContractFactory("Bits");
  const bits = await Bits.deploy(name, symbol, addr, amount);

  await bits.deployed();

  console.log(`Bits (name: ${name}, symbol: ${symbol}, addr: ${addr} and cap: ${amount}) deployed to ${bits.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
