// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SendEtherContractModule = buildModule("SendEtherContractModule", (m) => {
  const sendEtherContract = m.contract("SendEtherContract");

  return { sendEtherContract };
});

export default SendEtherContractModule;
