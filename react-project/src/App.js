import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import EmptyValueModal from "./components/Modal/EmptyValueModal";
import InvalidValueModal from "./components/Modal/InvalidValueModal";
import UserInfoList from "./components/UserInfo/UserInfoList";
import UserInput from "./components/UserInput";

const onlyString = /^[A-Za-z가-힣]+$/;

const GlobalStyle = createGlobalStyle`
  button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    font-size: 1em;
    color: inherit;
  }

  fieldset {
		border: none;
	}
`;

const StyledBackground = styled.div`
	height: 100vh;
	background-color: #000;
`;

function App() {
	const [userInput, setUserInput] = useState(null);
	const [isEmptyModal, setIsEmptyModal] = useState(false);
	const [isInvalidModal, setIsInvalidModal] = useState(false);

	const validUserInput = (userName, userAge) => {
		if (userName.length === 0 || userAge.length === 0) {
			setIsEmptyModal(true);
			throw new Error("입력값이 없습니다.");
		} else if (!onlyString.test(userName) || parseInt(userAge, 10) <= 0) {
			setIsInvalidModal(true);
			throw new Error("잘못된 입력입니다.");
		}
	};

	const updateUserInput = (userName, userAge) => {
		try {
			validUserInput(userName, userAge);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<>
			<GlobalStyle />
			<StyledBackground>
				{/* 유저 정보 입력컴포넌트 */}
				<UserInput updateUserInput={updateUserInput} />
				{/* 유저 정보 리스트컴포넌트 */}
				<UserInfoList />
				{/* 모달 */}
				{isEmptyModal && <EmptyValueModal />}
				{isInvalidModal && <InvalidValueModal />}
			</StyledBackground>
		</>
	);
}

export default App;
