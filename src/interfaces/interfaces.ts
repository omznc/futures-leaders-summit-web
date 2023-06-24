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

export interface TravelGrant {
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

export interface FilterTravelGrantsResponse {
	content: TravelGrant[];
	pageable: Pageable;
	last: boolean;
	totalPages: number;
	totalElements: number;
	sort: Sort;
	first: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	empty: boolean;
}

export interface Registration {
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
	personalDocument: PersonalDocument | null;
	phoneNumber: string;
	shirtSize: string;
	talentPoolAgreement: string;
	ticketType: string;
	updatedAt: string;
}

export interface FilterRegistrationsResponse {
	content: Registration[];
	pageable: Pageable;
	empty: boolean;
	first: boolean;
	last: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	sort: Sort;
	totalElements: number;
	totalPages: number;
}

export interface PersonalDocument {
	id: string;
	name: string;
	type: string;
	data: string;
	updatedAt: string;
}

export interface Customer {
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

export interface Payment {
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
	customers: Customer[];
}

export interface FilterPaymentsResponse {
	content: Payment[];
	pageable: Pageable;
	last: boolean;
	totalPages: number;
	totalElements: number;
	sort: Sort;
	first: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	empty: boolean;
}

export interface Pageable {
	pageNumber: number;
	pageSize: number;
	offset: number;
	paged: boolean;
	sort: Sort;
	unpaged: boolean;
}

export interface Discount {
	id: string;
	discountName: string;
	value: number;
	createdAt: string;
	updatedAt: string;
	relevantTicketType: string;
	availableUnits: number;
	unitsUsed: number;
}

export interface FilterDiscountsResponse {
	content: Discount[];
	pageable: Pageable;
	last: boolean;
	totalPages: number;
	totalElements: number;
	sort: Sort;
	first: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	empty: boolean;
}

export interface Sort {
	sorted: boolean;
	unsorted: boolean;
	empty: boolean;
}
