import { faCss3, faHtml5, faJava, faJs, faLinkedin, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';


const Paragraph1 = styled.div`
    margin-top: 10em;
    margin-left: 20em;

`
const Paragraph2 = styled.div`
    margin-top: 10em;
    margin-left: 20em;



`

const Paragraph3 = styled.div`
    margin-top: 10em;
    margin-left: 20em;

`

const ParagraphContainer = styled.div`

`

const Icons = styled.p`
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
                    </p>
                </Paragraph1>
                <Paragraph2>
                    <p>
                        <h1>Skills</h1>
                    </p>
                    <p>

                    </p>
                    <a>
                        <Icons>
                            <Icon>
                                <FontAwesomeIcon icon={faJs}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faPython}/>
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
                            <Icon>
                                <FontAwesomeIcon icon={faReact}/>
                            </Icon>
                        </Icons>
                    </a>
                </Paragraph2>
                <Paragraph3>
                    <p>
                        <h1>My Background</h1>
                    </p>
                </Paragraph3>
            </ParagraphContainer>
        </div>
    );
}

export default Home;