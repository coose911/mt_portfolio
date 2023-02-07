import { faCss3, faHtml5, faJava, faJs, faLinkedin, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Hanken+Grotesk:wght@300&family=Quicksand&display=swap');
</style>


const Paragraph1 = styled.div`
    margin-top: 10em;
    margin-left: 15em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(36,148,162,1);
    border: 1px solid rgba(48,75,120,1);
    border-radius: 35px;
    padding: 45px;
    margin-right: 5em;

`
const Paragraph2 = styled.div`
    margin-top: 10em;
    margin-left: 15em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 8px 32px 0 rgba(36,148,162,1);
    border: 1px solid rgba(48,75,120,1);
    border-radius: 35px;
    padding: 45px;
    margin-right: 5em;
`

const Paragraph3 = styled.div`
    margin-top: 10em;
    margin-left: 15em;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 8px 32px 0 rgba(36,148,162,1);
    border: 1px solid rgba(48,75,120,1);
    border-radius: 35px;
    padding: 45px;
    margin-right: 5em;
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
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </p>
                </Paragraph1>
                <Paragraph2>
                    <p>
                        <h1>Skills</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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