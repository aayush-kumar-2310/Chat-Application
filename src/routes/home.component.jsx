import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import "../App.css";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div id="App">
			<div id="box">
				<h1>Welcome to youChat!</h1>
				<Outlet />
				<button onClick={() => navigate("/signup")}>New User</button>
				<button>Registered User</button>
			</div>
		</div>
	);
};

export default Home;
