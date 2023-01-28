import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components';

const NavContainer = styled.div`
    background-color: #101010;
    font-family: Arial, Helvetica, sans-serif;
    width: 170px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    min-height: 500px;
    overflow: auto;
    margin-left: -20px;

`

const LinkContainer = styled.li`
    color: white;
    display: block;
    text-align: center;
    height: 21px;
    top: 50%;
    margin-top: 100px;
    margin-left: 1.3em;
    width: 80%;
    list-style-type: none;
    text-transform: uppercase;
    &:hover {
    background-color: yellow;
    transition-duration: 0.8s;
    border-radius: 10px;
    cursor: pointer;
    &.actvie {
        background-color: yellow;
    }
}  
`

const NavBar = () => {







    
    return ( 
        <NavContainer>
            <LinkContainer>
                <Link to="/">Home</Link>
            </LinkContainer>
            <LinkContainer>
                <Link to="/projects">Projects</Link>
            </LinkContainer>
            <LinkContainer>
                <Link to="/contact">Contact</Link>
            </LinkContainer>
        </NavContainer>
    );
}

export default NavBar;