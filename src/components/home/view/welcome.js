import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ACTION from '../../../state/actions';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import InputText from '../../shared/input_text';
import AppButton from '../../shared/app_btn';
import '../../shared/shared.scss';

const WelcomeScreen = () => {

    const state = useSelector(state => state.giftCard.widget.initial_json.welcomeScreen.elements);
    const [selectedElement, setSelectedElement] = useState('welcomeScreenHeading');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_SCREEN_DETAILS,
            payload: {
                activeScreen: 'welcomeScreen',
                activeElement: selectedElement
            }
        });
    }, [selectedElement, dispatch]);

    const contentClicked = elementName => setSelectedElement(elementName);
    const buttonData = () => {
        return { buttonData: state.welcomeScreenSubmitButton, buttonTextData: state.welcomeScreenSubmitButtonText }
    }


    return (
        <React.Fragment>
            <ViewHeader tabIndex="0" title={state.welcomeScreenHeading.text}
                style={state.welcomeScreenHeading.style}
                field="welcomeScreenHeading" click={contentClicked} />
            <ViewTitle className='view-secondary-title hover-edit'
                onClick={() => contentClicked('welcomeScreenOfferHeading', 'text')}
                title={state.welcomeScreenOfferHeading.text}
                style={state.welcomeScreenOfferHeading.style} />
            <p className="hover-edit curosr-pointer" contentEditable='true'
                onClick={() => contentClicked('welcomeScreenOfferDetails', 'text')}
                suppressContentEditableWarning="true" style={state.welcomeScreenOfferDetails.style}>
                {state.welcomeScreenOfferDetails.text}
            </p>
            <InputText placeholder={state.welcomeScreenEmail.text} readOnly />
            <AppButton data={buttonData()} elemClicked={contentClicked}>{state.welcomeScreenSubmitButtonText.text}</AppButton>
        </React.Fragment>
    )
}

export default WelcomeScreen;