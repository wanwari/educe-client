import { useEffect, useState } from "react";
import Map from "./components/Map";
import Points from "./components/Points";
import data from "./tmpData.json";

const App = () => {
	const [points, setPoints] = useState<any>();

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

export default App;
