import { useMap, useMapEvent } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useAtom } from "jotai";
import { showTooltipState } from "../state/store";

interface PannerProps {
	center: LatLngExpression;
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

	useMapEvent("click", () => {
		setShowTooltip(false);
	});
	return null;
};
