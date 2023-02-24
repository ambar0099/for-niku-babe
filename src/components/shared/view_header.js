import './shared.scss';
import React, { useCallback, useEffect } from 'react';
import Util from '../shared/util';

const ViewHeader = (props) => {

    const handleKeypress = useCallback(
        (event) => {
            Util.blockEdit(event);
        },
        []
      );


    useEffect(() => {
        document.addEventListener("keydown", handleKeypress);
        return () => document.removeEventListener("keydown", handleKeypress);
      }, [handleKeypress]);

    return (
        <p style={props.style} id='view-header'
            onKeyDown={handleKeypress}
            className='hover-edit' contentEditable={true}
            suppressContentEditableWarning={true} onClick={() => {props.click(props.field, 'text') }}>
            {props.title || 'Header'}
        </p>
    )
}

export default ViewHeader