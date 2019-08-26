import React, { useState, useEffect } from 'react';
import { getContent } from './../contentful';
import styled from 'styled-components';
import Container from '../components/Container';
import BG from './bg.jpg'
import MAP from './map.png'

import Footer from '../components/Footer';
import { Row, Col } from 'react-flexbox-grid';
import { Parallax } from 'react-scroll-parallax';


const ProductImage = styled.img`
	max-height: 60vh;
	max-width: 100%;
	@media (max-width: 700px) {
	}
`

const ProjectContainer = styled.div`
	// min-height: 100vh;
	padding-top: 100px;
	padding-bottom: 200px; 
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 700px) {
		padding-top: 40px;
		padding-bottom: 40px;
	}


`

const ProductImageContainer = styled.div `
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;

`

const H1 = styled.h1 `
	font-size: 3rem
	line-height: 3.2rem;
	margin-top: 0.8rem
	@media (max-width: 700px) {
		font-size: 2rem;
		line-height: 2rem;

	}
`

const H4 = styled.h4 `
	font-size: 1.3rem
	line-height: 2rem;
	margin-top: 0.2rem
	@media (max-width: 700px) {
		font-size: 1.2rem

	}
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
						backgroundSize: "cover",
						height: "80vh"

					}}>			
						<Container>
							<TextContainer>
								<h2 style={{color: "white" }}>X Startup Factory by Extreme Consulting </h2>
								<H1 style={{color: "white"}}>Lean Startup Incubator for Investors and Entrepreneurs.</H1>
								<H4 style={{color: "white"}}>We bring together great innovators with bright ideas and investors with decades of experience from the field. </H4>
							</TextContainer>
						</Container>		
						
					</ProjectContainer>
					<ProjectContainer style={{ 
						backgroundImage: `url()`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover"
					}}>			
						<Container>
							<TextContainer>
								{/* <P style={{color: "" }}>About the project</P> */}
								<H1 style={{color: ""}}>Startup Ecosystem</H1>
								<H4 style={{color: ""}}>We aim to build Startup companies that support others in the ecosystem after they have succeeded </H4>
								<P>By combining a large number of startups under one umbrella we enhance the overall success rate of our projects. As one company cannot succeed in short term thus the success stories in our portfolio will provide support to the newcomers and organically will grow the ecosystem. Startups in our portfolio have been categorized into stages that define their maturity and level of support needed. This helps us to provide clear information to all our stakeholders and investors.
								</P>
								<Row>
									<Col  md={12} lg={4} xl={4} >	
									<H4>Stage 1</H4>

										<ul>
											<li>Potential profitability is theoretical</li>
											<li>Investors familiarized but not yet onboard</li>
											<li>Product MVP launched </li>

										</ul>
									</Col>
									<Col  md={12} lg={4} xl={4} >	

									<H4>Stage 2</H4>
								<ul>
									<li>Potential profitability in the next 3 years</li>
									<li>First round investment collected and team gathered</li>
									<li>Final product development plan ready</li>

								</ul>
								</Col>
								<Col  md={12} lg={4} xl={4} >	

									<H4>Stage 3</H4>
								<ul>
									<li>Company financed and can produce capital to support stage 1 companies</li>
									<li>Successful investment rounds have been conducted</li>
									<li>Successful product launch and attractive offering achieved</li>

								</ul>
								</Col>
								</Row>
								<P>We are currently looking for new investors to join our incubator welcoming both private and supportive financial investment. We will offer equity based returning offers. Bellow you can view our current startup portfolio. 
									For more information please send email to tommi.heinonen@extreme.consulting. </P>							</TextContainer>
								<H4>Extreme Consulting Ltd</H4>
								<P>A Digital Service Agency focusing in digital business solutions for a vide range of customer companies. We enable our partners to discover new digital business and fine-tune and automate existing services with Design and Technology combined.</P>
						</Container>		
						
					</ProjectContainer>
				
					{ProjectList}
				<Footer />
			</div>
		

	);
}


export default Home;
