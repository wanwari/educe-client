import { latLng } from "leaflet";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import Points from "../components/Points";
import { PointInterface } from "../Interfaces";
import data from "../tmpData.json";

const MainPage = () => {
	const [points, setPoints] = useState<PointInterface>();
	//const [center, setCenter] = useState(latLng([0, 0]));
	const mapCenter = latLng(43.68, -79.38);

	useEffect(() => {
		setPoints(data);
		/*	
		let lat = 0;
		let long = 0;
		data.mapPoints.forEach((point: any) => {
			lat += point.latitude;
			long += point.longitude;
		});
		lat = lat / data.mapPoints.length;
		long = long / data.mapPoints.length;
		setCenter(latLng([lat, long]));
		*/
	}, []);

	return (
		<div>
			<Map data={data} center={mapCenter}>
				<Points coordinates={points} />
			</Map>
		</div>
	);
};

export default MainPage;
