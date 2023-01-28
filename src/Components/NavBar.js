import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components';
import m from '../images/transparrent_m_logo.png'

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
    position: fixed;

`

const LinkContainer = styled.li`
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

const Mlogo = styled.div`
    margin-left: -18em;
    padding: 0;
    margin-top: -3em;
    height: 7em;

`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover{
        color: black;
    }
`;


const NavBar = () => {







    
    return ( 
        <NavContainer>
            <Mlogo>
            <img src={m}/>
            </Mlogo>
            <LinkContainer>
                <StyledLink to="/">Home</StyledLink>
            </LinkContainer>
            <LinkContainer>
                <StyledLink to="/projects">Projects</StyledLink>
            </LinkContainer>
            <LinkContainer>
                <StyledLink to="/contact">Contact</StyledLink>
            </LinkContainer>
        </NavContainer>
    );
}

export default NavBar;