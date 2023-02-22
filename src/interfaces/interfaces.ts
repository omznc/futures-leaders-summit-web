export interface IKeynote {
	name: string;
	company: string;
	image: string;
	socials?: ISocial[];
}

export interface ISocial {
	name: 'twitter' | 'linkedin' | 'github' | 'instagram';
	link: string;
}

export interface INavigationItem {
	name: string;
	url: string;
}