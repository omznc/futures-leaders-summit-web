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

export interface IPaymentMethod {
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

export interface ITravelGrant {
	id: string;
	firstName: string;
	lastName: string;
	academicStatus: string;
	accommodationNeeded: string;
	approved: boolean;
	birthDate: string;
	createdAt: string;
	currentCity: string;
	email: string;
	fieldOfStudy: string;
	graduationYear: string;
	highSchoolCity: string;
	linkedinUrl: string;
	lowIncomeHousehold: string;
	phoneNumber: string;
	travelExpensesNeeded: string;
	travelGrantImpact: string;
	travelGrantMotivation: string;
	university: string;
	updatedAt: string;
}

export interface IFilterTravelGrantsResponse {
	content: ITravelGrant[];
	pageable: IPageable;
	last: boolean;
	totalPages: number;
	totalElements: number;
	sort: ISort;
	first: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	empty: boolean;
}

export interface IRegistration {
	id: string;
	firstName: string;
	lastName: string;
	birthDate: string;
	city: string;
	createdAt: string;
	email: string;
	fieldOfStudy: string;
	foodPreferences: string;
	linkedinUrl: string;
	paymentConfirmationCode: string;
	personalDocument: IPersonalDocument | null;
	phoneNumber: string;
	shirtSize: string;
	talentPoolAgreement: string;
	ticketType: string;
	updatedAt: string;
}

export interface IFilterRegistrationsResponse {
	content: IRegistration[];
	pageable: IPageable;
	empty: boolean;
	first: boolean;
	last: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	sort: ISort;
	totalElements: number;
	totalPages: number;
}

export interface IPersonalDocument {
	id: string;
	name: string;
	type: string;
	data: string;
	updatedAt: string;
}

export interface ICustomer {
	id: string;
	name: string;
	surname: string;
	createdAt: string;
	discountCode: string;
	discountUsed: boolean;
	discountValue: number;
	email: string;
	paymentConfirmationCode: string;
	ticketPrice: number;
	updatedAt: string;
}

export interface IPayment {
	id: string;
	payerFullName: string;
	payerEmail: string;
	payerAddress: string;
	payerCity: string;
	payerCountry: string;
	payerPhoneNumber: string;
	payerZip: string;
	paymentAmount: number;
	paymentCurrency: string;
	paymentDescription: string;
	paymentMethod: string;
	paymentNumber: string;
	paymentReference1: string | null;
	paymentReference2: string | null;
	paymentStatus: string;
	createdAt: string;
	updatedAt: string;
	customers: ICustomer[];
}

export interface IFilterPaymentsResponse {
	content: IPayment[];
	pageable: IPageable;
	last: boolean;
	totalPages: number;
	totalElements: number;
	sort: ISort;
	first: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	empty: boolean;
}

export interface IPageable {
	pageNumber: number;
	pageSize: number;
	offset: number;
	paged: boolean;
	sort: ISort;
	unpaged: boolean;
}

export interface IDiscount {
	id: string;
	discountName: string;
	value: number;
	createdAt: string;
	updatedAt: string;
	relevantTicketType: string;
	availableUnits: number;
	unitsUsed: number;
}

export interface IFilterDiscountsResponse {
	content: IDiscount[];
	pageable: IPageable;
	last: boolean;
	totalPages: number;
	totalElements: number;
	sort: ISort;
	first: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	empty: boolean;
}

export interface ISort {
	sorted: boolean;
	unsorted: boolean;
	empty: boolean;
}
