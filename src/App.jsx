import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/dashboard" element={<DashBoard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
