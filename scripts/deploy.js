const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(                     
    ["Santa", "Rudolf", "Will Elferrel"],       
    ["https://i.imgur.com/CWv1fV1.jpeg", 
    "https://i.imgur.com/srh8x7u.jpeg", 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEb2blvW2P6o%2Fmaxresdefault.jpg"],
    [100, 200, 300],                    
    [100, 50, 25],
    "MetaGrinch",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcms.qz.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fjeffbezosinindia.jpg",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  //let txn;
  //txn = await gameContract.mintCharacterNFT(0);
  //await txn.wait();

  //txn = await gameContract.mintCharacterNFT(1);
  //await txn.wait();

  //txn = await gameContract.mintCharacterNFT(2);
  //await txn.wait();

  //txn = await gameContract.attackBoss();
  //await txn.wait();
  
  //txn = await gameContract.attackBoss();
  //await txn.wait();

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
