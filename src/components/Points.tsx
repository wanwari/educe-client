import { latLng, LatLng } from "leaflet";
import { useState } from "react";
import { useMap } from "react-leaflet";
import MapPanner from "./MapPanner";
import Point from "./Point";

const Points = (props: any) => {
	const [newLocation, setNewLocation] = useState(latLng([43.68, -79.38]));

	const clicked = (location: LatLng) => {
		setNewLocation(location);
	};

	return (
		<div>
			{props.coordinates &&
				props.coordinates.mapPoints.map((point: any) => {
					return (
						<>
							<MapPanner center={newLocation} />
							<Point
								point={point}
								clicked={(lat: any) => clicked(lat)}
							/>
						</>
					);
				})}
		</div>
	);
};

export default Points;
