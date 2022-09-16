import { latLng } from "leaflet";
import { PointArrayInterface } from "../Interfaces";
import { MapPanner } from "./MapControls";
import Point from "./Point";

const Points = (props: { coordinates: PointArrayInterface }) => {
	return (
		<div>
			{props.coordinates.mapPoints &&
				props.coordinates.mapPoints.map((point) => {
					return (
						<div key={point.id}>
							<MapPanner
								center={latLng([0, 0])}
								initial={false}
							/>
							<Point point={point} />
						</div>
					);
				})}
		</div>
	);
};

export default Points;
