import { Routes, Route } from "react-router-dom";
import Description from "./pages/Description";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/description/*" element={<Description />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
