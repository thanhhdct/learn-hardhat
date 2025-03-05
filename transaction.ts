
import { ethers } from "hardhat";

async function send() {
  // const vitalik_address = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
  const vitalik_address = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B";
  const contractAddress = "0x496Cc52E280b210D7410861144B3B124d031d60D";

  // const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const signer = (await ethers.getImpersonatedSigner(vitalik_address))
  const initialBalance = await ethers.provider.getBalance(vitalik_address)
  console.log("🚀 ~ send ~ initialBalance:", initialBalance)
  // .connect(provider);
  const recieptTx = await signer.sendTransaction({
    to: contractAddress,
    value: 3000,
  });

  await recieptTx.wait();

  console.log(`Transaction successful with hash: ${recieptTx.hash}`);
  const currentBalance = await ethers.provider.getBalance(vitalik_address)
  console.log("🚀 ~ send ~ currentBalance:", currentBalance)
}

send()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });