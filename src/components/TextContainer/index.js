
import React from 'react';
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import Container from '../Container';

const Content = styled(Container)`
    margin: 0;
    position: absolute;            
    top: 50%;                      
    transform: translate(0, -50%) 
`

const H1 = styled.h1 `
    line-height: 80px;

`

const H4 = styled.h4 `
    line-height: 34px;
`

const P = styled.p `
    line-height: 30px;
    font-size: 24px;
`

const TextContainer = (props) =>  {
    return (
        <Content>
                {props.children}
                <H1 style={{color: `${props.textColor}`}}>{props.name}</H1>
                <br/>
                <H4 style={{color: `${props.textColor}`}}>{props.ingress}</H4>
                <P style={{color: `${props.textColor}`}}>{props.body}</P>
        </Content>
      
    );
  }
    

export default TextContainer;