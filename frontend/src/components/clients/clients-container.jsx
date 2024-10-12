import React, { Component } from 'react';

export default class ClientsContainer extends Component {
    constructor() {
        super()
        console.log("Clients have been rendered");
    }

    render() {
        return (
            <div>
                <h2>
                    Total Clients goes here
                </h2>
            </div>
        );
    }
}