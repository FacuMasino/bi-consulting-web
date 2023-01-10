import React from 'react'
import { Container } from '../../globalStyles'
import { Heading, InfoContainer, InfoText, TextWrapper } from './InfoSection.elements';

interface InfoProps {
	textAlign?: string;
	flexDir?: string;
	textWidth?: string;
	heading: string;
	blockText: string;
}

const InfoSection = ({flexDir, textAlign, textWidth, heading, blockText}: InfoProps) : JSX.Element => {
  return (
	<Container>
		<InfoContainer flexDir={flexDir}>
			<TextWrapper textWidth={textWidth}>
				<Heading textAlign={textAlign}>{heading}</Heading>
				<InfoText textAlign={textAlign}>{blockText}</InfoText>
			</TextWrapper>
		</InfoContainer>
	</Container>
  )
}

export default InfoSection;