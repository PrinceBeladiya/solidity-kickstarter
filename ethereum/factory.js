import web3 from './web3';
import campaignFactory from './build/FactoryCampaign.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x34718053f4D44730D2Fe01737c268c034706F9fb'
);

export default instance;