import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithCoffeeService from '../../hoc/';
import { messagePosted, anotherMessage } from '../../../actions';
import InputMask from 'react-input-mask';


class ContactPage extends Component {

    render() {

        const { CoffeeService, message, messagePosted, messageSent, anotherMessage } = this.props;
        
        const onFormSubmit = (e) => {
            e.preventDefault();

            if (valueText.name.length > 2 && valueText.name.length < 20 && valueText.textMessage !== '' && valueText.email !== '') {
                console.log('fire');
                CoffeeService.postContacts(valueText);
                messagePosted();
            }
        }

        let valueText = message;

        const phoneInput = <InputMask mask="+7 (799) 999 99 99" maskChar=" " onChange={e => updateMessageBody(e)} className="shop__search-input" />;

        const updateMessageBody = (e) => {
            valueText[e.target.name] = e.target.value;
            return valueText;
        }

        const Form = () => {
            return (
                <form className="col-lg-6 offset-lg-3 contact-form" onSubmit={e => onFormSubmit(e)} >
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-3 offset-lg-3">
                                <label>Name<span>*</span></label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" name="name" className="shop__search-input" required onChange={e => updateMessageBody(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-3 offset-lg-3">
                                <label>E-mail<span>*</span></label>
                            </div>
                            <div className="col-lg-6">
                                <input type="email" name="email" className="shop__search-input" required onChange={e => updateMessageBody(e)} />
                            </div>
                        </div>
    
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-3 offset-lg-3">
                                <label>Phone</label>
                            </div>
                            <div className="col-lg-6">
                                {phoneInput}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="title-small clearfix">Your message<span>*</span></label>
                                <textarea type="text" name="textMessage" required placeholder="" onChange={e => updateMessageBody(e)} />
                            </div>
                            <div className="col-lg-12">
                                <button className="contact-form__btn">Send us</button>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }

        const ThankYou = () => {
            return (
                <div className="col-lg-6 offset-lg-3 contact-form">
                    <br/>
                    <br/>
                    <br/>
                    <div className="title">Thank you so much<br />We contact you as soon as posible</div>
                    <img src="/img/thankyou.svg" className="thankyouImg" alt=""/>
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={() => anotherMessage()} className="contact-form__btn">
                        Another?
                        <img src="/img/back_arrow.svg" alt=""/>
                    </button>
                </div>
            )
        }

        const content = messageSent ? <ThankYou /> : <Form />;

        return (
            <>
                <div className="banner">
                    <div className="container">
                        <h1 className="title-big">Contact Us</h1>
                    </div>
                </div>
                <section className="shop">
                    <div className="container">
                        <div className="title">Tell us about your tastes</div>
                        <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />
                        <br/>
                    </div>
                    {content}
                </section>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
        messageSent: state.messageSent
    }
}

const mapDispatchToProps = {
    messagePosted,
    anotherMessage
};

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(ContactPage));