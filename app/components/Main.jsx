/**
 * Created by Роман on 28.05.2017.
 */
import React from "react";
import Code from "./Code.jsx";
import Inputs from "./Inputs.jsx";
import PopUpButton from "./PopUpButton";
import BuiltInButton from "./BuiltInButton";

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frame: "set",
            api_key: "e5ebc0d4-f90b-409b-874c-c729987001da",
            transaction_id: "123",
            payment_description: "Тестовый платеж",
            amount: "1000",
            success_url: "http://paymo.info/success.htm",
            fail_url:"http://paymo.info/fail.htm",
            signature: "8614632903a9672ede91910c109c8011"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendFrameType = this.sendFrameType.bind(this);
    };

    handleInputChange(data) {

        var name = data.target.name;
        var value = data.target.value;


        this.setState({[name] : value});
    };

    sendFrameType(data) {
        this.setState({frame: data});
    }


    render() {
        return (
            <div>
                <div className = "frame-type-buttons">
                    <PopUpButton frame_type="set" passFrameType={this.sendFrameType}/>
                    <BuiltInButton frame_type="open" passFrameType={this.sendFrameType}/>
                </div>
            <Inputs handleInputChange={this.handleInputChange}/>
            <Code state={this.state} api_key={this.state.api_key}/>
            </div>
        );
    };



};


