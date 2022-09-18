import { useAtom } from "jotai";
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { AiOutlineClose } from "react-icons/ai";
import { PointInterface } from "../Interfaces";
import { showTooltipState } from "../state/store";

const ToolTip = (props: { data: PointInterface }) => {
	const [showTooltip, setShowTooltip] = useAtom(showTooltipState);

	return (
		<div>
			{showTooltip && (
				<div className="absolute bottom-10 left-5 right-5 bg-sky-100 md:bottom-auto md:left-auto md:top-10 md:right-10 md:w-3/6 lg:w-2/6 rounded-2xl text-stone-700 shadow-2xl px-4 py-2">
					<div className="flex flex-row py-2 justify-between">
						Learn More
						<button
							onClick={() => {
								setShowTooltip(false);
							}}
						>
							<AiOutlineClose />
						</button>
					</div>
					<div className="">
						<ReactCompareSlider
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
					</div>
					<div className="flex flex-row justify-between italic text-sm">
						<p>{props.data.imageOneDate}</p>
						<p>{props.data.imageTwoDate}</p>
					</div>
					<h1 className="py-2 text-lg font-bold text-center text-black">
						{props.data.name}
					</h1>
					{props.data.description && (
						<h1 className="hidden md:block px-12 pb-4">
							{props.data.description}
						</h1>
					)}
				</div>
			)}
		</div>
	);
};

export default ToolTip;
