import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import img1 from "../img/t1.jpeg";
import img2 from "../img/t2.jpeg";

const Description = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row justify-center rounded">
				<ReactCompareSlider
					className="w-1/2 h-1/2 rounded-lg"
					itemOne={
						<ReactCompareSliderImage src={img1} alt="Image one" />
					}
					itemTwo={
						<ReactCompareSliderImage src={img2} alt="Image two" />
					}
				/>
			</div>
		</div>
	);
};

export default Description;
