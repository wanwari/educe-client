import { latLng } from "leaflet";
import { useEffect, useState } from "react";
import { PointArrayInterface } from "../Interfaces";
import Map from "../components/Map";
import { MapPanner } from "../components/MapControls";
import Points from "../components/Points";
import data from "../tmpData.json";
import { useAtom } from "jotai";
import { mapCenterState } from "../state/store";

const MainPage = () => {
	const [points, setPoints] = useState<PointArrayInterface>();
	const [mapCenter, setMapCenter] = useAtom(mapCenterState); //useState(latLng([0, 0]));

	useEffect(() => {
		setPoints(data);
		let lat = 0;
		let long = 0;
		data.mapPoints.forEach((point: any) => {
			lat += point.latitude;
			long += point.longitude;
		});
		lat = lat / data.mapPoints.length;
		long = long / data.mapPoints.length;
		setMapCenter(latLng([lat, long]));
	}, [setMapCenter]);

	return (
		<div>
			<Map center={mapCenter}>
				{points && <Points coordinates={points} />}
				<MapPanner center={mapCenter} initial={true} />
			</Map>
		</div>
	);
};

export default MainPage;
