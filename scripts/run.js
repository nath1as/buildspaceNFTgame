const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Santa", "Rudolf", "Elf"],       // Names
    ["https://s-i.huffpost.com/gen/1528111/images/o-SANTA-CLAUS-facebook.jpg", // Images
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2FKE5UkMH.jpgg", 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.halloweencostumes.co.uk%2Fproducts%2F23095%2F1-1%2Fadult-holiday-elf-costume.jpg"],
    [666, 200, 300],                    // HP values
    [6, 15, 8]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  
  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
