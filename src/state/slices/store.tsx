import { configureStore } from "@reduxjs/toolkit";
import activePointReducer from "./activePointSlice";
import showTooltipReducer from "./showTooltipSlice";

export const store = configureStore({
	reducer: {
		activePoint: activePointReducer,
		showTooltip: showTooltipReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
