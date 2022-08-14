import { useEffect, useState } from "react";
import Map from "../components/Map";
import Points from "../components/Points";
import { PointInterface } from "../Interfaces";
import data from "../tmpData.json";

const MainPage = () => {
	const [points, setPoints] = useState<PointInterface>();

	useEffect(() => {
		setPoints(data);
	}, []);

	return (
		<div>
			<Map>
				<Points coordinates={points} />
			</Map>
		</div>
	);
};

export default MainPage;
