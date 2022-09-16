import { useAtom } from "jotai";
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { AiOutlineClose } from "react-icons/ai";
import { PointInterface } from "../Interfaces";
import { showTooltip } from "../state/store";

const ToolTip = (props: { data: PointInterface }) => {
	const [show, setShow] = useAtom(showTooltip);

	return (
		<div>
			{show && (
				<div className="absolute bottom-10 left-5 right-5  md:bottom-auto md:left-auto md:top-10 md:right-10 md:w-3/6 lg:w-2/6 bg-white rounded-lg shadow-2xl px-2 py-0">
					<div className="flex flex-row py-2 justify-between">
						Learn More
						<button
							onClick={() => {
								setShow(false);
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
					<h1 className="py-2 text-lg font-bold text-center text-blue-600">
						{props.data.name}
					</h1>
					<h1 className="hidden md:block px-12 pb-4">
						{props.data.description}
					</h1>
				</div>
			)}
		</div>
	);
};

export default ToolTip;
