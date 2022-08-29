import { Marker } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setActivePoint } from "../state/slices/activePointSlice";
import { setShowTooltip } from "../state/slices/showTooltipSlice";

const Point = (props: any) => {
	const dispatch = useDispatch();

	return (
		<Marker
			key={props.point.id}
			position={[props.point.latitude, props.point.longitude]}
			eventHandlers={{
				click: (e) => {
					dispatch(setActivePoint({ ...props.point }));
					dispatch(setShowTooltip({ value: true }));
				},
			}}
		></Marker>
	);
};

export default Point;
