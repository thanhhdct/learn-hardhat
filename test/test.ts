import { assert } from "chai";
import hre from "hardhat";
import CountContractModule from "../ignition/modules/CountContract";

describe("Count Contract", function () {
  it("Read initial number", async function () {
    const accounts = await hre.viem.getWalletClients();
    const { countContract } = await hre.ignition.deploy(CountContractModule, {
      defaultSender: accounts[3].account.address,
    });
    await countContract.write.increase([5]);
    assert.equal(await countContract.read.getNumber(), 5);
  });
});
