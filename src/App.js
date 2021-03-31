import "./App.css";
import React, { Component, useState } from "react";
import StartScreen from "./Components/StartScreen";
import MainScreen from "./Components/MainScreen";
import EndScreen from "./Components/EndScreen";

function App() {
	const [quizURL, setQuizURL] = useState(""),
		[amount, setAmount] = useState(10),
		[corrects, setCorrects] = useState(0),
		[currentQuestion, setCurrentQuestion] = useState(1),
		[enableAlert, setEnableAlert] = useState(true),
		[sizeOfFont, setSizeOfFont] = useState("100%"); //fontSize is taken in namespace

	if (quizURL === "")
		return (
			<StartScreen
				style=""
				quizURL={quizURL}
				setQuizURL={setQuizURL}
				amount={amount}
				setAmount={setAmount}
				sizeOfFont={sizeOfFont}
				setSizeOfFont={setSizeOfFont}
				enableAlert={enableAlert}
				setEnableAlert={setEnableAlert}
			/>
		);
	if (currentQuestion <= amount)
		return (
			<MainScreen
				quizURL={quizURL}
				setQuizURL={setQuizURL}
				amount={amount}
				setAmount={setAmount}
				corrects={corrects}
				setCorrects={setCorrects}
				currentQuestion={currentQuestion}
				setCurrentQuestion={setCurrentQuestion}
				sizeOfFont={sizeOfFont}
				setSizeOfFont={setSizeOfFont}
				enableAlert={enableAlert}
				setEnableAlert={setEnableAlert}
			/>
		);
	return (
		<EndScreen
			corrects={corrects}
			amount={amount}
			setQuizURL={setQuizURL}
			setAmount={setAmount}
			setCorrects={setCorrects}
			setCurrentQuestion={setCurrentQuestion}
			sizeOfFont={sizeOfFont}
		/>
	);
}

export default App;
