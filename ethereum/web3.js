import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
    // we are on browser and running metamask
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are on server or dont have metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/d50e9e25f12e4dd6bfddd3c771b78ccd'
    );

    web3 = new Web3(provider);
}

export default web3;