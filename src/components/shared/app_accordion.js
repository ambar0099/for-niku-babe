import './shared.scss';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import ItalicHeader from './italic_header';

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <div onClick={decoratedOnClick}>
            {children}
        </div>
    );
}

const AppAccordion = (props) => {

    const contentClicked = (elementName, elementType) => {
        props.elementClicked(elementName, elementType);
    }


    const data = props.data;
    return (
        <Accordion defaultActiveKey="0">
            {data && data.map((item, index) => (
                <Card key={index}>
                    <Card.Header>
                        <ItalicHeader title={item.title} contentClicked={contentClicked} dbObject={props.dbObject}></ItalicHeader>
                        <p className='accordion-desc hover-edit'
                            onClick={() => contentClicked('couponScreenCpnSubHeader', 'text')}
                            style={props?.dbObject?.couponsScreen?.elements?.couponScreenCpnSubHeader.style}>
                            {item.discription}
                        </p>
                        <hr />
                        <CustomToggle eventKey={index}>
                            <small className='toggle-text'><AiOutlineInfoCircle size='20' className="hover-edit"
                                onClick={() => contentClicked('couponScreenCpnIcon', 'icon')} 
                                style={props?.dbObject?.couponsScreen?.elements?.couponScreenCpnIcon.style}/>
                                <span className="hover-edit"
                                    onClick={() => contentClicked('couponScreenCpnIconText', 'text')}
                                    style={props?.dbObject?.couponsScreen?.elements?.couponScreenCpnIconText.style}>
                                    {item.toggleText}
                                </span>
                            </small>
                        </CustomToggle>
                    </Card.Header>
                    <Card.Body className="hover-edit"
                        onClick={() => contentClicked('couponScreenCpnDescription', 'text')}
                        style={props?.dbObject?.couponsScreen?.elements?.couponScreenCpnDescription.style}>{item.content}</Card.Body>
                </Card>
            ))}
        </Accordion>
    )
}

export default AppAccordion;