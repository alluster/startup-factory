import React from 'react';

import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';

const Content = styled.div`
    width: 100%;
    position: absolute;
    z-index: -10;

`



const BackgroundImage = (props) =>  {
    return (
        <Content>
         <Parallax
            bgImage={`${props.backgroundImage}`}
            bgImageAlt="the cat"
            strength={1000}
        >
           
            <div style={{ height: '100vh' }} />
        </Parallax>

        </Content>
    );
  }

export default BackgroundImage;