import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PointInterface } from "../../Interfaces";

const initialState: PointInterface = {
	id: 0,
	name: "",
	intersectionOne: "",
	intersectionTwo: "",
	imageOne: "",
	imageOneDate: new Date(),
	imageTwo: "",
	imageTwoDate: new Date(),
	latitude: 0,
	longitude: 0,
};

export const activePointSlice = createSlice({
	name: "activePoint",
	initialState,
	reducers: {
		setActivePoint: (state, action: PayloadAction<PointInterface>) => {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.intersectionOne = action.payload.intersectionOne;
			state.intersectionTwo = action.payload.intersectionTwo;
			state.imageOne = action.payload.imageOne;
			state.imageOneDate = action.payload.imageOneDate;
			state.imageTwo = action.payload.imageTwo;
			state.imageTwoDate = action.payload.imageTwoDate;
			state.description = action.payload.description;
			state.latitude = action.payload.latitude;
			state.longitude = action.payload.longitude;
		},
	},
});

export const { setActivePoint } = activePointSlice.actions;

export default activePointSlice.reducer;
