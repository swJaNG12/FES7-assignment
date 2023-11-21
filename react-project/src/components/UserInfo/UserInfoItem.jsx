import React from "react";
import { styled } from "styled-components";

const StyledLi = styled.li`
	width: 100%;
	padding: 6px;
	border: 1px solid #adadc6;
`;

const UserInfoItem = ({ user }) => {
	console.log(user);
	return (
		<StyledLi>
			<p>
				{user["user-name"]} ({user["user-age"]} years old)
			</p>
		</StyledLi>
	);
};

export default UserInfoItem;
