import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialTooltip {
	value: boolean;
}

const initialState: InitialTooltip = {
	value: true,
};

export const showTooltipSlice = createSlice({
	name: "showTooltip",
	initialState,
	reducers: {
		setShowTooltip: (state, action: PayloadAction<InitialTooltip>) => {
			state.value = action.payload.value;
		},
	},
});

export const { setShowTooltip } = showTooltipSlice.actions;

export default showTooltipSlice.reducer;
