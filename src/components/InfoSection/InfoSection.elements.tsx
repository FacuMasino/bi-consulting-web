import styled from 'styled-components';
import { Colors, FontSize } from '../../globalStyles';

interface InfoSectionProps {
	textAlign?: string;
	flexDir?: string;
	textWidth?: string;
}

export const InfoContainer = styled.div<InfoSectionProps>`
	display: flex;
	flex-direction: ${({flexDir}) => flexDir ? flexDir : 'row'};
	align-items: center;
	margin: 2rem 0;
	@media screen and (max-width: 960px) {
		margin: 1rem 0;
	}
`;

export const TextWrapper = styled.section<InfoSectionProps>`
	max-width: ${({textWidth}) => textWidth};
`;

export const Heading = styled.h2<InfoSectionProps>`
	margin-bottom: 25px;
	font-size: ${FontSize.desktop.heading};
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	line-height: 65px;
	color: ${Colors.primary.blue};
	text-align: ${({textAlign}) => textAlign ? textAlign : 'left'};
	
	@media screen and (max-width: 960px) {
		font-size: ${FontSize.mobile.heading};
		line-height: 45px;
	}
`;

export const InfoText = styled.p<InfoSectionProps>`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: ${FontSize.desktop.paragraph};
	line-height: 22px;
	text-align: ${({textAlign}) => textAlign ? textAlign : 'left'};
	color: ${Colors.neutral.veryDarkGray};
	@media screen and (max-width: 960px) {
		font-size: ${FontSize.mobile.paragraph};
	}
`;