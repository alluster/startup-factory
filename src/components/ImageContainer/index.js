import React from 'react';

import styled from 'styled-components';
const Container = styled.div`
    margin: 0;
    position: absolute;            
    top: 50%;                      
    transform: translate(0, -50%);

`
const IMG = styled.img`
    max-height: 80vh;
    text-align: right


`

const ImageContainer = (props) =>  {
    return (
        <Container>
             <IMG src={props.image} alt="image" />
        </Container>
    
    );
  }
    

export default ImageContainer;