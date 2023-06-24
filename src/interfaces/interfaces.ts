export interface IKeynote {
	name: string;
	company: string;
	image: string;
	socials?: ISocial[];
}

export interface ISocial {
	name: 'twitter' | 'linkedin' | 'github' | 'instagram' | 'facebook';
	link: string;
}

export interface INavigationItem {
	name: string;
	url: string;
}

export interface IPayment {
	name: string;
	icon: string;
}

export interface ISponsor {
	name: string;
	image: string;
	link: string;
}

export interface ISponsors {
	category: string;
	members: ISponsor[];
}

export interface IUser {
	name: string;
	role: string;
	token: string;
}
