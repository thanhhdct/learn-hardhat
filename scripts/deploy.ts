import { ethers } from "hardhat";

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"depositA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"depositB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kittyCoreAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"toAddress","type":"address"}],"name":"testA1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"toAddress","type":"address"}],"name":"testA2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"toAddress","type":"address"}],"name":"testB1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"toAddress","type":"address"}],"name":"testB2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawB","outputs":[],"stateMutability":"nonpayable","type":"function"}]

async function main() {
  const address = '0xd2eecA66646C60489e6F13251D943f2CE45F3588'

  const privateKey = '0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa'

  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const wallet = (new ethers.Wallet(privateKey, provider));
  const contract = (
    new ethers.Contract(address, abi, wallet)
  );
  const kittyCoreAddress = await contract.kittyCoreAddress()
  console.log("🚀 ~ main ~ kittyCoreAddress:", kittyCoreAddress)
}

main().catch(console.error);