import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OldModule = buildModule("OldModule", (m) => {
  const oldContract = m.contract("Old");
  return { oldContract };
});

export default OldModule;
