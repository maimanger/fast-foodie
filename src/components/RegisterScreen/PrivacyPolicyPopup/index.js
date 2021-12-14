import React from "react";
import './index.css';

const Popup = (props) => {
    return (
        <div className={"register-popout-window"}>
            <div className={"register-popout-contents p-5"} onClick={props.handleClose}>
                {props.content}
                <button className={"btn btn-secondary float-end"} onClick={props.handleClose}>Close</button>
            </div>
        </div>
    )
}

export default Popup;