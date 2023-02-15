import React from 'react';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import AppButton from '../../shared/app_btn';
import AppAccordion from '../../shared/app_accordion';

const accordionContent = [{
    title: 'You get...',
    discription: '[$x.xx] [off / per digital gift card] when someone you refer [buy x] [spends $X.xx] [on their first order]'
},
{
    title: 'You get...',
    discription: '[$x.xx] [off / per digital gift card] when someone you refer [buy x] [spends $X.xx] [on their first order]'
}];

const ContentFormat = (content) => (
    content.map((item, index) => (
        <div key={index} className='content'>
            <strong>{item.title}</strong>
            <p>{item.discription}</p>
        </div>
    ))
);

const accordionData = [{
    title: 'Get 10% OFF for a referal',
    discription: 'Get 10% off after you spend $40. Your freind gets $10 off after they spend $40',
    toggleText: 'Coupon Details',
    content: ContentFormat(accordionContent)
},
{
    title: 'Get 10% OFF for a referal',
    discription: 'Get 10% off after you spend $40. Your freind gets $10 off after they spend $40',
    toggleText: 'Coupon Details',
    content: ContentFormat(accordionContent)
},
{
    title: 'Get 10% OFF for a referal',
    discription: 'Get 10% off after you spend $40. Your freind gets $10 off after they spend $40',
    toggleText: 'Coupon Details',
    content: ContentFormat(accordionContent)
}];

const CouponsScreen = (props) => {
    const screenDetails = props?.dbObject?.couponsScreen?.elements;
    const buttonData = () => {
        return { buttonData: screenDetails.couponsScreenShareButton, buttonTextData: screenDetails.couponsScreenShareButtonText };
    }
    const contentClicked = (elementName, elementType) => {
        props.elementClicked({ elementName: elementName, elementType: elementType, screen: 'welcomeScreen' });
    }

    return (
        <React.Fragment>
            <ViewHeader title={screenDetails.couponsScreenHeading.text} field="couponsScreenHeading"
                style={screenDetails.couponsScreenHeading.style} click={contentClicked} />
            <ViewTitle className='view-title hover-edit' contentEditable='true' suppressContentEditableWarning="true"
                title={screenDetails.couponsScreenSubHeading.text} style={screenDetails.couponsScreenSubHeading.style}
                onClick={() => contentClicked('couponsScreenSubHeading', 'text')} />
            <AppAccordion data={accordionData} />
            <p className='hover-edit' style={screenDetails.couponsScreenOfferDetails.style}
                onClick={() => contentClicked('couponsScreenOfferDetails', 'text')}
                contentEditable='true' suppressContentEditableWarning="true">{screenDetails.couponsScreenOfferDetails.text}
            </p>
            <AppButton data={buttonData()} elemClicked={contentClicked}>{screenDetails.couponsScreenShareButtonText.text}</AppButton>
        </React.Fragment>
    )
}

export default CouponsScreen;