import { configureStore } from "@reduxjs/toolkit";
import activePointReducer from "./activePointSlice";

export const store = configureStore({
	reducer: {
		activePoint: activePointReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
