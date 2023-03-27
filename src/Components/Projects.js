import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';
import './Projects.css'
import image1 from '../Project_1_images/1.png'
import image2 from '../Project_1_images/2.png'
import image3 from '../Project_1_images/3.png'
import image4 from '../Project_1_images/4.png'
import gImage1 from '../Project_2_images/1.png'
import gImage2 from '../Project_2_images/2.png'
import gImage3 from '../Project_2_images/3.png'
import gImage5 from '../Project_2_images/5.png'
import gImage6 from '../Project_2_images/6.png'
import uImage1 from '../Robit_images/Level-1-full-map.png'
import uImage2 from '../Robit_images/Level-3-full-map.png'
import uImage3 from '../Robit_images/level-1-action.png'
import uImage4 from '../Robit_images/level-3-action.png'
import uImage5 from '../Robit_images/level-2-action.png'



const ProjectContainer = styled.div`
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
                <div class='robit'>
                        <h1>Robit 2D Game</h1>
                        <h3>C# | Unity | 2 Weeks group project</h3>
                        <p>To build a 2D game  using Unity and writing in C#. The game was to be a space adventure game with  player and enemies, score/collectables and as much functionality as timely possible.
                            We also wanted to create our own characters using pixel art along with animation. We managed to design and animate the player (Robit) and the enemies.
                            This game allows the player to operate Robit while interacting with enemies and dodge obstacles like falling rocks/spikes and swinning morning stars.
                        </p>
                        <section >
                            <img  src={uImage1} />
                            <img  src={uImage2} />
                            <img  src={uImage3} />
                            <img  src={uImage4} />
                            <img  src={uImage5} />
                        </section>
                        <a class='gitLink' href="https://github.com/CrispyBread1/Robit" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon ={faGithub} color='black'/>
                            Link to Group Project
                        </a>
                    </div>
                    <div class='solo-project-section'>
                        <h1>Solo Project</h1>
                        <h3>Python | SQL | Jinja | HTML | CSS | Flask</h3>
                        <p>To create a Gym management system that allows the user to add, edit and delete members and classes.
                            Allow the user to book members onto certain classes while storing all the data on a PostrSQL database using Flask.
                        </p>
                        <section >
                            <img  src={image4} />
                            <img  src={image3} />
                            <img  src={image2} />
                            <img  src={image1} />
                        </section>
                        <a class='gitLink' href="https://github.com/coose911/First_Solo_Project" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon ={faGithub} color='black'/>
                            Link to Solo Project
                        </a>
                    </div>
                    <div class='group-project-section'>
                        <h1>Group Project</h1>
                        <h3>JavaScript | React | MongoDB | Express | CSS</h3>
                        <p>To create a habit tracking app which will track the consumption of breaks, coffee and water.
                            It will include a Diary section and a seperate page for breathing.
                            The aim of this app is to aid the user taking regular breaks to avoid burn out and keep track of consumption storing the data in a database (MongoDB) using Express server.
                        </p>
                        <section >
                            <img  src={gImage6} />
                            <img  src={gImage5} />
                            <img  src={gImage3} />
                            <img  src={gImage2} />
                            <img  src={gImage1} />
                        </section>
                        <a class='gitLink' href="https://github.com/coose911/Breaktime_App_Project" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon ={faGithub} color='black'/>
                            Link to Group Project
                        </a>
                    </div>
                </div>
            </ProjectContainer>
        </>
    );
}

export default Projects;