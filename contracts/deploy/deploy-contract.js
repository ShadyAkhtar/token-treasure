// const { ethers } = require("hardhat");

require("dotenv").config();
module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy } = deployments;
  const { owner } = await getNamedAccounts();

  //   const { TKNNAME, SYMBOL, CURRENCY, DECIMALS, OWNER } = process.env;
  //   const tokenName = TKNNAME ?? "FiatToken";
  //   const tokenSymbol = SYMBOL ?? "Fiat";
  //   const tokenCurrency = CURRENCY ?? "USD";
  //   const tokenDecimals = DECIMALS ?? "6";
  //   const tokenOwner = OWNER ?? owner;

  // const tokenName = process.argv[-3];
  // const tokenSymbol = process.argv[-2];
  // const tokenCurrency = process.argv[-1];

  const { address: deployedContract } = await deploy("TokenCreator", {
    from: owner,
    // args: [tokenName, tokenSymbol, tokenCurrency, tokenDecimals, tokenOwner],
    // ...deployOptions,
  });
  console.log("contract addr: ", deployedContract);

  const createToken = await ethers.getContractAt(
    "TokenCreator",
    deployedContract
  );
  // const createToken = await ethers.getContract(
  //   "TokenCreator",
  //   deployedContract
  // );

  const tokenAddress = await createToken.publishToken("DEMO DEPLOY", "DMMDPLY");
  const temp = await tokenAddress.wait(1);
  console.log({ temp });
  console.log("logggg: ", temp.logs);
  console.log("events: ", temp.events);
  console.log("Token Deployed at: ", tokenAddress);
};

module.exports.tags = ["TokenCreator"];
