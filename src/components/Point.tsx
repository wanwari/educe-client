import { Marker } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setActivePoint } from "../state/slices/activePointSlice";
import { setShowTooltip } from "../state/slices/showTooltipSlice";
import { icon } from "leaflet";
import point from "../img/b.png";

const Point = (props: any) => {
	const dispatch = useDispatch();

	const customIcon = icon({
		iconUrl: point,
		iconSize: [35, 35],
	});

	return (
		<Marker
			key={props.point.id}
			position={[props.point.latitude, props.point.longitude]}
			icon={customIcon}
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
