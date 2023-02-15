import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';



const ProjectOne = styled.div`
    display: inline-block;
    width: 40%;
    height: 80%;
    flex: 1 0 200px;
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.36);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 10px;
    padding: 45px;
`

const ProjectTwo = styled.div`
margin-left: 25px;
    display: inline-block;
    width: 40%;
    height: 80%;
    flex: 1 0 200px;
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.36);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 10px;
    padding: 45px;
`

const ProjectContainer = styled.div`
    flex-wrap: flex;
    gap: 2px;
    margin-top: 10em;
    margin-left: 15em;
    margin-right: 5em;
    margin-bottom: 20em; 
`

const Projects = () => {


    
    return (
        <>  
            <ProjectContainer>
                <div>
                    <ProjectOne>
                        <h1>First Solo Project</h1>
                        <p>To create a habit tracking app which will track the consumption of breaks, coffee and water.
                            It will include a Diary section and a seperate page for breathing.
                            The aim of this app is to aid busy people in taking regular breaks to avoid burn out and keep track.
                        </p>
                        <video controls width='450' height='250'>
                            <source src='../Recordings/Solo-project-recording.mov' type="video/quicktime" />
                        </video>
                        <a href="https://github.com/coose911/First_Solo_Project" >
                            <FontAwesomeIcon icon ={faGithub} color='black'/>
                            Link to Project
                        </a>
                    </ProjectOne>
                    <ProjectTwo>
                        <h1>First Group Project</h1>
                        <p>To create a habit tracking app which will track the consumption of breaks, coffee and water.
                            It will include a Diary section and a seperate page for breathing.
                            The aim of this app is to aid busy people in taking regular breaks to avoid burn out and keep track.
                        </p>
                        <a href="https://github.com/coose911/Breaktime_App_Project" >
                            <FontAwesomeIcon icon ={faGithub} color='black'/>
                            Link to Project
                        </a>
                    </ProjectTwo>
                </div>
            </ProjectContainer>
        </>
    );
}

export default Projects;