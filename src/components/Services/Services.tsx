import React from 'react'
import { Heading, ServicesRow, ServicesSection } from './Services.elements'
import { Container } from '../../globalStyles';

const Services = () => {
  return (
	<ServicesSection>
		<Container>
			<Heading>Lo que ofrecemos</Heading>
			<ServicesRow>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</ServicesRow>
		</Container>
	</ServicesSection>
  )
}

export default Services