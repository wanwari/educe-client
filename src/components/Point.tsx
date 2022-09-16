import { Marker } from "react-leaflet";
import { icon } from "leaflet";
import point from "../img/b.png";
import { useAtom } from "jotai";
import { activePoint, showTooltip } from "../state/store";
import { PointInterface } from "../Interfaces";

const Point = (props: { point: PointInterface }) => {
	const [show, setShow] = useAtom(showTooltip);
	const [aPoint, setAPoint] = useAtom(activePoint);

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
					setAPoint(props.point);
					setShow(true);
				},
			}}
		></Marker>
	);
};

export default Point;
