import React, { Component } from 'react';
import WithCoffeeService from '../../hoc';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Error from '../../error';
import Spinner from '../../spinner';

import { menuLoaded, menuRequested, menuCatchedError } from '../../../actions';

class CoffeeSinglePage extends Component {

    componentDidMount() {
        const { CoffeeService, menuLoaded, menuRequested, menuCatchedError } = this.props;

        console.log()

        menuRequested();

        CoffeeService.getMenuItems('/coffee/')
            .then(res => menuLoaded(res))
            .catch(() => {
                menuCatchedError();
            });
    }

    render() {

        const { loading, error } = this.props;

        const View = () => {

            const { menuItems, menuListItemId } = this.props;

            const menuItem = menuItems.filter(item => item.id === menuListItemId);

            const { url, country, price, description } = menuItem[0];

            return (
                <div className="row">
                    <div className="col-lg-5 offset-1">
                        <img className="shop__girl" src={url} alt="coffee_item" />
                    </div>
                    <div className="col-lg-4">
                        <div className="title">About it</div>
                        <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />
                        <div className="shop__point">
                            <span>Country:</span>
                            {country}
                        </div>
                        <div className="shop__point">
                            <span>Description:</span>
                            {description}
                        </div>
                        <div className="shop__point">
                            <span>Price:</span>
                            <span className="shop__point-price">{price}$</span>
                        </div>
                    </div>
                </div>
            )
        }

        const errorMessage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = (!loading && !error) ? <View /> : null;

        return (
            <>
                <div className="banner">
                    <div className="container">
                        <h1 className="title-big">Our Coffee</h1>
                    </div>
                </div>
                <section className="shop">
                    <div className="container">
                        {errorMessage}
                        {spinner}
                        {content}
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuCatchedError
};


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(CoffeeSinglePage)));