import React from "react";
import './index.css';

const Popup = (props) => {
    return (
        <div className={"homescreen-popout-window"}>
            <div className={"homescreen-popout-contents text-dark text-center p-5"} onClick={props.handleClose}>
                {props.content}
                <button className={"btn btn-default"} onClick={props.handleClose}>Close</button>
            </div>
        </div>
    )
}

export default Popup;