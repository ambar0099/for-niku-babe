import './shared.scss';
import React from 'react';
import Util from '../shared/util';

const ViewHeader = (props) => {
    return (
        <p style={props.style} id='view-header' onKeyDown={(event) => Util.blockEdit(event)}
            className='hover-edit' contentEditable='true'
            suppressContentEditableWarning="true" onClick={() => { props.click(props.field, 'text') }}>
            {props.title || 'Header'}
        </p>
    )
}

export default ViewHeader