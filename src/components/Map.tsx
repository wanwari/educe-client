import { latLng } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapProps } from "../interface/MapInterface";

const Map = (props: MapProps) => {
	const mapCenter = latLng(43.68, -79.38);

	return (
		<div>
			<MapContainer
				className="h-screen w-screen"
				center={mapCenter}
				zoom={12}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{props.children}
			</MapContainer>
		</div>
	);
};

export default Map;
