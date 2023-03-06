import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';

import '../../shared/shared.scss';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import InputText from '../../shared/input_text';
import AppButton from '../../shared/app_btn';
import ACTION from '../../../state/actions';

const WelcomeScreen = () => {
    const state = useSelector(state => state.giftCard.widget.initial_json.welcomeScreen.elements);
    const [selectedElement, setSelectedElement] = useState('welcomeScreenHeading');
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({
    //         type: ACTION.UPDATE_SCREEN_DETAILS,
    //         payload: {
    //             activeScreen: 'welcomeScreen',
    //             activeElement: selectedElement
    //         }
    //     });
    // }, [selectedElement, dispatch]);

    const contentClicked = elementName => setSelectedElement(elementName);

    const buttonData = () => {
        return { buttonData: state.welcomeScreenSubmitButton, buttonTextData: state.welcomeScreenSubmitButtonText };
    }

    return (
        <React.Fragment>
            <ViewHeader title={state.welcomeScreenHeading.text} style={state.welcomeScreenHeading.style}
                field="welcomeScreenHeading" click={() => contentClicked('welcomeScreenHeading')} />
            <ViewTitle className='view-secondary-title hover-edit' contentEditable='true'
                onClick={() => contentClicked('welcomeScreenOfferHeading', 'text')}
                suppressContentEditableWarning="true" title={state.welcomeScreenOfferHeading.text}
                style={state.welcomeScreenOfferHeading.style} />
            <p className="hover-edit" contentEditable='true' onClick={() => contentClicked('welcomeScreenOfferDetails', 'text')}
                suppressContentEditableWarning="true" style={state.welcomeScreenOfferDetails.style}>
                {state.welcomeScreenOfferDetails.text}
            </p>
            <InputText placeholder={state.welcomeScreenEmail.text} readOnly />
            <AppButton data={buttonData()} elemClicked={contentClicked}>{state.welcomeScreenSubmitButtonText.text}</AppButton>
        </React.Fragment>
    );
}

export default WelcomeScreen;