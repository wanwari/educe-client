import { Marker } from "react-leaflet";

const Points = (props: any) => {
	return (
		<div>
			{props.coordinates &&
				props.coordinates.mapPoints.map((point: any) => {
					return (
						<Marker
							key={point.id}
							position={[point.latitude, point.longitude]}
						/>
					);
				})}
		</div>
	);
};

export default Points;
