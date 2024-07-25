import { Route, Routes } from "react-router";
import Home from "./routes/home.component";
import SignUp from "./routes/signup.component";
import { useNavigate } from "react-router";
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="/signup" element={<SignUp />} />
			</Route>
		</Routes>
	);
};

export default App;
