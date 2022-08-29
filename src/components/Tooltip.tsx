import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { useDispatch, useSelector } from "react-redux";
import { setShowTooltip } from "../state/slices/showTooltipSlice";
import { RootState } from "../state/slices/store";

const ToolTip = (props: any) => {
	const showTooltip = useSelector((state: RootState) => state.showTooltip);
	console.log(showTooltip);
	const dispatch = useDispatch();

	return (
		<div>
			{showTooltip.value && (
				<div className="absolute top-0 right-0 m-12 z-10 w-1/4 h-1/2 bg-white rounded-lg text-center">
					<ReactCompareSlider
						className="rounded-lg w-96"
						itemOne={
							<ReactCompareSliderImage
								src={props.data.imageOne}
								alt="Image one"
							/>
						}
						itemTwo={
							<ReactCompareSliderImage
								src={props.data.imageTwo}
								alt="Image two"
							/>
						}
					/>
					<h1>{props.data.name}</h1>
					<button
						onClick={() =>
							dispatch(setShowTooltip({ value: false }))
						}
					>
						Close
					</button>
				</div>
			)}
		</div>
	);
};

export default ToolTip;
