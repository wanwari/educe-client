import { useAtom } from "jotai";
import { latLng } from "leaflet";
import { PointArrayInterface } from "../Interfaces";
import { activePointState } from "../state/store";
import { MapPanner } from "./MapControls";
import Point from "./Point";

const Points = (props: { coordinates: PointArrayInterface }) => {
	const [activePoint] = useAtom(activePointState);

	return (
		<div>
			{props.coordinates.mapPoints &&
				props.coordinates.mapPoints.map((point) => {
					return (
						<div key={point.id}>
							{activePoint && (
								<MapPanner
									center={latLng([
										activePoint!.latitude,
										activePoint!.longitude,
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
