// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CountContractModule = buildModule("CountContractModule", (m) => {
  const countContract = m.contract("CountContract");

  // m.call(countContract, "decrease", [2]);
  // m.call(countContract, "increase", [m.getParameter("increaseValue")]);
  return { countContract };
});

export default CountContractModule;
