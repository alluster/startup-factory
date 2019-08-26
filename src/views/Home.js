import React, { useState, useEffect } from 'react';
import { getContent } from './../contentful';
import styled from 'styled-components';
import Container from '../components/Container';
import BG from './bg.jpg'
import Footer from '../components/Footer';
import { Row, Col } from 'react-flexbox-grid';
import { Parallax } from 'react-scroll-parallax';


const ProductImage = styled.img`
    max-height: 60vh;
	@media (max-width: 700px) {
	}
`

const ProjectContainer = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 100px;
	padding-bottom: 100px;

`

const ProductImageContainer = styled.div `
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;

`

const H1 = styled.h1 `
	font-size: 2.8rem
	line-height: 3.2rem;
	margin-top: 0.8rem
`

const H4 = styled.h4 `
	font-size: 1.3rem
	line-height: 2rem;
	margin-top: 0.2rem
`

const P = styled.p `
    line-height: 1.8rem;
    font-size: 1rem;
`

const TextContainer = styled.div`
 	display: flex;
	flex-direction: column;
	@media (max-width: 991px) {
		text-align: center;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
	}

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
			<div>
				<ProjectContainer style={{ 
					backgroundImage: `url(${item.fields.backgroundImage.fields.file.url})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"
					}}>
					<Container>
						<Row>
							<Col  md={12} lg={6} xl={6} >
								<TextContainer>
									<H1 style={{color: `${item.fields.textColor}`}}>{item.fields.name}</H1>
									<br/>
									<H4 style={{color: `${item.fields.textColor}`}}>{item.fields.ingress}</H4>
									<P style={{color: `${item.fields.textColor}`}}>{item.fields.body}</P>
								</TextContainer>
							</Col>
							<Col md={12} lg={6} xl={6}>
								<ProductImageContainer>
										<ProductImage src={item.fields.image.fields.file.url}/>
								</ProductImageContainer>
							</Col>
						</Row>
					</Container>
					
							
							
				</ProjectContainer>
			</div>

)
})
	return (
			<div>
				<ProjectContainer style={{ 
					backgroundImage: `url(${BG})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"
					}}>			
						<Container>
							<TextContainer>
								<h2 style={{color: "white" }}>X Startup Factory by Extreme Consulting </h2>
								<H1 style={{color: "white"}}>Lean Startup Incubator for both, investors and entrepreneurs.</H1>
								<br/>
								<H4 style={{color: "white"}}>We bring together great innovators with bright ideas and investors with decades of experience from the field. </H4>
							</TextContainer>
						</Container>		
						
					</ProjectContainer>
					{ProjectList}
				<Footer />
			</div>
		

	);
}


export default Home;
