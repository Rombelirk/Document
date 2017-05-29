import React from "react";

export default class Code extends React.Component {
    constructor(props) {
        super(props);

    };

    render() {

        let parentID;
        if (this.props.state.frame === "set") {
            parentID = "iframe_parent";
        } else {parentID = "";}

        return (
            <div className="code">
                {"<script"} <br/>
                {"src='https://paymo.ru/paymentgate/iframe/checkout.js'></script>"} <br/>
                {"<script>"} <br/>
                <span className = "code-tab20"/>{"PaymoFrame."}<span className="blue-text">{this.props.state.frame}</span>{"({"} <br/>
                <span className = "code-tab40"/>parent_id: {'"' + parentID + '"'}<br/>
                <span className = "code-tab40"/>{'api_key: "'}<span className="blue-text">{this.props.state.api_key}</span>{'",'} <br/>
                <span className = "code-tab40"/>{'tx_id: "'}<span className="blue-text">{this.props.state.transaction_id}</span>{'",'} <br/>
                <span className = "code-tab40"/>{'description: "'}<span className="blue-text">{this.props.state.payment_description}</span>{'",'} <br/>
                <span className = "code-tab40"/>{'amount: "'}<span className="blue-text">{this.props.state.amount}</span>{'",'} <br/>
                <span className = "code-tab40"/>{'signature: "'}<span className="blue-text">{this.props.state.signature}</span>{'",'} <br/>
                <span className = "code-tab40"/>{'success_redirect: "'}<span className="blue-text">{this.props.state.success_url}</span>{'",'} <br/>
                <span className = "code-tab40"/>{'fail_redirect: "'}<span className="blue-text">{this.props.state.fail_url}</span>{'",'} <br/>

                <span className = "code-tab40"/>{"rebill: {},"} <br/>
                <span className = "code-tab40"/>{"extra: {},"} <br/>
                <span className = "code-tab40"/>{'version: "2.0.0"'}<br/>
                <span className = "code-tab20"/>{"})"}<br/>
                {"</script>"} <br/>
                {'<div id="iframe_parent">'}<br/>
                {'</div>'}<br/>

            </div>
        )
    }


}