import React, { Component } from 'react';
import axios from 'axios';

export default class NewClientForm extends Component {
    constructor() {
        super();

        this.state = {
            assigned_risk: "Low",
            activity: "",
            contract_date: "",
            country: "",
            country_risk: "No",
            funds_origin: "",
            id_number: "",
            id_number_expiry_date: "",
            lastname: "",
            name: "",
            pep: "No",
            person_type: "Natural"
        }

        this.handleSuccessfullClientSubmision = this.handleSuccessfullClientSubmision.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm() {
        let formData = new FormData();

        formData.append("[assigned_risk]", this.state.assigned_risk);
        formData.append("[activity]", this.state.activity);
        formData.append("[contract_date]", this.state.contract_date);
        formData.append("[country]", this.state.country);
        formData.append("[country_risk]", this.state.country_risk);
        formData.append("[funds_origin]", this.state.funds_origin);
        formData.append("[id_number]", this.state.id_number);
        formData.append("[id_number_expiry_date]", this.state.id_number_expiry_date);
        formData.append("[lastname]", this.state.lastname);
        formData.append("[name]", this.state.name);
        formData.append("[pep]", this.state.pep);
        formData.append("[person_type]", this.state.person_type);

        return formData;
    }

    handleSubmit(event) {
        axios
        .post("https://aml-kyc-backend.onrender.com/client", this.buildForm())
        .then(response => {
            this.handleSuccessfullClientSubmision(response.data);
        }).catch(error => {
            console.log("handleSubmit", error);
        });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSuccessfullClientSubmision(client) {
        console.log("client from client form", client);
    }

    render() {
        return (
            <div className='new-client-form-wrapper'>
                <div className='new-client'>
                    <div className='title'>
                        <h1>NEW CLIENT FORM</h1>
                    </div>

                    <form
                        onSubmit={this.handleSubmit} 
                        className='new-client-form'
                    >
                        <div className='column'>
                            <div className="form-group">
                                <div className='entry-name'>
                                    Name:
                                </div>

                                <input 
                                    onChange={this.handleChange}
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    autoComplete="new-text"
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Lastname:
                                </div>

                                <input
                                    onChange={this.handleChange} 
                                    type="text"
                                    name="lastname"
                                    value={this.state.lastname}
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Person type:
                                </div>
                                
                                <select
                                    onChange={this.handleChange}
                                    name='person_type'
                                    className='select-element'
                                    value={this.state.person_type}  
                                >
                                    <option value="Natural">Natural</option>
                                    <option value="Legal">Legal</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    ID:
                                </div>

                                <input 
                                    onChange={this.handleChange}
                                    type="text"
                                    name="id_number"
                                    value={this.state.id_number}
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    ID Expiry Date:
                                </div>

                                <input
                                    onChange={this.handleChange} 
                                    type="text"
                                    name="id_number_expiry_date"
                                    placeholder='YYYY-MM-DD'
                                    value={this.state.id_number_expiry_date}
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Country:
                                </div>

                                <input
                                    onChange={this.handleChange} 
                                    type="text"
                                    name="country"
                                    value={this.state.country}
                                    autoComplete="new-text"
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Risk Country?:
                                </div>
                                
                                <select
                                    onChange={this.handleChange} 
                                    name='country_risk'
                                    className='select-element'
                                    value={this.state.country_risk}  
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="form-group">
                                <div className='entry-name'>
                                    Activity:
                                </div>

                                <input 
                                    onChange={this.handleChange} 
                                    type="text"
                                    name="activity"
                                    value={this.state.activity}
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'> 
                                    Funds Origin:
                                </div>

                                <input 
                                    onChange={this.handleChange} 
                                    type="text"
                                    name="funds_origin"
                                    value={this.state.funds_origin}
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Politically Exposed Person?:
                                </div>
                                
                                <select
                                    onChange={this.handleChange} 
                                    name='pep'
                                    className='select-element'
                                    value={this.state.pep}  
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Contract Date:
                                </div>

                                <input
                                    onChange={this.handleChange} 
                                    type="text"
                                    name="contract_date"
                                    placeholder='YYYY-MM-DD'
                                    value={this.state.contract_date}
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Assigned Risk:
                                </div>
                                
                                <select
                                    onChange={this.handleChange} 
                                    name='assigned_risk'
                                    className='select-element'
                                    value={this.state.assigned_risk}  
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <button className='btn' type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}