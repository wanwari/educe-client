import Map from "react-map-gl";

const ShowMap = () => {
	const mapboxAPI = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

	return (
		<div>
			<Map
				mapboxAccessToken={mapboxAPI}
				initialViewState={{
					longitude: -79.4,
					latitude: 43.7,
					zoom: 10,
				}}
				style={{ width: 1200, height: 400 }}
				mapStyle="mapbox://styles/mapbox/streets-v8"
			/>
		</div>
	);
};

export default ShowMap;
