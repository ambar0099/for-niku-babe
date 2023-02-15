import './shared.scss';
import React from 'react';
import Util from './util';

const AppButton = (props) => {
    return (
        <button style={props.data.buttonData.style} contentEditable='true'
            suppressContentEditableWarning="true" onClick={() => { props.elemClicked(props.data.buttonData.elemID, 'button'); }}
            onKeyDown={(event) => { Util.blockEdit(event) }} className='app-btn hover-edit'>
            <span style={props.data.buttonTextData.style} contentEditable='true'
                onClick={(event) => { props.elemClicked(props.data.buttonTextData.elemID, 'text'); Util.blockPropagation(event); }}
                suppressContentEditableWarning="true" className='hover-edit'>{props.children}</span>
        </button>
    )
}

export default AppButton;