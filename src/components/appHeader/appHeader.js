import React, { Component } from 'react';
import NavBar from '../navBar/';

export default class AppHeader extends Component {

    render() {

        return (
            
        <div className="row">
            <div className="col-lg-6">
                <header>
                    <NavBar navClassName={'header'} logoUrl={'logo.svg'}/>
                </header>
            </div>
        </div>
            
        )
    }
}