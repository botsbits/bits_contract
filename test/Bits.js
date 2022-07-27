const { expect, assert } = require("chai");
const { ethers } = require("hardhat");


describe("Bits", async function() {
    let token;

    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    
        let Bits = await ethers.getContractFactory("Bits");
        token = await Bits.connect(owner).deploy("BITS", "BITS", owner.address, 1_000_000);
    });
    
    it("Should properly deploy", async function() {
        let Bits = await ethers.getContractFactory("Bits");
        bits = await Bits.deploy("BITS", "BITS", addr1.address, 1_000_000);

        expect(await bits.balanceOf(addr1.address)).to.equal(1_000_000);
    });
});