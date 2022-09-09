import { useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface PannerProps {
	center: LatLngExpression;
	initial: boolean;
}

const MapPanner = (props: PannerProps) => {
	const map = useMap();
	if (props.initial) map.panTo(props.center);
	else map.flyTo(props.center, 15);

	return null;
};

export default MapPanner;
