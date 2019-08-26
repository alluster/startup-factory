import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Gx from '@tgrx/gx';
import Container from '../Container';

const FooterContent = styled.div`
    color: #fff;
    background-color: #350054;
    bottom: -600px;
    width: 100%;
    height: 800px;
    @media (max-width: 700px) {
       height: 600px;

    }
`;

const Content = styled(Container)`
    padding-top: 150px;
    text-align: center;
    

`





const Footer = () =>
    <div>
        <FooterContent>
            <Content>
            <h1>X Startup Factory by Extreme Consulting</h1>
            <br />
            <h4>We bring Startups and Investors together</h4>
            <br />
            <p>www.extreme.consulting</p>

            </Content>
        </FooterContent>
    </div>;
export default Footer;
