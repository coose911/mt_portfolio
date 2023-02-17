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
    margin-top: 8em;
    margin-left: 15em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.36);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 10px;
    padding: 45px;
    margin-right: 5em;
`

const Paragraph2 = styled.div`
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
    );
    margin-top: 4em;
    margin-left: 15em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.36);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 10px;
    padding: 45px;
    margin-right: 5em;

`

const Paragraph3 = styled.div`
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
    );
    margin-top: 4em;
    margin-left: 15em;
    margin-right: 5em;
    margin-bottom: 20em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.36);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 10px;
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
                            professional with a background in mechanical/hydraulic engineering, sales,
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
                                During my time at CodeClan on the professional software engineering course i have been able to expand and contribute new skills to aid me in my new career including
                            <ul>
                                <li> Programming languages above </li>
                                <li> Testing - Static, Unit, E2E, using Cypress </li>
                                <li> Building projects </li>
                                <li> Working with other Developers daily </li>
                                <li> Working as a team on projects </li>
                                <li> Using different methodologies like Agile</li>
                            </ul>
                                    Over my many years in prevous careers i have learnt many transferable skills to bring into my new career as a software engineer from...
                            <ul>
                                <li> Managament </li>
                                <li> Working in a team on large projects </li>
                                <li> Problem Solving </li>
                                <li> Project Managment  </li>
                                <li> People Skills </li>
                                <li> Working under pressure </li>
                                <li> Working to deadlines </li>
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
                        <p>I served my apprenticeship at 19 as a mechanical engineer where i dealt with undustrial machinery like motors, gearboxes, fabrictaion etc i as involved in designing and building equipemnt and also some seriously big projects. From there i moved into oil and gas and became a hydraulic engineer where i dealt with lifting equipment before moving into high pressure builds for sub sea equipemnt. I gave this up to take on the family business in the automotive industry where i ran the business for a number of years. It was here where i decided to give it up to pursue a career in software which is something i have always been interested in from a young age.</p>
                    </p>
                </Paragraph3>
            </ParagraphContainer>
        </div>
    );
}

export default Home;