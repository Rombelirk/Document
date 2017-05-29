import React from "react";

export default class PopUpButton extends React.Component {
    constructor(props) {
        super(props);
        this.passFrameType = this.passFrameType.bind(this);

    };


    render() {
        return (
            <div className="pop-up-frame-button" onClick={this.passFrameType}>
                <div className="inner-button">


                    <img display="inline-block" width="32px" height="32px" src="../images/frame-pop-wh.svg"
                         alt=""/>
                    <div className="button-title-active">
                        ВСПЛЫВАЮЩИЙ ФРЕЙМ
                    </div>
                </div>

            </div>
        )
    };

    passFrameType() {
        this.props.passFrameType(this.props.frame_type);
    }


}