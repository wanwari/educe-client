export interface MapProps {
	children: React.ReactNode;
}

export interface PointInterface {
	id: number;
	name: string;
	intersectionOne: string;
	intersectionTwo: string;
	imageOne: string;
	imageOneDate: string;
	imageTwo: string;
	imageTwoDate: string;
	description?: string;
	latitude: number;
	longitude: number;
}

export interface PointArrayInterface {
	mapPoints: PointInterface[];
}
