import { ethers } from "hardhat";
import { vars } from "hardhat/config";

async function main() {
    // local
    // const address = '0x496Cc52E280b210D7410861144B3B124d031d60D
    // const provider = new ethers.JsonRpcProvider("http://localhost:8545");
    // const contractBalance = await provider.getBalance(address);
    // console.log("🚀 ~ main ~ contractBalance:", contractBalance)

    // sepolia testnet

    // const address = '0x496Cc52E280b210D7410861144B3B124d031d60D'    
    // const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
    // const provider = new ethers.AlchemyProvider("sepolia", ALCHEMY_API_KEY);
    // const contractBalance = await provider.getBalance(address);
    // console.log("🚀 ~ main ~ contractBalance:", contractBalance)

    // mainnet
    const address = '0x614F145baA52FAc6b261cfcD3D64343bFB21c29e'    
    const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
    const provider = new ethers.AlchemyProvider("mainnet", ALCHEMY_API_KEY);
    const contractBalance = await provider.getBalance(address);
    console.log("🚀 ~ main ~ contractBalance:", contractBalance)

}

main().catch(console.error);