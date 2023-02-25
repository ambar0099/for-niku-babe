import React, { useState } from 'react';
import '../../shared/shared.scss';

import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import InputText from '../../shared/input_text';
import AppButton from '../../shared/app_btn';

const DetailsScreen = (props) => {
    const screenDetails = props?.dbObject?.detailsScreen?.elements;
    const [selectedElement, setSelectedElement] = useState({});

    const contentClicked = (elementName, elementType) => {
        props.elementClicked({ elementName: elementName, elementType: elementType, screen: 'detailsScreen' });
    }

    const buttonData = () => {
        return { buttonData: screenDetails.detailsScreenShareButton, buttonTextData: screenDetails.detailsScreenShareButtonText };
    }

    const populatePlaceholderStyling = () => {
        var styles = `
        #detailsScreenName::placeholder { 
            font-weight: ${screenDetails.detailsScreenName.fontWeight};
            font-style: ${screenDetails.detailsScreenName.fontStyle};
            text-decoration: ${screenDetails.detailsScreenName.textDecoration};
            font-size: ${screenDetails.detailsScreenName.fontSize};
            color: ${screenDetails.detailsScreenName.color};
            font-family: ${screenDetails.detailsScreenName.fontFamily};
        }
        #detailsScreenEmail::placeholder { 
            font-weight: ${screenDetails.detailsScreenEmail.fontWeight};
            font-style: ${screenDetails.detailsScreenEmail.fontStyle};
            text-decoration: ${screenDetails.detailsScreenEmail.textDecoration};
            font-size: ${screenDetails.detailsScreenEmail.fontSize};
            color: ${screenDetails.detailsScreenEmail.color};
            font-family: ${screenDetails.detailsScreenEmail.fontFamily};
        }`;
        const styleSheet = document.querySelector("#detailsScreenName");
        if (styleSheet) {
            styleSheet.innerText = styles;
            document.head.appendChild(styleSheet);
        }
    }

    populatePlaceholderStyling();


    return (
        <React.Fragment>
            <ViewHeader title={screenDetails.detailsScreenHeading.text} style={screenDetails.detailsScreenHeading.style}
                contentEditable='true' suppressContentEditableWarning="true"
                field="detailsScreenHeading" click={contentClicked} />
            <ViewTitle className='view-secondary-title hover-edit' contentEditable='true'
                onClick={() => contentClicked('detailsScreenSubHeading', 'text')}
                suppressContentEditableWarning="true" title={screenDetails.detailsScreenSubHeading.text}
                style={screenDetails.detailsScreenSubHeading.style} />
            <InputText id="#detailsScreenInput" placeholder={screenDetails.detailsScreenName.text} readOnly />
            <InputText id="#detailsScreenEmail" placeholder={screenDetails.detailsScreenEmail.text} readOnly />
            <AppButton data={buttonData()} elemClicked={contentClicked}>{screenDetails.detailsScreenShareButtonText.text}</AppButton>
        </React.Fragment>
    )
}

export default DetailsScreen;