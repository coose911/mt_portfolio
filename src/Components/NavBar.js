import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components';

const NavContainer = styled.ul`
    background-color: 181818;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    min-height: 500px;
`

const LinkContainer = styled.li`
`

const NavBar = () => {







    
    return ( 

        <ul>

            <li>
                <Link to="/">Home</Link>
            </li>


            <li>
                <Link to="/projects">Projects</Link>
            </li>


            <li>
                <Link to="/contact">Contact</Link>
            </li>
  
        </ul>

    );
}

export default NavBar;