import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {

        const {logoUrl, navClassName} = this.props;

        return(
            <ul className={`${navClassName}`}>
                <li className={`${navClassName}__item`}>
                    <Link to="/">
                        <img src={`/logo/${logoUrl}`} alt="logo" />
                    </Link>
                </li>
                <li className={`${navClassName}__item`}>
                    <Link to="/coffee/">Our coffee</Link>
                </li>
                <li className={`${navClassName}__item`}>
                    <Link to="/goods/">For your pleasure</Link>
                </li>
                <li className={`${navClassName}__item`}>
                    <Link to="/contacts/">Contact Us</Link>
                </li>
            </ul>
        )
    }
}