import React from "react";
import { styled } from "styled-components";

const StyledModalBackground = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
`;

const StyledInvalidModal = styled.div`
	width: 300px;
	background-color: #fff;

	& button {
		background-color: #672353;
		color: #fff;
	}
`;

const InvalidValueModal = ({ setIsInvalidModal }) => {
	const modalHandler = () => {
		setIsInvalidModal(false);
	};

	return (
		<StyledModalBackground>
			<StyledInvalidModal>
				<p>모달</p>
				<button onClick={modalHandler}>닫기</button>
			</StyledInvalidModal>
		</StyledModalBackground>
	);
};

export default InvalidValueModal;
