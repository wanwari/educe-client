import { latLng } from "leaflet";
import { Marker } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setPoint } from "../state/slices/clickedPointSlice";

const Point = (props: any) => {
	const dispatch = useDispatch();

	return (
		<Marker
			key={props.point.id}
			position={[props.point.latitude, props.point.longitude]}
			eventHandlers={{
				click: (e) => {
					props.clicked(
						latLng(props.point.latitude, props.point.longitude)
					);
					dispatch(setPoint(props.point));
				},
			}}
		></Marker>
	);
};

export default Point;
