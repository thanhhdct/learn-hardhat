// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CountContractModule = buildModule("CountContractModule", (m) => {
  const countContract = m.contract("CountContract");

  return { countContract };
});

export default CountContractModule;
