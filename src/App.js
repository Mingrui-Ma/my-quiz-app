import "./App.css";
import React, { Component, useState, useEffect } from "react";
import StartScreen from "./Components/StartScreen";
import MainScreen from "./Components/MainScreen";
import EndScreen from "./Components/EndScreen";

function App() {
	const [quizURL, setQuizURL] = useState(""),
		[amount, setAmount] = useState(10),
		[corrects, setCorrects] = useState(0),
		[currentQuestion, setCurrentQuestion] = useState(1),
		[enableAlert, setEnableAlert] = useState(true),
		[sizeOfFont, setSizeOfFont] = useState("110%"), //fontSize is taken in namespace
		[width, setWidth] = useState(window.innerWidth);

		useEffect(() =>	{
			const handleResize = () => setWidth(window.innerWidth);
			let typeofHandleResize = typeof handleResize;
			console.log("type of handle resize: ", typeofHandleResize);
			window.addEventListener('resize', handleResize);
			return () =>	{
				window.removeEventListener('resize', handleResize);
			}
			//return width;
		})

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
				width={width}
				setWidth={setWidth}
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
				width={width}
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
			width={width}
		/>
	);
}

export default App;
