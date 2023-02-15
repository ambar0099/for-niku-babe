import React, { useEffect } from 'react';
import './home.scss';
import RightPanel from './right-panel';
import { Row, Col, Image } from 'react-bootstrap';

const Home = () => {
    useEffect(() => {
        setImage();
    }, []);

    const setImage = () => {
        // const imageContainer = document.querySelector('.image-widget-container');
        // if (imageContainer) {
        //     imageContainer.style.backgroundImage =  "url('https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg') no-repeat center center fixed";
        // }
    }

    const imagePath = 'https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg';
    return (
        <React.Fragment>
            <Row className='logo'>
                <h1>LOGO</h1>
            </Row>
            <Row>
                <Col xs={12} md={6} className="image-widget-container" style={{
                    "backgroundImage": `url('${imagePath}')`,
                    "backgroundSize": 'cover', "backgroundPosition": 'center', "backgroundRepeat": 'no-repeat'
                }}>
                    {/* <Image className='home-img' src='https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg' /> */}
                </Col>
                <Col xs={12} md={6} className="content-widget-container">
                    <RightPanel />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Home;