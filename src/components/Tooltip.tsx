import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { useDispatch, useSelector } from "react-redux";
import { setShowTooltip } from "../state/slices/showTooltipSlice";
import { RootState } from "../state/slices/store";
import { AiOutlineClose } from "react-icons/ai";

const ToolTip = (props: any) => {
	const showTooltip = useSelector((state: RootState) => state.showTooltip);
	const dispatch = useDispatch();

	return (
		<div>
			{showTooltip.value && (
				<div className="absolute bottom-10 left-5 right-5  md:bottom-auto md:left-auto md:top-10 md:right-10 md:w-3/6 lg:w-2/5 bg-white rounded-lg shadow-2xl px-2 py-0">
					<div className="flex flex-row py-2 justify-between">
						<a href="/" className="text-blue-500">
							Learn More
						</a>
						<button
							onClick={() =>
								dispatch(setShowTooltip({ value: false }))
							}
						>
							<AiOutlineClose />
						</button>
					</div>
					<ReactCompareSlider
						className="rounded-lg lg:h-96"
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
					<div className="flex flex-row justify-between italic text-sm">
						<p>{props.data.imageOneDate}</p>
						<p>{props.data.imageTwoDate}</p>
					</div>
					<h1 className="py-2 text-lg font-bold text-center">
						{props.data.name}
					</h1>
					<h1 className="hidden px-12 pb-4">
						{props.data.description}
					</h1>
				</div>
			)}
		</div>
	);
};

export default ToolTip;
