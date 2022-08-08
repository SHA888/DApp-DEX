const { expect } = require('chai');
const { ethers } = require("hardhat");

describe("Token", function() {
  // Tests go inside here...
  it("has a name", async function() {
    // Fetch Token from blockchain
    const Token = await ethers.getContractFactory("Token")
    let token = await Token.deploy()
    // Read token name
    const name = await token.name()
    // check that name is correct
    expect(name).to.equal("My Token")
  });
});