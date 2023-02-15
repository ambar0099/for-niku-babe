import './shared.scss';
import React from 'react';
import { AiFillTwitterCircle, AiFillFacebook, AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { Col, Row } from 'react-bootstrap';



const GroupIcon = (props) => {
    const columns = props.columns || 2;
    const rows = props.rows || 2;
    const icons = props.iconData || ['facebook'];
    const IconMap = {
        'facebook': <AiFillFacebook color='#3b5998'/>,
        'twitter': <AiFillTwitterCircle color='#55acee' />,
        'gmail': <AiFillMail color='#dc4e41' />,
        'whatsapp': <AiOutlineWhatsApp color='#43d854'/>,
        'messenger': <BsMessenger color='#006AFF'/>
    };
    const Icons = ({ name }) => {
        const renderIcon = IconMap[name] || IconMap[0];
        return(
            <div className='icon-cnt'>
                <div  onClick={(event) => {props.iconClicked(event, name) }} className='icon-outline'>
                    {renderIcon}
                </div>
            </div>
        )
    }

    let rowArray = [];
    let columnArray = [];
    let count = 0;
    for(let i=0; i < rows; i++)
    {
        for(let j=0; j<columns; j++)
        {
            const iconName = icons[count];
            if(iconName) {
                columnArray.push(
                    <Col key={i+j}>
                        <Icons name={iconName} />
                    </Col>
                )
                count = count + 1;
            }
        }
        rowArray.push(
            <Row key={i}>
                { columnArray }
            </Row>
        )
        columnArray = [];
    }

    return(
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
            { rowArray }
        </div>
    )
}

export default GroupIcon;