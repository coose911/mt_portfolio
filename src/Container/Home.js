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


const Home = () => {








    
    return ( 
        <div>
            <ParagraphContainer>
                <Paragraph1>
                <p>
                    About me 
                </p>
                </Paragraph1>
                <Paragraph2>
                <p>
                    Skills
                </p>
                </Paragraph2>
                <Paragraph3>
                <p>
                    Background
                </p>
                </Paragraph3>
            </ParagraphContainer>
        </div>
    );
}

export default Home;