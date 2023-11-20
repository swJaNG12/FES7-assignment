import React, { useState } from "react";
import { styled } from "styled-components";

const StyledForm = styled.form`
	width: 600px;
	background-color: #fff;
	margin: 0 auto;

	& label {
		display: block;
		margin-bottom: 5px;
	}

	& input {
		width: 100%;
		padding: 6px;
		margin-bottom: 10px;
	}

	& button {
		padding: 6px 12px;
		background-color: #50163b;
		color: #fff;
		font-size: 14px;
	}
`;

const StyledLegend = styled.legend`
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
`;

const UserInput = () => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");

	const inputChangeHandler = (e) => {
		if (e.target.id === "user-name") {
			setUserName(e.target.value);
		} else if (e.target.id === "user-age") {
			setUserAge(parseInt(e.target.value, 10));
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<StyledForm onSubmit={submitHandler}>
			<fieldset>
				<StyledLegend>개인 유저 정보 입력</StyledLegend>
				<div>
					<label htmlFor="user-name">UserName</label>
					<input
						type="text"
						id="user-name"
						onChange={inputChangeHandler}
						value={userName}
					/>
				</div>
				<div>
					<label htmlFor="user-age">Age(Years)</label>
					<input
						type="number"
						id="user-age"
						onChange={inputChangeHandler}
						value={userAge}
					/>
				</div>
				<button>Add User</button>
			</fieldset>
		</StyledForm>
	);
};

export default UserInput;
