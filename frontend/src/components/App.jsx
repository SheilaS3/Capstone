import React, { Component } from 'react'

import ClientsContainer from './clients/clients-container';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <h1>AML KYC</h1>
                <ClientsContainer />
            </div>
        );
    }
}

export default App
