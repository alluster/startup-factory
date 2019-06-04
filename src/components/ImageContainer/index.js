import React from 'react';

import styled from 'styled-components';
const Container = styled.div`
    position: absolute;            
    top: 50%;                      
    transform: translate(0, -50%);

`
const IMG = styled.img`
    max-height: 80vh;
    margin-left: 90px;



`

const ImageContainer = (props) =>  {
    return (
        <Container>
             <IMG src={props.image} alt="image" />
        </Container>
    
    );
  }
    

export default ImageContainer;