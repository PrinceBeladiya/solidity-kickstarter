import React, { useState } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

export const contributeForm = (props) => {

    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault;

        const campaign = Campaign(props.address);
        
        setErrorMessage('');
        setLoading(true);
        try {    
            const accounts = await web3.eth.getAccounts();

            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether')
            });

            Router.replaceRoute(`/campaigns/${props.address}`);
        } catch (error) {
            setErrorMessage(error.message);
            console.log(error);
        }
        setLoading(false);

    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} error={!!errorMessage}>
                <Form.Field>
                    <label><b>Contribute to campaign!</b></label>
                    <Input
                        label="Ether"
                        labelPosition='right'
                        placeholder='Amount for contribute '
                        onChange={handleChange}
                    />
                </Form.Field>

                <Message error>
                    <Message.Header>Oops!!</Message.Header>
                    <p>{errorMessage}</p>
                </Message>

                <Button primary loading={loading}>Create Campaign!</Button>
            </Form>
        </div>
    )
}

export default contributeForm;