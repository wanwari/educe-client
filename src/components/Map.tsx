import { useAtom } from "jotai";
import { LatLng } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { activePointState } from "../state/store";
import { MapClicked } from "./MapControls";
import ToolTip from "./Tooltip";

interface MapProps {
	center: LatLng;
	children: React.ReactNode;
}

const Map = (props: MapProps) => {
	const [activePoint] = useAtom(activePointState);

	return (
		<div>
			<MapContainer
				className="w-screen h-screen relative z-0"
				center={props.center}
				zoom={13}
				scrollWheelZoom={true}
			>
				<MapClicked />
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					//url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
				/>
				{props.children}
			</MapContainer>
			{activePoint !== null && <ToolTip data={activePoint} />}
		</div>
	);
};

export default Map;
