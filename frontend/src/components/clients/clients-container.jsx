import React, { Component } from "react";

import IndividualClient from "./individual-client";

export default class ClientsContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Total Clients Page",
            isLoading: false,
            data: [
                { title: "Google", assigned_risk: "Low" },
                { title: "Mercedes", assigned_risk: "Medium" },
                { title: "Felix", assigned_risk: "High" }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
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
            return <IndividualClient title={client.title} />;
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

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