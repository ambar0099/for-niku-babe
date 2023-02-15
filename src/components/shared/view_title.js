import './shared.scss';
import React from 'react';
import Util from '../shared/util';

const ViewTitle = (props) => {
    return (
        <p className='hover-edit' onKeyDown={(event) => Util.blockEdit(event)} {...props}>
            {props.title || 'Header title'}
        </p>
    )
}

export default ViewTitle;