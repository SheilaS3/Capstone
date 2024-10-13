import React, { Component } from "react";
import axios from "axios";

import IndividualClient from "./individual-client";

export default class ClientsContainer extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.getClients = this.getClients.bind(this);
    }

    getClients() {
        axios.get("http://localhost:5000/clients").then(response => {
            this.setState({
                data: response.data
            });
        }).catch(error => {
            console.log("getclients error", error);
        });
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(client => {
                return client.assigned_risk === filter;
            })
        });
    }

    clients() {
        return this.state.data.map(client => {
            return (
                <IndividualClient 
                    key={client.id_number} 
                    title={client.name} 
                    activity={client.activity}
                    person={client.person_type}
                    risk={client.assigned_risk}
                    id_expiration={client.id_number_expiry_date} 
                    slug={client.id_number} 
                />
            );
        })
    }

    componentDidMount() {
        this.getClients();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <button onClick={() => this.handleFilter("Low")}>Low</button>
                <button onClick={() => this.handleFilter("Medium")}>Medium</button>
                <button onClick={() => this.handleFilter("High")}>High</button>

                {this.clients()}
            </div>
        );
    }
}