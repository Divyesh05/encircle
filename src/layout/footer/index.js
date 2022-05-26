import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import "./footer.scss"

const Footer = () => {
    return <Container fluid className='foot-container' >
        <Row>
            <p className='signUpInfo'>Sign up to our special offers and promotions </p>
        </Row>

        <hr className='divider' />

        <Row >
            <Col>
                <Image src={require("../../assets/images/foot-marly-logo.png")} />
                <p>The Promenade, 201 Victoria Rd, Camps ABC, 8005</p>
                <p>Follow us:</p>
            </Col>
            <Col>
                <ul>
                    <li>Stay</li>
                    <li>Spa</li>
                    <li>Eat</li>
                    <li>Our Story</li>
                    <li>Experince</li>
                    <li>Facilities</li>
                </ul>
            </Col>

            <Col>
                <ul>
                    <li>Location</li>
                    <li>What's On</li>
                    <li>Promotions</li>
                    <li>Blog</li>
                    <li>Gallery</li>
                </ul>
            </Col>

            <Col>
                <Button className='text-uppercase bg-light border-none text-dark rounded-3'>Contact Us</Button>
                <div>tel: <a href='tel:+1234567890'>+1234567890</a></div>
                <div>email: <a href='mailto:test@gmail.com'>test@gmail.com</a></div>
            </Col>

        </Row>
        <Row>
            <Col>
                <Image src={require("../../assets/images/foot-home-collection.png")} />
            </Col>
        </Row>
    </Container>
}

export default Footer;