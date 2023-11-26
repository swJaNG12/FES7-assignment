import { useState } from "react";
import classes from "./UserInput.module.css";

const initialUserInput = {
	"current-savings": 10000,
	"yearly-contribution": 1200,
	"expected-return": 7,
	duration: 10,
};

const UserInput = (props) => {
	const [userInput, setUserInput] = useState(initialUserInput);

	const submitHandler = (e) => {
		e.preventDefault();
		setUserInput(initialUserInput);

		props.onCalculate(userInput);
	};

	const resetHandler = () => {
		setUserInput(initialUserInput);
	};

	const inputChagneHandler = (input, value) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: +value,
			};
		});
	};
	// 하연님한테는 말씀드렸는데 이번 주말에는 못하고 다음 주 부터 가능해여!
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<div className={classes["input-group"]}>
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						onChange={(e) => inputChagneHandler(e.target.id, e.target.value)}
						value={userInput["current-savings"]}
						type="number"
						id="current-savings"
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						onChange={(e) => inputChagneHandler(e.target.id, e.target.value)}
						value={userInput["yearly-contribution"]}
						type="number"
						id="yearly-contribution"
					/>
				</p>
			</div>
			<div className={classes["input-group"]}>
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						onChange={(e) => inputChagneHandler(e.target.id, e.target.value)}
						value={userInput["yearly-contribution"]}
						type="number"
						id="expected-return"
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						onChange={(e) => inputChagneHandler(e.target.id, e.target.value)}
						value={userInput["duration"]}
						type="number"
						id="duration"
					/>
				</p>
			</div>
			<p className={classes.actions}>
				<button
					onClick={resetHandler}
					type="reset"
					className={classes.buttonAlt}
				>
					Reset
				</button>
				<button type="submit" className={classes.button}>
					Calculate
				</button>
			</p>
		</form>
	);
};

export default UserInput;
