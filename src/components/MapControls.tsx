import { useMap, useMapEvent } from "react-leaflet";
import { LatLng } from "leaflet";
import { useAtom } from "jotai";
import { mapCenterState, showTooltipState } from "../state/store";

interface PannerProps {
	center: LatLng;
	initial: boolean;
}

export const MapPanner = (props: PannerProps) => {
	const map = useMap();
	if (props.initial) map.panTo(props.center);
	else map.flyTo(props.center, 15);

	return null;
};

export const MapClicked = () => {
	const [, setShowTooltip] = useAtom(showTooltipState);
	const [mapCenter] = useAtom(mapCenterState);

	useMapEvent("click", () => {
		setShowTooltip(false);
	});

	const map = useMap();
	map.flyTo(mapCenter, 13);

	return null;
};
