import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};
	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};
	const errorHandler = () => {
		setError(null);
	};

	const addUserHandler = (e) => {
		e.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "잘못된 입력",
				message: "올바른 이름과 나이를 입력",
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: "잘못된 나이",
				message: "올바른 나이를 입력(> 0)",
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};
	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">UserName</label>
					<input
						id="username"
						type="text"
						onChange={usernameChangeHandler}
						value={enteredUsername}
					/>
					<label htmlFor="age">Age (years)</label>
					<input
						id="age"
						type="number"
						onChange={ageChangeHandler}
						value={enteredAge}
					/>
					<Button type="submit">Add user</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
