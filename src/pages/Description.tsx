import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { Link, useParams } from "react-router-dom";
import { PointInterface } from "../Interfaces";
import { pointsState } from "../state/store";

const Description = () => {
	let { id } = useParams();
	const pointId: number = Number(id);

	const [points] = useAtom(pointsState);
	const [data, setData] = useState<PointInterface>();

	useEffect(() => {
		setData(points?.mapPoints.find((element) => element.id === pointId));
	}, [points, pointId]);

	return (
		<div className="flex flex-col">
			<Link to={"/"}>Home</Link>
			{data && (
				<div className="flex flex-col justify-center rounded">
					<h1>
						{data.id} | {data.name}
					</h1>
					<ReactCompareSlider
						className="w-1/2 h-1/2 rounded-lg"
						itemOne={
							<ReactCompareSliderImage
								src={data.imageOne}
								alt="Image one"
							/>
						}
						itemTwo={
							<ReactCompareSliderImage
								src={data.imageTwo}
								alt="Image two"
							/>
						}
					/>
				</div>
			)}
		</div>
	);
};

export default Description;
