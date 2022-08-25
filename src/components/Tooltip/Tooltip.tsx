import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import img1 from "../../img/t1.jpeg";
import img2 from "../../img/t2.jpeg";
import { Popup } from "react-leaflet";
import "./tooltip.css";

const ToolTip = (props: any) => {
	return (
		<Popup className="">
			<ReactCompareSlider
				className="rounded-lg"
				itemOne={<ReactCompareSliderImage src={img1} alt="Image one" />}
				itemTwo={<ReactCompareSliderImage src={img2} alt="Image two" />}
			/>
			<h1 className="font-bold pt-3">{props.data.name}</h1>
		</Popup>
	);
};

export default ToolTip;
