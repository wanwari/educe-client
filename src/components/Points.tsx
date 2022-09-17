import { useAtom } from "jotai";
import { latLng } from "leaflet";
import { PointArrayInterface } from "../Interfaces";
import { activePoint } from "../state/store";
import { MapPanner } from "./MapControls";
import Point from "./Point";

const Points = (props: { coordinates: PointArrayInterface }) => {
	const [aPoint] = useAtom(activePoint);

	return (
		<div>
			{props.coordinates.mapPoints &&
				props.coordinates.mapPoints.map((point) => {
					return (
						<div key={point.id}>
							{aPoint && (
								<MapPanner
									center={latLng([
										aPoint!.latitude,
										aPoint!.longitude,
									])}
									initial={false}
								/>
							)}
							<Point point={point} />
						</div>
					);
				})}
		</div>
	);
};

export default Points;
