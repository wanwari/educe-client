import { configureStore } from "@reduxjs/toolkit";
import clickedPointReducer from "./slices/clickedPointSlice";

export default configureStore({
	reducer: {
		clickedPoint: clickedPointReducer,
	},
});
