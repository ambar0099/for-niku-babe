import React, { useEffect, useState } from 'react';
import { useDispatch, } from 'react-redux';
import '../../shared/shared.scss';

import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import InputText from '../../shared/input_text';
import AppButton from '../../shared/app_btn';

const WelcomeScreen = (props) => {
    const screenDetails = props?.dbObject?.welcomeScreen?.elements;
    const [selectedElement, setSelectedElement] = useState({});

    const contentClicked = (elementName, elementType) => {
        props.elementClicked({ elementName: elementName, elementType: elementType, screen: 'welcomeScreen' });
    }

    const buttonData = () => {
        return { buttonData: screenDetails.welcomeScreenSubmitButton, buttonTextData: screenDetails.welcomeScreenSubmitButtonText };
    }


    return (
        <React.Fragment>
            <ViewHeader title={screenDetails.welcomeScreenHeading.text} style={screenDetails.welcomeScreenHeading.style}
                field="welcomeScreenHeading" click={contentClicked} />
            <ViewTitle className='view-secondary-title hover-edit' contentEditable='true'
                onClick={() => contentClicked('welcomeScreenOfferHeading', 'text')}
                suppressContentEditableWarning="true" title={screenDetails.welcomeScreenOfferHeading.text}
                style={screenDetails.welcomeScreenOfferHeading.style} />
            <p className="hover-edit" contentEditable='true' onClick={() => contentClicked('welcomeScreenOfferDetails', 'text')}
                suppressContentEditableWarning="true" style={screenDetails.welcomeScreenOfferDetails.style}>
                {screenDetails.welcomeScreenOfferDetails.text}
            </p>
            <InputText placeholder={screenDetails.welcomeScreenEmail.text} readOnly />
            <AppButton data={buttonData()} elemClicked={contentClicked}>{screenDetails.welcomeScreenSubmitButtonText.text}</AppButton>
        </React.Fragment>
    )
}

export default WelcomeScreen;