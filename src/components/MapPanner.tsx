import { useMap } from "react-leaflet";

const MapPanner = (props: any) => {
	const map = useMap();
	map.panTo(props.center);
	return null;
};

export default MapPanner;
