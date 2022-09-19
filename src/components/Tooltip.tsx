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
				<div className="absolute bottom-10 left-5 right-5 md:bottom-auto md:left-auto md:top-10 md:right-10 md:w-3/6 lg:w-2/6 rounded-2xl shadow-2xl ">
					<div className="bg-zinc-700 text-white rounded-t-lg p-4 text-xl flex flex-row justify-between font-bold">
						{props.data.name}
						<button
							onClick={() => {
								setShowTooltip(false);
							}}
						>
							<AiOutlineClose />
						</button>
					</div>
					<div className="rounded-b-lg relative">
						<p className="absolute top-2 left-2 z-20 text-white font-bold text-xl bg-slate-500 p-1 rounded">
							{props.data.imageOneDate}
						</p>
						<p className="absolute top-2 right-2 z-20 text-white font-bold text-xl bg-slate-500 p-1 rounded">
							{props.data.imageTwoDate}
						</p>
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
					<div className="bg-zinc-700 rounded-b-lg p-4 text-lg flex align-middle justify-between">
						{props.data.description && (
							<p className="text-white text-sm grow-0 pr-4">
								{props.data.description}
							</p>
						)}
						<button className="text-white border-2 rounded-md px-8 py-2 border-blue-400 w-64 hover:text-blue-400  flex-1 min-w-fit">
							Learn More
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ToolTip;
