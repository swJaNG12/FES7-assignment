import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import EmptyValueModal from "./components/Modal/EmptyValueModal";
import InvalidValueModal from "./components/Modal/InvalidValueModal";
import UserInfoList from "./components/UserInfo/UserInfoList";
import UserInput from "./components/UserInput";

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
	return (
		<>
			<GlobalStyle />
			<StyledBackground>
				{/* 유저 정보 입력컴포넌트 */}
				<UserInput />
				{/* 유저 정보 리스트컴포넌트 */}
				<UserInfoList />
				{/* 모달 */}
				<EmptyValueModal />
				<InvalidValueModal />
			</StyledBackground>
		</>
	);
}

export default App;
