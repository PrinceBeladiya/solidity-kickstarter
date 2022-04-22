import React from 'react';
import { Card, Grid, GridColumn, GridRow, Button } from 'semantic-ui-react';
import Layout from '../../component/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../component/contributeForm';
import { Link } from '../../routes';

export const Show = (props) => {

    const getSummaryDetails = () => {
        const {
            minimumContribution,
            balance,
            pendingRequest,
            contributors,
            manager
        } = props;

        const items = [
            {
                header: manager,
                description:
                    'Manager of the Campaign and request for money withraw',
                meta: 'Address of manager',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                description:
                    'You must contribute this much amount for become an approver.',
                meta: 'Minimum Contribution (Wei)',
            },
            {
                header: pendingRequest,
                description:
                    'A requests tries to widraw money from the contact. Request must be approved by the approvers.',
                meta: 'Number of request',
            },
            {
                header: contributors,
                description:
                    'Number of Approvers',
                meta: 'Peoples, who are already contribut to the contract.',
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                description:
                    'The how much money this campaign to spend.',
                meta: 'Campaign Balance (Ether)',
            },
        ]

        return <Card.Group items={items} />
    }

    return (
        <Layout>
            <h3>
                Campaign Details
            </h3>
            <Grid>
                <GridRow>
                    <GridColumn width={10}>
                        {getSummaryDetails()}
                    </GridColumn>
                    <GridColumn width={6}>
                        <ContributeForm address={props.address} />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Link route={`/campaigns/${props.address}/requests`} >
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Layout>
    )
}

Show.getInitialProps = async (props) => {
    const campaign = Campaign(props.query.address);
    console.log(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
        minimumContribution: summary[0],
        balance: summary[1],
        pendingRequest: summary[2],
        contributors: summary[3],
        manager: summary[4],
        address: props.query.address
    };
};

export default Show;