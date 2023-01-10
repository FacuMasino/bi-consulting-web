import styled from 'styled-components';
import { Colors, FontSize } from '../../globalStyles';

export const ServicesSection = styled.section`
	display: flex;
	align-items: center;
	background-color: ${Colors.neutral.lightBlue};
	padding: 2rem 0;
`;

export const Heading = styled.h2`
	margin-bottom: 25px;
	font-size: ${FontSize.desktop.heading};
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	line-height: 65px;
	color: ${Colors.primary.blue};
	@media screen and (max-width: 960px) {
		font-size: ${FontSize.mobile.heading};
		line-height: 45px;
	}
`;

export const ServicesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		gap: 2rem;
	}
`;