import './shared.scss';
import React from 'react';
import { AiFillTwitterCircle, AiFillFacebook, AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { Col, Row } from 'react-bootstrap';
import Util from './util';

const GroupIcon = (props) => {
    const columns = props.columns || 2;
    const rows = props.rows || 2;
    const icons = props.iconData || ['facebook'];
    const iconObject = props?.dbObject?.socialMediaScreen?.elements;
    const IconMap = {
        'facebook': <AiFillFacebook className="hover-edit"
            color={iconObject?.socialMediaFBIcon?.style?.color}
            contentEditable='true' suppressContentEditableWarning="true"
            onClick={(event) => { Util.blockPropagation(event); props.iconClicked(event, 'facebook'); }}
            style={iconObject.socialMediaFBIcon.style} />,
        'twitter': <AiFillTwitterCircle className="hover-edit"
            color={iconObject?.socialMediaTwitterIcon?.style?.color}
            contentEditable='true' suppressContentEditableWarning="true"
            onClick={(event) => { Util.blockPropagation(event); props.iconClicked(event, 'twitter'); }}
            style={iconObject.socialMediaTwitterIcon.style} />,
        'gmail': <AiFillMail className="hover-edit"
            color={iconObject?.socialMediaGmailIcon?.style?.color}
            contentEditable='true' suppressContentEditableWarning="true"
            onClick={(event) => { Util.blockPropagation(event); props.iconClicked(event, 'gmail'); }}
            style={iconObject.socialMediaGmailIcon.style} />,
        'whatsapp': <AiOutlineWhatsApp className="hover-edit" color={iconObject?.socialMediaWhatsAppIcon?.style?.color}
            contentEditable='true' suppressContentEditableWarning="true"
            onClick={(event) => { Util.blockPropagation(event); props.iconClicked(event, 'whatsapp'); }}
            style={iconObject.socialMediaWhatsAppIcon.style} />,
        'messenger': <BsMessenger className="hover-edit" color={iconObject?.socialMediaFBMsngrIcon?.style?.color}
            contentEditable='true' suppressContentEditableWarning="true"
            onClick={(event) => { Util.blockPropagation(event); props.iconClicked(event, 'messenger'); }}
            style={iconObject.socialMediaFBMsngrIcon.style} />
    };
    const Icons = ({ name }) => {
        const renderIcon = IconMap[name] || IconMap[0];
        let selector = null;
        switch (name) {
            case 'facebook':
                selector = 'socialMediaFBIconCont';
                break;
            case 'whatsapp':
                selector = 'socialMediaWhatsAppIconCont';
                break;
            case 'gmail':
                selector = 'socialMediaGmailIconCont';
                break;
            case 'messenger':
                selector = 'socialMediaFBMsngrIconCont';
                break;
            case 'twitter':
                selector = 'socialMediaTwitterIconCont';
                break;
        }
        return (
            <div className='icon-cnt'>
                <div onClick={(event) => { props.iconContClicked(event, name); }} className='icon-outline hover-edit'
                    contentEditable='true' suppressContentEditableWarning="true"
                    style={iconObject[selector].style}>
                    {renderIcon}
                </div>
            </div>
        )
    }

    let rowArray = [];
    let columnArray = [];
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const iconName = icons[count];
            if (iconName) {
                columnArray.push(
                    <Col key={i + j}>
                        <Icons name={iconName} />
                    </Col>
                )
                count = count + 1;
            }
        }
        rowArray.push(
            <Row key={i}>
                {columnArray}
            </Row>
        )
        columnArray = [];
    }

    return (
        <div>
            {/* <Row>
                <Col>
                    <Icons component={<AiFillFacebook color='#3b5998'/>} />
                </Col>
                <Col>
                    <Icons component={<AiFillTwitterCircle color='#55acee' />} />
                </Col>
                <Col>
                    <Icons component={<AiFillMail color='#dc4e41' />} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Icons component={<AiOutlineWhatsApp color='#43d854'/>} />
                </Col>
                <Col>
                    <Icons component={<BsMessenger color='#006AFF'/>} />
                </Col>
                <Col>
                    <Icons component={<AiFillMail color='#dc4e41' />} />
                </Col>
            </Row> */}
            {rowArray}
        </div>
    )
}

export default GroupIcon;