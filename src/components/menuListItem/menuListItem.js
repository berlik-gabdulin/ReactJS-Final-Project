import React from 'react';
import { withRouter } from 'react-router-dom';
import { menuLoaded, menuRequested, menuCatchedError } from '../../actions';
import { connect } from 'react-redux';

const MenuListItem = ({item}) => {
    const { name, country, url, price} = item;

    return (
        <>
            <img src={url} alt="coffee" />
            <div className="shop__item-title">
                {name}
            </div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}</div>
        </>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuListItem));