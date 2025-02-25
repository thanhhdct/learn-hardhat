import { ignition } from "hardhat";
import { expect } from "chai";

import OldModule from "../ignition/modules/OldModule";
import NewModule from "../ignition/modules/NewModule";

describe("Demo Upgrade contract", function () {
    it("Should not change old contract when call new contract", async function () {
        const { oldContract } = await ignition.deploy(OldModule);

        const { newContract } = await ignition.deploy(NewModule)

        const oldContractAddress = await oldContract.getAddress()
        const setValue = 5

        await newContract.delegateCallSetX(oldContractAddress, setValue)

        expect(await oldContract.getX()).to.equal(Number(0));
        expect(await newContract.getX()).to.equal(Number(setValue + 6));
    });
});