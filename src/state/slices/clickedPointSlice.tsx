import { createSlice } from "@reduxjs/toolkit";

export const clickedPointSlice = createSlice({
	name: "clickedPoint",
	initialState: {
		point: {},
	},
	reducers: {
		setPoint: (state, action) => {
			state.point = action.payload;
		},
	},
});

export const { setPoint } = clickedPointSlice.actions;

export default clickedPointSlice.reducer;
