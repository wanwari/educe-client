import { latLng } from "leaflet";
import { Marker } from "react-leaflet";

const Point = (props: any) => {
	return (
		<Marker
			key={props.point.id}
			position={[props.point.latitude, props.point.longitude]}
			eventHandlers={{
				click: (e) => {
					props.clicked(
						latLng(props.point.latitude, props.point.longitude)
					);
				},
			}}
		></Marker>
	);
};

export default Point;
