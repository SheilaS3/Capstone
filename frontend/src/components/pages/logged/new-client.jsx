import React, { Component } from 'react';

import NewClientForm from "../../clients/new-client-form"

export default class NewClient extends Component {
    render() {
        return (
            <div className='new-client-wrapper'>
                <NewClientForm />
            </div>
        );
    }
}