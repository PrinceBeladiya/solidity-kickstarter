import React, { useState } from 'react';
import Layout from '../../component/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

export const New = () => {

  const [minimumContribution, setMinimumContribution] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setMinimumContribution(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault;
    setErrorMessage('');
    await window.ethereum.enable();
    
    setLoading(true);
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimumContribution)
        .send({
          from: accounts[0]
        });
        Router.pushRoute('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);

  };

  return (
    <Layout>
      <h3>Create Campaign</h3>

      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label><b>Enter Minimum Contribution To Create Campaign</b></label>
          <Input
            label="Wei"
            labelPosition='right'
            placeholder='Minimum Contribution'
            onChange={handleChange}
          />
        </Form.Field>

        <Message error>
          <Message.Header>Oops!!</Message.Header>
          <p>{errorMessage}</p>
        </Message>

        <Button primary loading={ loading }>Create Campaign!</Button>
      </Form>
    </Layout>
  )
}

export default New;