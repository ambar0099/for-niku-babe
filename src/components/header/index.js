import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const headerData = [{
    name: 'Welcome',
    redirect: '/'
},{
    name: 'Details',
    redirect: '/details'
},{
    name: 'Share',
    redirect: '/social'
},{
    name: 'Coupons',
    redirect: '/coupons'
},{
    name: 'Thanks',
    redirect: '/thanks'
}]

const Header = (props) => {
    return(
        <header {...props}>
            <Nav activeKey='/'>
                {headerData.map(item => 
                    <Nav.Item key={item.name}>
                        <Nav.Link as={Link} to={item.redirect}>{item.name}</Nav.Link>
                    </Nav.Item>
                )}
            </Nav>
        </header>
    )
}

export default Header;