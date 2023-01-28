import React from 'react'
import styled from 'styled-components';
import logo from '../images/myLogo.svg'

const ImageContainer = styled.div`
    & > img {
    width: 28%;
    margin-left: 70%;
    margin-top: -2em;
    height: 40%}
`


const Home = () => {








    
    return ( 
        <div>
        <ImageContainer>
        <img src={logo} />
        </ImageContainer>
        </div>
    );
}

export default Home;