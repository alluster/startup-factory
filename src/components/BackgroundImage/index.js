import React from 'react';

import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

const Content = styled.div`
    width: 100%;
    max-height: 100vh;
    position: absolute;
    z-index: -10;

`
const IMG = styled.div`
    height : 100vh
`


const BackgroundImage = (props) =>  {
    return (
        <Content>
        <Parallax y={[-10, 20]} tagOuter="figure">
            <img className="bg-image"src={props.backgroundImage } alt="image"/>
        </Parallax>

        </Content>
    );
  }

export default BackgroundImage;