import React, { Component } from 'react';
import NavBar from '../navBar/';

export default class AppFooter extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <NavBar navClassName={'footer'} logoUrl={'logo_black.svg'}/>
                        </div>
                    </div>
                    <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />
                </div>
            </footer>
        )
    }
}