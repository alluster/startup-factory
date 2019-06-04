import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LinkHOC from '../LinkHOC';
import Container from '../Container';
import BackgroundImage from '../BackgroundImage';
import TextContainer from '../TextContainer';
import ImageContainer from '../ImageContainer';





const ProjectContainer = styled(Container)`
    min-height: 100vh;

`


const Project = (props) =>  {
  return (
      <div>
            <BackgroundImage backgroundImage={props.backgroundImage}/>
            <ProjectContainer>
                <div className="row">
                    <div className="col-md-6"> 
                            <TextContainer
                                textColor={props.textColor[0]}
                                name={props.name}
                                ingress={props.ingress}
                                body={props.body}
                            />
                    </div>
                    <div className="col-md-6">
                    
                            <ImageContainer image={props.image}/>
                    </div>
                </div>
            </ProjectContainer>

           </div>



     

  );
}

export default Project;
