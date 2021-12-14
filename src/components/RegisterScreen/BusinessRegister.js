import React, {useState} from "react";

const BusinessRegister = ({setFile, isFinished}) => {
    const [fileDone, setFileDone] = useState(true);

    return (
        <div className="mb-4 has-validation">
            <label className="form-label" htmlFor="registerFile">
                Supporting documents URL (pdf)
            </label>
            <input type="text"
                   defaultValue="http://www.africau.edu/images/default/sample.pdf"
                   placeholder="Input the url of your file"
                   id="registerFile"
                   className={`form-control ${(!isFinished && !fileDone) ? "is-invalid" : ""}`}
                   onChange={(e) => {
                       setFile(e.target.value);
                       e.target.value === "" ? setFileDone(false) : setFileDone(true)
                   }}/>
            <div className="invalid-feedback">
                Please fill out
            </div>
        </div>
    )
}

export default BusinessRegister;