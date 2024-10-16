import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavigationContainer from './navigation/navigation-container';
import Home from './pages/not-logged/home';
import About from './pages/not-logged/about';
import Contact from './pages/not-logged/contact';
import Login from './pages/not-logged/login';

import Dashboard from './pages/logged/dashboard';
import Checker from './pages/logged/checker';
import Clients from './pages/logged/clients';
import NewClient from './pages/logged/new-client';
import Icons from './helpers/icons';
import ClientDetail from './pages/logged/client-detail';
import NotFound from './pages/not-found';




class App extends Component {
    constructor() {
        super();

        Icons();
    }

    render() {
        return (
            <div className='app'>
                <Router>
                    <div>
                        <NavigationContainer />

                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="/login" element={<Login/>} />

                            <Route path="/dashboard" element={<Dashboard/>} />
                            <Route path="/checker" element={<Checker/>} />
                            <Route path="/clients" element={<Clients/>} />
                            <Route exact path="/clients/:slug" element={<ClientDetail/>} />
                            <Route path="/new-client" element={<NewClient/>} />

                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App
