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
                        <div className="form-group">
                            <div>
                                Name:
                            </div>

                            <input 
                                type="text"
                                name="client-name"
                            />
                        </div>

                        <div className="form-group">
                            <div>
                                Lastname:
                            </div>

                            <input 
                                type="text"
                                name="client-lastname"
                            />
                        </div>

                        <div className="form-group">
                            <div>
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
                            <div>
                                ID:
                            </div>

                            <input 
                                type="text"
                                name="client-id"
                            />
                        </div>

                        <div className="form-group">
                            <div>
                                ID Expiry Date:
                            </div>

                            <input 
                                type="text"
                                name="client-id-expiry-date"
                                placeholder='YYYY-MM-DD'
                            />
                        </div>

                        <div className="form-group">
                            <div>
                                Country:
                            </div>

                            <input 
                                type="text"
                                name="country"
                            />
                        </div>

                        <div className="form-group">
                            <div>
                                Risk Country?:
                            </div>
                            
                            <select
                                name='person-type'
                                className='select-element'  
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <div>
                                Activity:
                            </div>

                            <input 
                                type="text"
                                name="activity"
                            />
                        </div>

                        <div className="form-group">
                            <div>
                                Funds Origin:
                            </div>

                            <input 
                                type="text"
                                name="funds-origin"
                            />
                        </div>

                        <div className="form-group">
                            <div>
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
                            <div>
                                Contract Date:
                            </div>

                            <input 
                                type="text"
                                name="contract-date"
                                placeholder='YYYY-MM-DD'
                            />
                        </div>

                        <div className="form-group">
                            <div>
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

                        <div>
                            <button className='btn' type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}