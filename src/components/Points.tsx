import { latLng } from "leaflet";
import { MapPanner } from "./MapControls";
import Point from "./Point";

const Points = (props: any) => {
	return (
		<div>
			{props.coordinates &&
				props.coordinates.mapPoints.map((point: any) => {
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
