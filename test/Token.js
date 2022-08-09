const { expect } = require('chai');
const { ethers } = require("hardhat");

describe("Token", function() {
  let token;

  beforeEach(async function() {
    const Token = await ethers.getContractFactory("Token")
    token = await Token.deploy()
  });

  it("has correct name", async function() {
    expect(await token.name()).to.equal("DAPP Token")
  });

  it("has correct symbol", async function() {
    expect(await token.symbol()).to.equal("DAPP")
  });

});