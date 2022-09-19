import Map from "../components/Map";
import { MapPanner } from "../components/MapControls";
import Points from "../components/Points";

const MainPage = (props: any) => {
	return (
		<div>
			<Map center={props.mapCenter}>
				{props.points && <Points coordinates={props.points} />}
				<MapPanner center={props.mapCenter} initial={true} />
			</Map>
		</div>
	);
};

export default MainPage;
