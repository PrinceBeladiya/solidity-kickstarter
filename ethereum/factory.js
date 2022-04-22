import web3 from './web3';
import campaignFactory from './build/FactoryCampaign.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0xeE6c67922aFB5AFd8D14Df1baF7CaCaD00baae09'
);

export default instance;