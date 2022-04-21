const HdWalletProvide = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const campaignFactory = require('../ethereum/build/FactoryCampaign.json');
const { mnemonic, api } = require('./Key');

const provider = new HdWalletProvide(
    mnemonic,
    api
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from - ", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
    .deploy({ data: campaignFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log("Contract is deployed on - ",result.options.address);
}
deploy();