import { Marker } from "react-leaflet";
import ToolTip from "./Tooltip/Tooltip";

const Points = (props: any) => {
	return (
		<div>
			{props.coordinates &&
				props.coordinates.mapPoints.map((point: any) => {
					return (
						<Marker
							key={point.id}
							position={[point.latitude, point.longitude]}
						>
							<ToolTip data={point} />
						</Marker>
					);
				})}
		</div>
	);
};

export default Points;
