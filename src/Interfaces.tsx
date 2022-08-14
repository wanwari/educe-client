export interface MapProps {
	children: React.ReactNode;
}

export interface PointInterface {
	mapPoints: {
		id: number;
		name: string;
		latitude: number;
		longitude: number;
	}[];
}
