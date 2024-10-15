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
        
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getClients();
        } else {
            this.getClients(filter);
        }
    }

    getClients(filter = null) {
        axios.get("http://localhost:5000/clients")
        .then(response => {
            if (filter) {
                this.setState({
                    data: response.data.filter(item => {
                        return item.assigned_risk === filter; 
                    })
                });
            } else {
                this.setState({
                    data: response.data
                });
            }
        })
        .catch(error => {
            console.log("getclients error", error);
        });
    }

    

    clients() {
        return this.state.data.map(client => {
            return (
                <IndividualClient 
                    key={client.id_number} 
                    client={client}
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
            <div className="clients-wrapper">    
                <div className="filter-links">
                    <button 
                        className='btn'
                        onClick={() => this.handleFilter("Low")}
                    >
                        Low
                    </button>

                    <button
                        className='btn' 
                        onClick={() => this.handleFilter("Medium")}
                    >
                        Medium
                    </button>

                    <button 
                        className='btn'
                        onClick={() => this.handleFilter("High")}
                    >
                        High
                    </button>

                    <button 
                        className='btn' 
                        onClick={() => this.handleFilter("CLEAR_FILTERS")}
                    >
                        All
                    </button>                    
                </div>

                <div className="individual-clients-grid-wrapper">
                    {this.clients()}
                </div>
            </div>
        );
    }
}