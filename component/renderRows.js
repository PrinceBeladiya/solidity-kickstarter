import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import { Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';

export const renderRows = (props) => {

    const { Row, Cell } = Table;
    const { id, request, approval } = props;

    const readyToFinalize = request.countApprovers > approval / 2;

    const onApprove = async () => {

        const accounts = await web3.eth.getAccounts();

        const campaign = Campaign(props.address);

        await campaign.methods.approveRequest(props.id).send({
            from: accounts[0]
        })
    }

    const onFinalize = async () => {

        const accounts = await web3.eth.getAccounts();

        const campaign = Campaign(props.address);

        await campaign.methods.finalizeRequest(props.id).send({
            from: accounts[0]
        })
    }

    return (
        <Row disabled={ request.complete } positive={ readyToFinalize && !request.complete }>
            <Cell> {id} </Cell>
            <Cell> {request.description} </Cell>
            <Cell> {web3.utils.fromWei(request.value, 'ether')} ether </Cell>
            <Cell> {request.recipient} </Cell>
            <Cell> {request.countApprovers} / {approval} </Cell>
            <Cell>
                {
                    request.complete
                        ?
                        null
                        :
                        <Button color="green" basic onClick={onApprove} >Approve</Button>
                }
            </Cell>
            <Cell>
                {
                    request.complete
                        ?
                        null
                        :
                        <Button color="teal" basic onClick={onFinalize} >Finalize</Button>
                }

            </Cell>
        </Row>
    )
}

export default renderRows;