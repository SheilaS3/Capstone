import React, { Component } from 'react';

export default class NewClientForm extends Component {
    render() {
        return (
            <div className='new-client-form-wrapper'>
                <div className='new-client'>
                    <div className='title'>
                        <h1>NEW CLIENT FORM</h1>
                    </div>

                    <form className='new-client-form'>
                        <div className='column'>
                            <div className="form-group">
                                <div className='entry-name'>
                                    Name:
                                </div>

                                <input 
                                    type="text"
                                    name="client-name"
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Lastname:
                                </div>

                                <input 
                                    type="text"
                                    name="client-lastname"
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Person type:
                                </div>
                                
                                <select
                                    name='person-type'
                                    className='select-element'  
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
                                    type="text"
                                    name="client-id"
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    ID Expiry Date:
                                </div>

                                <input 
                                    type="text"
                                    name="client-id-expiry-date"
                                    placeholder='YYYY-MM-DD'
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Country:
                                </div>

                                <input 
                                    type="text"
                                    name="country"
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Risk Country?:
                                </div>
                                
                                <select
                                    name='risk-country'
                                    className='select-element'  
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
                                    type="text"
                                    name="activity"
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'> 
                                    Funds Origin:
                                </div>

                                <input 
                                    type="text"
                                    name="funds-origin"
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Politically Exposed Person?:
                                </div>
                                
                                <select
                                    name='pep'
                                    className='select-element'  
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
                                    type="text"
                                    name="contract-date"
                                    placeholder='YYYY-MM-DD'
                                />
                            </div>

                            <div className="form-group">
                                <div className='entry-name'>
                                    Assigned Risk:
                                </div>
                                
                                <select
                                    name='assigned-risk'
                                    className='select-element'  
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