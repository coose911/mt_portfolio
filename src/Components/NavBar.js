import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components';

const NavContainer = styled.div`
    background-color: #303030;
    font-family: Arial, Helvetica, sans-serif;
    width: 170px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    min-height: 500px;
    overflow: auto;
    margin-left: -30px;

`

const LinkContainer = styled.p`
    color: white;
    display: block;
    text-align: center;
    height: 21px;
    top: 50%;
    margin-top: 200px;
    width: 80%;
    list-style-type: none;
    text-transform: uppercase;
    &:hover {
    background-color: white;
    transition-duration: 0.8s;
    border-radius: 10px;
    cursor: pointer;
}  
`

const NavBar = () => {







    
    return ( 
        <NavContainer>
        <ul>
            <LinkContainer>
            <li>
                <Link to="/">Home</Link>
            </li>
            </LinkContainer>
            <LinkContainer>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            </LinkContainer>
            <LinkContainer>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </LinkContainer>
        </ul>
        </NavContainer>
    );
}

export default NavBar;