interface ISection {
	textAlign?: string;
	flexDir?: string;
	textWidth?: string;
	heading: string;
	blockText: string;
};

type TFeaturesList = {
	iconUrl: string;
	iconText: string;
}

interface IFeaturesList {
	flexDir: 'row' | 'column';
	featuresArray: Array<TFeaturesList>;
}

export const sectionOne: ISection = {
	textAlign: 'center',
	flexDir: 'column',
	textWidth: '800px',
	heading: '¿Por qué elegirnos?',
	blockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const featuresList: IFeaturesList = {
	flexDir: 'row',
	featuresArray: [
					{
						iconUrl: '/assets/images/hand-holding-heart-solid.svg',
						iconText: 'Razón 1.',
					},
					{
						iconUrl: '/assets/images/handshake-solid.svg',
						iconText: 'Razón 2.',
					},
					{
						iconUrl: '/assets/images/rocket-solid.svg',
						iconText: 'Razón 3.',
					},
				]
}