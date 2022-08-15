import { latLng } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = (props: any) => {
	const mapCenter = latLng(43.68, -79.38);

	return (
		<div>
			<MapContainer
				className="w-screen h-screen relative z-0"
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
			<div className="absolute z-10 top-0 right-0 mr-10 mt-10 bg-white p-20 rounded-xl">
				Test
			</div>
		</div>
	);
};

export default Map;
