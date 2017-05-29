import React from "react";

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    };

    handleChange(e) {
        this.props.handleInputChange(e);
    };

    render() {
        return (
            <form className="fields">
                <div className="fields-name">API_KEY:</div>
                <input onChange={this.handleChange} className="input1" type="text" name="api_key" placeholder="e5ebc0d4-f90b-409b-874c-c729987001da"/>
                <div className="fields-name">
                    ID транзакции:
                </div>
                <input onChange={this.handleChange} className="input1" type="text" name="transaction_id" placeholder="123"/>
                <div className="fields-name">
                    Описание платежа:
                </div>
                <input onChange={this.handleChange} className="input1" type="text" name="payment_description" placeholder="Тестовый платеж"/>
                <div className="fields-name">
                    Сумма:
                </div>
                <input onChange={this.handleChange} className="input1" type="text" name="amount" placeholder="1000"/>
                <div className="fields-name">
                    Переход на URL в случае упешного платежа:
                </div>
                <input onChange={this.handleChange} className="input1" type="text" name="success_url" placeholder="http://paymo.info/success.htm"/>
                <div className="fields-name">
                    Переход на URL в случае ошибки:
                </div>
                <input onChange={this.handleChange} className="input1" type="text" name="fail_url" placeholder="http://paymo.info/fail.htm"/>
                <div className="fields-name">
                    SIGNATURE:
                </div>
                <input onChange={this.handleChange} className="input1" type="text" name="signature" placeholder="8614632903a9672ede91910c109c8011"/>

            </form>
        );
    };


};

export default Inputs;