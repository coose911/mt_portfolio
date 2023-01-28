import React from 'react'
import styled from 'styled-components';
import gitHub_Logo from '../images/GitHub-logo 2.png'
import linkedIn_Logo from '../images/linkedin-logo-png.png'
import email_logo from '../images/envelope-logo.png'
import './Contact.css'




const Contact = () => {








    
    return ( 
        <>
            <li>
                <a href="https://github.com/coose911?tab=repositories" target="_blank" rel="noreferrer">
                <img src={gitHub_Logo}/>
                <span>GitHub</span>
                </a>
            </li>
            <li>
                <a href="" target="_blank" rel="noreferrer">
                <img src={email_logo}/>
                <span>Email - marcus.thomson91@gmail.com</span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/marcus-thomson-11076885/" target="_blank" rel="noreferrer">
                <img src={linkedIn_Logo}/>
                <span>LinkedIn</span>
                </a>
            </li>
        </>
    );
}

export default Contact;



{/* <div>
<ListContainer>
<ul>
    <div>
    <a target="_blank" rel="noreferrer" href="https://github.com/coose911?tab=repositories" >
        
    <LinkItem>
            <img src={email_logo}></img>
    </LinkItem>
    <span>testing</span>
    </a>
    </div>
    <li>
    <LinkItem>
        <img src={linkedIn_Logo}/>
    </LinkItem>
    </li>
    <li>
    <LinkItem>
        <img src={gitHub_Logo}/>
    </LinkItem>
    </li>
</ul>
</ListContainer>
</div> */}


// const ListContainer = styled.div`
//     object-fit: cover;
//     position: absolute;
//     margin: 10em;
//     width: fit-content;
// `

// const LinkItem = styled.div`
//     & > img {
//     width: 8%;
//     margin-left: 20%;
//     margin-top: 5em;
//     height: 25%}
// `