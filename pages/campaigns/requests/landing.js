import React from 'react';
import Layout from '../../../component/Layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RenderRows from '../../../component/renderRows';

export const Landing = (props) => {

    const { Header, Row, HeaderCell, Body } = Table;

    const rowRendering = () => {
        return props.requests.map((request, index) => {
            return <RenderRows
                key={index}
                id={index}
                request={request}
                address={props.address}
                approval={props.approvalCount}
            />;
        });
    };

    return (
        <Layout>
            <h3>Requests</h3>

            <Link route={`/campaigns/${props.address}/requests/new`}>
                <a>
                    <Button primary>Add Request</Button>
                </a>
            </Link>

            <Table celled>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>

                <Body>
                    {rowRendering()}
                </Body>
            </Table>
        </Layout>
    )
}

Landing.getInitialProps = async (props) => {
    const address = props.query.address;

    const campaign = await Campaign(address);

    const requestCount = await campaign.methods.getRequestCount().call();

    const approvalCount = await campaign.methods.countApprovals().call();

    const requests = await Promise.all( 
        Array(requestCount).fill().map((element, index) => {
            return campaign.methods.requests(index).call()
        })
    );

    return { address, requestCount, requests, approvalCount };
}

export default Landing;