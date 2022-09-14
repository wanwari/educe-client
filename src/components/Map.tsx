import { useAtom } from "jotai";
import { MapContainer, TileLayer } from "react-leaflet";
import { activePoint } from "../state/store";
import ToolTip from "./Tooltip";

const Map = (props: any) => {
	const [aPoint] = useAtom(activePoint);

	return (
		<div>
			<MapContainer
				className="w-screen h-screen relative z-0"
				center={props.center}
				zoom={13}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					//url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
				/>
				{props.children}
			</MapContainer>
			{aPoint !== null && <ToolTip data={aPoint} />}
		</div>
	);
};

export default Map;
