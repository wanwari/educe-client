import { Marker } from "react-leaflet";
import { icon } from "leaflet";
import point from "../img/k.png";
import { useAtom } from "jotai";
import { activePointState, showTooltipState } from "../state/store";
import { PointInterface } from "../Interfaces";

const Point = (props: { point: PointInterface }) => {
	const [, setActivePoint] = useAtom(activePointState);
	const [, setShowTooltip] = useAtom(showTooltipState);

	const customIcon = icon({
		iconUrl: point,
		iconSize: [20, 20],
	});

	return (
		<Marker
			key={props.point.id}
			position={[props.point.latitude, props.point.longitude]}
			icon={customIcon}
			eventHandlers={{
				click: (e) => {
					setActivePoint(props.point);
					setShowTooltip(true);
				},
			}}
		></Marker>
	);
};

export default Point;
