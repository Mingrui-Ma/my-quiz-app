import "./App.css";
import React, { useState, useEffect } from "react";
import StartScreen from "./Components/StartScreen";
import MainScreen from "./Components/MainScreen";
import EndScreen from "./Components/EndScreen";

function App() {
	const [quizURL, setQuizURL] = useState(""),
		[amount, setAmount] = useState(10),
		[corrects, setCorrects] = useState(0),
		[currentQuestion, setCurrentQuestion] = useState(1),
		[enableAlert, setEnableAlert] = useState(true),
		[alertType, setAlertType] = useState("success"),
		[alertText, setAlertText] = useState("Correct!"),
		[sizeOfFont, setSizeOfFont] = useState("110%"), //fontSize is taken in namespace
		[alertTimeout, setAlertTimeout] = useState(3),
		[timeoutSettingVisibility, setTimeoutSettingVisibility] = useState(
			"inline"
		),
		[width, setWidth] = useState(window.innerWidth),
		[height, setHeight] = useState(window.innerHeight),
		[buttonSize, setButtonSize] = useState(""),
		[hasCountDown, setHasCountDown] = useState(true),
		[countDown, setCountDown] = useState(10),
		[countDownSettingVisibility, setCountDownSettingVisibility] = useState(
			"inline"
		),
		[iconScale, setIconScale] = useState("1.1"),
		[sizeOfFontLarge, setSizeOfFontLarge] = useState(sizeOfFont),
		[scoreHistory, setScoreHistory] = useState([]),
		[disclaimerVisibility, setDisclaimerVisibility] = useState("inline");

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	useEffect(() => {
		let sizeOfFontNumber = parseFloat(sizeOfFont);
		setSizeOfFontLarge(sizeOfFontNumber * 1.5 + "%");
		if (sizeOfFontNumber === 110) {
			setButtonSize("");
			setIconScale(1.1);
		}
		if (sizeOfFontNumber < 110) {
			setButtonSize("sm");
			setIconScale(0.9);
		}
		if (sizeOfFontNumber > 110) {
			setButtonSize("lg");
			setIconScale(1.3);
		}
	}, [sizeOfFont]);

	//below are setting on change functions
	function handleFontChange(e) {
		setSizeOfFont(e.target.value);
	}

	function handleAlertChange(e) {
		setEnableAlert(e.target.value);
	}

	function handleAlertTimeoutChange(e) {
		setAlertTimeout(e.target.value);
	}

	function handleCountDownChange(e) {
		setHasCountDown(e.target.value);
		console.log("has count down is now, ", e.target.value);
	}

	function handleCountDownTimeChange(e) {
		setCountDown(e.target.value);
	}

	function handleDisclaimerVisibilityChange(e) {
		setDisclaimerVisibility(e.target.value);
	}
	//above are setting on change functions

	if (quizURL === "")
		return (
			<StartScreen
				quizURL={quizURL}
				setQuizURL={setQuizURL}
				amount={amount}
				setAmount={setAmount}
				sizeOfFont={sizeOfFont}
				setSizeOfFont={setSizeOfFont}
				enableAlert={enableAlert}
				setEnableAlert={setEnableAlert}
				alertTimeout={alertTimeout}
				setAlertTimeout={setAlertTimeout}
				handleFontChange={handleFontChange}
				handleAlertChange={handleAlertChange}
				handleAlertTimeoutChange={handleAlertTimeoutChange}
				timeoutSettingVisibility={timeoutSettingVisibility}
				setTimeoutSettingVisibility={setTimeoutSettingVisibility}
				hasCountDown={hasCountDown}
				setHasCountDown={setHasCountDown}
				countDown={countDown}
				setCountDown={setCountDown}
				handleCountDownChange={handleCountDownChange}
				handleCountDownTimeChange={handleCountDownTimeChange}
				countDownSettingVisibility={countDownSettingVisibility}
				setCountDownSettingVisibility={setCountDownSettingVisibility}
				buttonSize={buttonSize}
				setButtonSize={setButtonSize}
				sizeOfFontLarge={sizeOfFontLarge}
				setSizeOfFontLarge={setSizeOfFontLarge}
				iconScale={iconScale}
				width={width}
				height={height}
				scoreHistory={scoreHistory}
				setScoreHistory={setScoreHistory}
				disclaimerVisibility={disclaimerVisibility}
				setDisclaimerVisibility={setDisclaimerVisibility}
				handleDisclaimerVisibilityChange={
					handleDisclaimerVisibilityChange
				}
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
				alertType={alertType}
				setAlertType={setAlertType}
				alertText={alertText}
				setAlertText={setAlertText}
				sizeOfFont={sizeOfFont}
				setSizeOfFont={setSizeOfFont}
				enableAlert={enableAlert}
				setEnableAlert={setEnableAlert}
				alertTimeout={alertTimeout}
				setAlertTimeout={setAlertTimeout}
				handleFontChange={handleFontChange}
				handleAlertChange={handleAlertChange}
				handleAlertTimeoutChange={handleAlertTimeoutChange}
				timeoutSettingVisibility={timeoutSettingVisibility}
				setTimeoutSettingVisibility={setTimeoutSettingVisibility}
				hasCountDown={hasCountDown}
				setHasCountDown={setHasCountDown}
				countDown={countDown}
				setCountDown={setCountDown}
				handleCountDownChange={handleCountDownChange}
				handleCountDownTimeChange={handleCountDownTimeChange}
				countDownSettingVisibility={countDownSettingVisibility}
				setCountDownSettingVisibility={setCountDownSettingVisibility}
				buttonSize={buttonSize}
				setButtonSize={setButtonSize}
				sizeOfFontLarge={sizeOfFontLarge}
				setSizeOfFontLarge={setSizeOfFontLarge}
				iconScale={iconScale}
				width={width}
				disclaimerVisibility={disclaimerVisibility}
				setDisclaimerVisibility={setDisclaimerVisibility}
				handleDisclaimerVisibilityChange={
					handleDisclaimerVisibilityChange
				}
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
			alertType={alertType}
			alertText={alertText}
			alertTimeout={alertTimeout}
			quizURL={quizURL}
			currentQuestion={currentQuestion}
			sizeOfFont={sizeOfFont}
			sizeOfFontLarge={sizeOfFontLarge}
			buttonSize={buttonSize}
			iconScale={iconScale}
			width={width}
			scoreHistory={scoreHistory}
			setScoreHistory={setScoreHistory}
			handleFontChange={handleFontChange}
			enableAlert={enableAlert}
			handleAlertChange={handleAlertChange}
			timeoutSettingVisibility={timeoutSettingVisibility}
			handleAlertTimeoutChange={handleAlertTimeoutChange}
			hasCountDown={hasCountDown}
			setHasCountDown={setHasCountDown}
			countDown={countDown}
			setCountDown={setCountDown}
			handleCountDownChange={handleCountDownChange}
			handleCountDownTimeChange={handleCountDownTimeChange}
			countDownSettingVisibility={countDownSettingVisibility}
			setCountDownSettingVisibility={setCountDownSettingVisibility}
			disclaimerVisibility={disclaimerVisibility}
			setDisclaimerVisibility={setDisclaimerVisibility}
			handleDisclaimerVisibilityChange={handleDisclaimerVisibilityChange}
		/>
	);
}

export default App;
