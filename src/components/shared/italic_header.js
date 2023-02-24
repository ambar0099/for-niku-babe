import './shared.scss';
import React from 'react';

const ItalicHeader = (props) => {
    return(
        <i className='italic-header cursor-pointer hover-edit'
            onClick={() => props.contentClicked('couponScreenCpnHeader', 'text')}
            style={props?.dbObject?.couponsScreen?.elements?.couponScreenCpnHeader.style}>
            {props.title}
        </i>
    )
}

export default ItalicHeader;