import React, { useEffect } from 'react';
import './home.scss';
import RightPanel from './right-panel';
import { Row, Col, Image } from 'react-bootstrap';

const Home = (props) => {
    useEffect(() => {
    }, []);

    const changeImage = () => {
        document.getElementById('fileid').click();
    }

    const onFileSelect = (event) => {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (e) {
            document.querySelector('.home-img').setAttribute('src', e.target.result);
        }
    }
    const imagePath = 'https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg';
    const containerBorderRadius = props?.dbObject?.roundContainer ? '1em' : '0em';
    const containerColor = `${props?.dbObject?.containerColor}`;
    return (
        <React.Fragment>
            <Row suppressContentEditableWarning="true" className='logo'
                style={{ 'borderRadius': containerBorderRadius, 'border': containerColor }}>
                <Col xs={12} md={6} className="image-widget-container">
                    <button className="w-10" id='changeImageButton' style={{ 'position': 'absolute' }}
                        onClick={changeImage}>Change Image</button>
                    <Image className='home-img' src={imagePath} />
                    <input id='fileid' type='file' hidden onChange={onFileSelect} />
                </Col>
                <Col xs={12} md={6} className="content-widget-container">
                    <RightPanel />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Home;