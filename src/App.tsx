import { useAtom } from "jotai";
import { Routes, Route } from "react-router-dom";
import Description from "./pages/Description";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import { mapCenterState, pointsState } from "./state/store";
import data from "./tmpData.json";
import { useEffect } from "react";
import { latLng } from "leaflet";

const App = () => {
	const [points, setPoints] = useAtom(pointsState);
	const [mapCenter, setMapCenter] = useAtom(mapCenterState);

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
	}, [setMapCenter, setPoints]);

	return (
		<Routes>
			<Route
				path="/"
				element={<MainPage points={points} mapCenter={mapCenter} />}
			/>
			<Route path="/description/:id" element={<Description />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
