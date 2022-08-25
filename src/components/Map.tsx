import { MapContainer, TileLayer } from "react-leaflet";

const Map = (props: any) => {
	//const mapCenter = latLng(43.68, -79.38);

	console.log(props.center);
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
		</div>
	);
};

export default Map;
