import React from "react";
import UserInfoItem from "./UserInfoItem";
import { styled } from "styled-components";

const StyledList = styled.ul`
	width: 600px;
	margin: 0 auto;
	margin-top: 20px;
	padding: 12px 10px;
	background-color: #fff;
	border-radius: 10px;

	& li ~ li {
		margin-top: 6px;
	}
`;

const UserInfoList = ({ userInput }) => {
	return (
		<StyledList>
			{userInput.map((user, idx) => {
				return <UserInfoItem user={user} key={idx} />;
			})}
		</StyledList>
	);
};

export default UserInfoList;
