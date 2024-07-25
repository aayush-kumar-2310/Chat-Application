import React from "react";
import "../Form.css";
import { useNavigate } from "react-router";

const SignUp = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h2>Please sign up!</h2>
			<div>
				<form>
					<div className="form">
						<label>Name:</label>
						<input type="text" placeholder="Your Name" />
					</div>
					<div className="form">
						<label>E-mail</label>
						<input type="email" placeholder="E-mail address" />
					</div>
					<div className="form">
						<label>Create Password</label>
						<input type="password" />
					</div>
					<div className="form">
						<label>Confirm Password</label>
						<input type="password" />
					</div>
				</form>
			</div>
			<h2>
				Already registered?{" "}
				<button onClick={() => navigate("/")}> Go back</button>
			</h2>
		</div>
	);
};

export default SignUp;
