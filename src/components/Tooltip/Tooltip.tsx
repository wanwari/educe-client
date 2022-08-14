import { Popup } from "react-leaflet";
import "./tooltip.css";

const ToolTip = (props: any) => {
	return (
		<Popup>
			<div className="font-bold">
				<h1>{props.data.name}</h1>
				{props.data.latitude}, {props.data.longitude}
			</div>
		</Popup>
	);
};

export default ToolTip;
