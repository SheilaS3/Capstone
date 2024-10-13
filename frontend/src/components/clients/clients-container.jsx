import React, { Component } from "react";
import axios from "axios";

import IndividualClient from "./individual-client";

export default class ClientsContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Total Clients Page",
            isLoading: false,
            data: [
                { title: "Google", assigned_risk: "Low", slug: "google" },
                { title: "Mercedes", assigned_risk: "Medium", slug: "mercedes" },
                { title: "Felix", assigned_risk: "High", slug: "felix" }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.getClients = this.getClients.bind(this);
    }

    getClients() {
        axios.get("http://localhost:5000/clients").then(response => {
            console.log("response data", response);
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
            return <IndividualClient title={client.title} slug={client.slug} />;
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        this.getClients();

        return (
            <div>
                <h2>
                    {this.state.pageTitle}
                </h2>

                <button onClick={() => this.handleFilter("Low")}>Low</button>
                <button onClick={() => this.handleFilter("Medium")}>Medium</button>
                <button onClick={() => this.handleFilter("High")}>High</button>

                {this.clients()}
            </div>
        );
    }
}