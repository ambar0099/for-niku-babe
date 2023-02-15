import React from 'react';
import GroupIcon from '../../shared/group_icon';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import AppButton from '../../shared/app_btn';

const iconsToRender = [
    'facebook',
    'whatsapp',
    'gmail',
    'messenger',
    'twitter'
];

const SocialMediaSharing = (props) => {
    const screenDetails = { ...props?.dbObject?.socialMediaScreen?.elements };
    const contentClicked = (elementName, elementType) => {
        props.elementClicked({ elementName: elementName, elementType: elementType, screen: 'socialMediaScreen' });
    }
    const buttonData = () => {
        return { buttonData: screenDetails.socialMediaShareButton, buttonTextData: screenDetails.socialMediaShareButtonText };
    }
    const iconClick = (event, icon) => {
        const prevSelectedIcon = document.querySelector('.icon-selected');
        if (prevSelectedIcon) {
            prevSelectedIcon.classList.remove('icon-selected');
        }
        event.target.classList.add('icon-selected');
        switch (icon) {
            case 'facebook':
                screenDetails.socialMediaShareButtonText.text = 'Post on Facebook';
                break;
            case 'whatsapp':
                break;
            case 'gmail':
                break;
            case 'messenger':
                break;
            case 'twitter':
                break;
        }
    }

    return (
        <React.Fragment>
            <ViewHeader title={screenDetails.socialMediaScreenHeading.text}
                style={screenDetails.socialMediaScreenHeading.style} field="socialMediaScreenHeading" click={contentClicked} />
            <ViewTitle contentEditable='true' suppressContentEditableWarning="true" className='view-title hover-edit'
                title={screenDetails.socialMediaScreenSubHeading.text}
                style={screenDetails.socialMediaScreenSubHeading.style}
                onClick={() => contentClicked('socialMediaScreenSubHeading', 'text')} />
            <GroupIcon iconData={iconsToRender} rows={3} columns={2} iconClicked={iconClick}></GroupIcon>
            <AppButton data={buttonData()} elemClicked={contentClicked}>{screenDetails.socialMediaShareButtonText.text}</AppButton>
        </React.Fragment>
    )
}

export default SocialMediaSharing;