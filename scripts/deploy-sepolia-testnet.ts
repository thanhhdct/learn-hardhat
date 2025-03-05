import { ethers } from "hardhat";

const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "from", "type": "address" }], "name": "Deposit", "type": "event" }, { "inputs": [], "name": "destroy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emitEvent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwnerAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "showBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]

async function main() {
  const address = '0x496Cc52E280b210D7410861144B3B124d031d60D'

  const privateKey = '0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa'

  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const wallet = (new ethers.Wallet(privateKey, provider));
  const contract = (
    new ethers.Contract(address, abi, wallet)
  );
  const balance = await contract.showBalance()
  console.log("🚀 ~ main ~ initial balance:", balance)
  await wallet.sendTransaction({ value: 100, to: address })
  const result = await contract.showBalance()
  console.log("🚀 ~ main ~ balance after send transaction:", result)
}

main().catch(console.error);