import React, { useEffect } from 'react';
import $ from 'jquery';
import "./header.scss";
import { Container } from 'react-bootstrap';


const Header = () => {

    useEffect(() => {

        $(".hambergur").on("click", () => {
            alert();
            $(".fullscreen").toggleClass("active").removeClass("reverse_anim");
        });

        $(".close").on("click", () => {
            $(".fullscreen").toggleClass("reverse_anim");
        });
    }, [])

    return <Container fluid style={{ backgroundImage: "url(../../assets/images/header-background.png)" }}>
        <header className="header">
            <div className="logo"><a href="/">Logo</a></div>
            <div className="hambergur">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className="navbar fullscreen">
                <ul>
                    <li style={{ "--animation-order": 1 }}><a href="/">Home</a></li>
                    <li style={{ "--animation-order": 2 }}><a href="/">About</a></li>
                    <li style={{ "--animation-order": 3 }}><a href="/">Contact</a></li>
                    <li style={{ "--animation-order": 4 }}><a href="/">services</a></li>
                    <li style={{ "--animation-order": 5 }}><a href="/">Blogs</a></li>

                </ul>
                <div className="close">
                    <div></div>
                </div>
            </nav>

            <div className='slide-title'>Discover Cape Town’s most renowned seaside stay  </div>
        </header>
    </Container>
}

export default Header;