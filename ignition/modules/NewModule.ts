import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import OldModule from "./OldModule";

const NewModule = buildModule("NewModule", (m) => {
  const { oldContract } = m.useModule(OldModule)
  m.contractAt("Old", oldContract)
  const newContract = m.contract("New");
  return { newContract };
});

export default NewModule;
