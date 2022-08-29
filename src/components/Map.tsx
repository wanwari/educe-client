import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../state/slices/store";
import ToolTip from "./Tooltip";

const Map = (props: any) => {
	const activePoint = useSelector((state: RootState) => state.activePoint);

	if (activePoint.id !== 0) {
		console.log("Active");
	}

	return (
		<div>
			<MapContainer
				className="w-screen h-screen relative z-0"
				center={props.center}
				zoom={12}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{props.children}
			</MapContainer>
			{activePoint.id !== 0 && <ToolTip data={activePoint} />}
		</div>
	);
};

export default Map;
