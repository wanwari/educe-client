export interface MapProps {
	children: React.ReactNode;
}

export interface PointArrayInterface {
	mapPoints: {
		id: number;
		name: string;
		latitude: number;
		longitude: number;
	}[];
}

export interface PointInterface {
	id: number;
	name: string;
	intersectionOne: string;
	intersectionTwo: string;
	imageOne: string;
	imageTwo: string;
	latitude: number;
	longitude: number;
}
