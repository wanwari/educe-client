import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import img1 from "../img/t1.jpeg";
import img2 from "../img/t2.jpeg";

const Description = () => {
	return (
		<div className="flex flex-col">
			<h1>Description</h1>
			<div className="flex flex-row justify-center">
				<ReactCompareSlider
					className="w-1/2 h-1/2"
					itemOne={
						<ReactCompareSliderImage src={img1} alt="Image one" />
					}
					itemTwo={
						<ReactCompareSliderImage src={img2} alt="Image two" />
					}
				/>
			</div>
			<div className="flex flex-row justify-center">
				<table className="table-auto">
					<tbody>
						<tr>
							<td className="border">Test</td>
							<td className="border">Test</td>
						</tr>
						<tr>
							<td className="border">Test</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Description;
