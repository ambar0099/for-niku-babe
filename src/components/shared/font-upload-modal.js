import React, { useState, useEffect } from 'react';
import { UploadFont } from "./upload-fonts"

const UploadFontModal = (props) => {

    const [hiddenClass, setHideClass] = useState(!props.isHidden ? 'd-block' : 'd-none');
    const [isFormValid, setFormValid] = useState(false);
    const [filedata, setfileData] = useState({
        fontFamily: '',
        file: null
    });

    const handleClose = () => {
        setHideClass('d-none');
        props.onHandleClose();
    }

    const handleSave = () => {
        handleClose();
        props.onHandleSave(filedata);
    }

    useEffect(() => {
        setHideClass(!props.isHidden ? 'd-block' : 'd-none');
    }, [props.isHidden])

    const handleFormValidation = (isValid, fontFamily, file) => {
        setFormValid(isValid);
        setfileData({
            file: file,
            fontFamily: fontFamily
        });
    }

    return(
        <div className={`modal ${hiddenClass}`} tabIndex="-1" role="dialog" style={{background: 'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{props.title}</h5>
                    <button type="button" className="close-btn-cf" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <UploadFont checkFormValid={handleFormValidation}></UploadFont>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn save-btn-cf btn-primary" onClick={handleSave} disabled={!isFormValid}>Save changes</button>
                    <button type="button" className="btn cancel-btn-cf btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

UploadFontModal.defaultProps = {
    isHidden: true,
    title: 'Upload Custom font'
}

export {
    UploadFontModal
}