import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from '../pages/login'

export default class Routes extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path='/'
                            component={LoginPage}
                        />
                    </div>
                </BrowserRouter>
        )
    }
}