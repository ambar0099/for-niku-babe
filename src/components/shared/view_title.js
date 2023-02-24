import './shared.scss';
import React, { useCallback, useEffect } from 'react';
import Util from '../shared/util';

const ViewTitle = (props) => {
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
        <p className='hover-edit'  onKeyDown={handleKeypress} 
            contentEditable={true}
            suppressContentEditableWarning={true} {...props}>
            {props.title || 'Header title'}
        </p>
    )
}

export default ViewTitle;