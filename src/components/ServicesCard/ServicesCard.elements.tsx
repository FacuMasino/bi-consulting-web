import styled from 'styled-components';
import { Colors } from '../../globalStyles';

export const CardWrapper = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	border: 1px solid ${Colors.primary.blue};
`;