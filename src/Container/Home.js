import { faCss3, faHtml5, faJava, faJs, faLinkedin, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';



const Paragraph1 = styled.div`
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
    );
    margin-top: 10em;
    margin-left: 15em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.36);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 35px;
    padding: 45px;
    margin-right: 5em;

`
const Paragraph2 = styled.div`
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
    );
    margin-top: 10em;
    margin-left: 15em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.36);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 35px;
    padding: 45px;
    margin-right: 5em;

`

const Paragraph3 = styled.div`
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
    );
    margin-top: 10em;
    margin-left: 15em;
    margin-right: 5em;
    margin-bottom: 20em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.36);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 35px;
    padding: 45px;



`

const ParagraphContainer = styled.div`

`

const Icons = styled.p`
margin-top: -77px;
margin-bottom: -60px;
margin-left: 70px;
font-size: 4em;
margin-right: 2px;
display: flexbox;
`

const Icon = styled.p`
    margin-right: 1em;
`


const Home = () => {








    
    return ( 
        <div>
            <ParagraphContainer>
                <Paragraph1>
                    <p>
                        <h1>About Me</h1>
                        <p>I recently left my previous career to persue my dream in software. 
                            I am a hard working, enthusiastic and eager to learn software engineering
                            professional with a background in mechanical engineering, sales,
                            management and a passion for technology. I recently graduated from
                            an intensive 16 week Professional Software Development course at
                            CodeClan and I am looking to start a new career in a Software
                            Engineering position.</p>
                    </p>
                </Paragraph1>
                <Paragraph2>
                        <Icons>
                            <Icon>
                                <FontAwesomeIcon icon={faJs}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faPython}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faReact}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faJava}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faHtml5}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faDatabase}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faCss3}/>
                            </Icon>
                        </Icons>
                    <p>
                        <h1>Skills</h1>
                                During my time at CodeClan on the professional software engineering course i have been able to expand and contribute new skills to aid me in my new career from...
                            <ul>
                                <li> Programming languages below </li>
                                <li> Testing - Static, Unit, E2E, using Cypress </li>
                                <li> Building projects </li>
                                <li> Working with other Developers daily and in projects" </li>
                            </ul>
                                    Over my many years in prevous careers i have learnt many transferable skills to bring into my new career as a software engineer from...
                            <ul>
                                <li> Managament </li>
                                <li> Working in a team on large projects </li>
                                <li> Problem Solving </li>
                                <li> Project Managment  </li>
                                <li> People Skills </li>
                            </ul>
                    </p>
                    <p>

                    </p>
                    <a>
                    </a>
                </Paragraph2>
                <Paragraph3>
                    <p>
                        <h1>My Background</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </p>
                </Paragraph3>
            </ParagraphContainer>
        </div>
    );
}

export default Home;