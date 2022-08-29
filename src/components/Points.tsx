import { latLng } from "leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../state/slices/store";
import MapPanner from "./MapPanner";
import Point from "./Point";

const Points = (props: any) => {
	const activePoint = useSelector((state: RootState) => state.activePoint);

	return (
		<div>
			{props.coordinates &&
				props.coordinates.mapPoints.map((point: any) => {
					return (
						<div key={point.id}>
							<MapPanner
								center={latLng([
									activePoint.latitude,
									activePoint.longitude,
								])}
							/>
							<Point point={point} />
						</div>
					);
				})}
		</div>
	);
};

export default Points;
