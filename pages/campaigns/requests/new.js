import React, { useState } from 'react';
import Layout from '../../../component/Layout';
import Campaign from '../../../ethereum/campaign';
import { Button, Message, Form, Input } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';

export const New = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [Description, setDescription] = useState('');
    const [Amount, setAmount] = useState('');
    const [Recipient, setRecipient] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault;

        const campaign = Campaign(props.address);

        setErrorMessage('');
        setLoading(true);
        try {
            const accounts = await web3.eth.getAccounts();

            await campaign.methods.createRequest(Description, web3.utils.toWei(Amount, 'ether'), Recipient).send({
                from: accounts[0]
            });

            Router.pushRoute(`/campaigns/${props.address}/requests`);
        } catch (error) {
            setErrorMessage(error.message);
            console.log(error);
        }
        setLoading(false);

    };

    const DescriptionChange = (e) => { setDescription(e.target.value); };
    const AmountChange = (e) => { setAmount(e.target.value); };
    const RecipientChange = (e) => { setRecipient(e.target.value); };

    return (
        <Layout>
            <h3>Create Request</h3>

            <Form onSubmit={handleSubmit} error={!!errorMessage}>
                <Form.Field>
                    <label><b>Description</b></label>
                    <Input
                        name="Description"
                        placeholder='Amount for contribute '
                        onChange={DescriptionChange}
                    />
                </Form.Field>

                <Form.Field>
                    <label><b>Amount in Ether</b></label>
                    <Input
                        name="Amount"
                        label="Ether"
                        labelPosition='right'
                        placeholder='Amount for contribute '
                        onChange={AmountChange}
                    />
                </Form.Field>

                <Form.Field>
                    <label><b>Recipient</b></label>
                    <Input
                        name="Recipient"
                        label="Address"
                        labelPosition='right'
                        placeholder='Amount for contribute '
                        onChange={RecipientChange}
                    />
                </Form.Field>

                <Message error>
                    <Message.Header>Oops!!</Message.Header>
                    <p>{errorMessage}</p>
                </Message>

                <Button primary loading={loading}>Create</Button>
                <Link route={`/campaigns/${props.address}/requests`}>
                    <a>
                        <Button primary>Back</Button>
                    </a>
                </Link>
            </Form>
        </Layout>
    )
}

New.getInitialProps = async (props) => {
    const address = props.query.address;

    return { address };
};

export default New;