import React, {Component} from 'react';
import WithCoffeeService from '../../hoc';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import MenuListItem from '../../menuListItem';
import Error from '../../error';
import Spinner from '../../spinner';

import { menuLoaded, menuRequested, menuCatchedError } from '../../../actions';


class MainPage extends Component {

    componentDidMount() {
        const { CoffeeService, menuLoaded, menuRequested, menuCatchedError } = this.props;

        menuRequested();

        CoffeeService.getMenuItems(`/bestsellers/`)
            .then(res => menuLoaded(res))
            .catch(() => {
                menuCatchedError();
            });
    }

 
    render() {
        const { menuItems, loading, error } = this.props;
                
        const View = () => menuItems.map(item => {
            return (
                <>
                    <Link to={`/coffee/${item.id}/`} className="best__item">
                        <MenuListItem 
                            key={item.id}
                            item={item}/>
                    </Link>
                </>
            )
        });


        const errorMessage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = (!loading && !error) ? <View /> : null;

        return(
            <>
                <div className="preview">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo" />
                                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <a href="#" className="preview__btn">More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="title">About Us</div>
                                <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />
                                <div className="about__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.<br/><br/>

                                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                    horrible but confined day end marriage. Eagerness furniture set preserved far
                                    recommend. Did even but nor are most gave hope. Secure active living depend son
                                    repair day ladies now.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="best">
                    <div className="container">
                        <div className="title">Our best</div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="best__wrapper">

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


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage)));