import React, { useState, useEffect } from 'react';
import { getContent } from './../contentful';
import styled from 'styled-components';

import Project from '../components/Project';

import Container from '../components/Container';
import BackgroundImage from '../components/BackgroundImage';
import TextContainer from '../components/TextContainer';
import ImageContainer from '../components/ImageContainer';
import BG from './bg.jpg'
import Footer from '../components/Footer';




const IntroContainer = styled(Container)`
    min-height: 100vh;

`

const Home = () =>  {
    const [data, setData] = useState([]);
        useEffect(() => {
        getContent('project')
        .then(entries => setData(entries))
        
}, [])
const array = data || []
const ProjectList = array.map( (item, i) => {
    return (

			<Project 
				key={i}
				name={item.fields.name} 
				ingress={item.fields.ingress}
				body={item.fields.body}
				image={item.fields.image.fields.file.url}
				backgroundImage={item.fields.backgroundImage.fields.file.url }
				textColor={item.fields.textColor}
            />
       
    )

})
	return (
			<div>
				            <BackgroundImage backgroundImage={BG}/>

				<IntroContainer>
					<TextContainer 
						textColor="white"
						name="Lean Startup Incubator for both, investors and entrepreneurs."
						ingress=""	
						body="We bring together great innovators with bright ideas and investors with decades of experience from the field. "
					>
					<h2 style={{color: "white" }}>X-Startup Factory by Extreme Consulting </h2>

					</TextContainer>
				</IntroContainer>
				{ProjectList}
			<Footer />
			</div>
		

	);
}


export default Home;
