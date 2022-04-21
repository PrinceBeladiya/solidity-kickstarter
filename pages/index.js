import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../component/Layout';
import { Link } from '../routes';

export const Index = (props) => {

  Index.getInitialProps = async () => {
    const addresses = await factory.methods.getDeployedCampaign().call();

    return { addresses };
  }

  const getCampaignsCards = () => {

    const Campaigns = props.addresses.map(address => {
      return {
        header: address,
        description: <Link route={`/campaigns/${address}`}><a><Button style={{ marginTop: "10px", marginBottom: "10px" }}>View Campaign</Button></a></Link>,
        fluid: true
      };
    });

    return <Card.Group items={Campaigns} />;
  }

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button floated="right" primary content='Create Campaign' icon='plus circle' labelPosition='left' />
          </a>
        </Link>
        {getCampaignsCards()}
      </div>
    </Layout>
  )
}

export default Index;