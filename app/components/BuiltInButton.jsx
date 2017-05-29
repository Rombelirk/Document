import React from "react";

export default class BuiltInButton extends React.Component {
    constructor(props) {
        super(props);
        this.passFrameType = this.passFrameType.bind(this);

    };


    render() {
        return (
            <div className="built-in-frame-button" onClick={this.passFrameType}>
                <div className="inner-button">
                    <img display="inline-block" width="32px" height="32px" src="../images/require.svg"
                         alt=""/>
                    <div className="button-title">

                        ВСТРОЕННЫЙ ФРЕЙМ
                    </div>
                </div>
            </div>
        )
    };

    passFrameType() {
        this.props.passFrameType(this.props.frame_type);
    }


}