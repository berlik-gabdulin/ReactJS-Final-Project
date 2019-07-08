import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithCoffeeService from '../../hoc';
import {Link, withRouter} from 'react-router-dom';
import MenuListItem from '../../menuListItem';
import Error from '../../error';
import Spinner from '../../spinner';

import { menuLoaded, menuRequested, menuCatchedError } from '../../../actions';

class CoffeePage extends Component  {

    componentDidMount() {
        const { CoffeeService, menuLoaded, menuRequested, menuCatchedError } = this.props;

        menuRequested();

        CoffeeService.getMenuItems(`/coffee/`)
            .then(res => menuLoaded(res))
            .catch(() => {
                menuCatchedError();
            });
    }

 
    render() {
        const { menuItems, loading, error } = this.props;
        
        const onUpdateSearch = (e) => {
            const term = e.target.value.toLowerCase();
            console.log(term);
            return menuItems.filter(item => {
                return item.name.toLowerCase().indexOf(term);
            })
        }
        
        const View = () => menuItems.map(item => {
            return (
                <Link key={item.id} to={`${item.id}/`} className="shop__item" >
                    <MenuListItem item={item}/>
                </Link>
            )
        });


        const errorMessage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = (!loading && !error) ? <View /> : null;        

        return(
            <>
                <div className="banner">
                    <div className="container">
                        <h1 className="title-big">Our Coffee</h1>
                    </div>
                </div>
                <section className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-2">
                                <img className="shop__girl" src="/img/coffee_girl.jpg" alt="girl" />
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About our beans</div>
                                <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />
                                <div className="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br/><br/>
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                    so questions. <br/>
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                    is song that held help face.
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="row">
                            <div className="col-lg-4 offset-2">
                                <form action="#" className="shop__search">
                                    <label className="shop__search-label" htmlFor="filter">Looking for</label>
                                    <input
                                        id="filter"
                                        type="text"
                                        placeholder="start typing here..."
                                        className="shop__search-input"
                                        onChange={e => onUpdateSearch(e)} />
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="shop__filter">
                                    <div className="shop__filter-label">
                                        Or filter
                                    </div>
                                    <div className="shop__filter-group">
                                        <button className="shop__filter-btn">Brazil</button>
                                        <button className="shop__filter-btn">Kenya</button>
                                        <button className="shop__filter-btn">Columbia</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="shop__wrapper">

                                    {errorMessage}
                                    {spinner}
                                    {content}

                                </div>
                            </div>
                        </div>
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


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(CoffeePage)));