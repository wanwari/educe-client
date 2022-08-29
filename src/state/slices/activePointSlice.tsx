import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ActivePointState {
	id: number;
	latitude: number;
	longitude: number;
}

const initialState: ActivePointState = {
	id: 0,
	latitude: 0,
	longitude: 0,
};

export const activePointSlice = createSlice({
	name: "activePoint",
	initialState,
	reducers: {
		setActivePoint: (state, action: PayloadAction<ActivePointState>) => {
			state.id = action.payload.id;
			state.latitude = action.payload.latitude;
			state.longitude = action.payload.longitude;
		},
	},
});

export const { setActivePoint } = activePointSlice.actions;

export default activePointSlice.reducer;
