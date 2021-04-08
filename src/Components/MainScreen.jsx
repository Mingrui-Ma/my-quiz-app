import React, { useEffect, useState } from "react";
import Question from "./Question";
import Disclaimer from "./Disclaimer";
import Setting from "./Setting";
import axios from "axios";
import { BsGear } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import { ProgressBar, OverlayTrigger, Tooltip, Navbar } from "react-bootstrap";

export default function MainScreen(props) {
	const {
		quizURL,
		setQuizURL,
		amount,
		setAmount,
		corrects,
		setCorrects,
		currentQuestion,
		setCurrentQuestion,
		alertType,
		setAlertType,
		alertText,
		setAlertText,
		sizeOfFont,
		setSizeOfFont,
		enableAlert,
		setEnableAlert,
		alertTimeout,
		setAlertTimeout,
		handleFontChange,
		handleAlertChange,
		handleAlertTimeoutChange,
		timeoutSettingVisibility,
		setTimeoutSettingVisibility,
		buttonSize,
		setButtonSize,
		sizeOfFontLarge,
		setSizeOfFontLarge,
		hasCountDown,
		setHasCountDown,
		countDown,
		setCountDown,
		handleCountDownChange,
		handleCountDownTimeChange,
		countDownSettingVisibility,
		setCountDownSettingVisibility,
		iconScale,
		width,
		disclaimerVisibility,
		setDisclaimerVisibility,
		handleDisclaimerVisibilityChange,
	} = props;

	//response contains the quiz JSON from the site.
	const [response, setResponse] = useState([
			{
				category: "Entertainment: Books",
				correct_answer: "Ian Fleming",
				difficulty: "easy",
				incorrect_answers: [
					"Joseph Conrad",
					"John Buchan",
					"Graham Greene",
				],
				question:
					"Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?",
				type: "multiple",
			},
		]),
		[showSetting, setShowSetting] = useState(false),
		[randomOrder, setRandomOrder] = useState([]),
		[progressBarHeight, setProgressBarHeight] = useState(20);

	useEffect(() => {
		document.title = `Question ${currentQuestion} - My-Quiz-App`;
	}, [quizURL, currentQuestion]);

	useEffect(() => {
		axios
			.get(quizURL)
			.then((res) => {
				const results = res.data.results;
				if (results !== response) setResponse(results);
				// console.log("reference to response", response);
			})
			.catch((err) => console.log("error: ", err));
	}, []);

	useEffect(() => {
		if (enableAlert == "true") {
			setTimeoutSettingVisibility("inline");
			//console.log("visibility is now inline.");
		}
		if (enableAlert == "false") {
			setTimeoutSettingVisibility("none");
			//console.log("visibility is now none.");
		}
	}, [enableAlert]);

	useEffect(() => {
		if (hasCountDown == "true") {
			setCountDownSettingVisibility("inline");
			//console.log("visibility is now inline.");
		}
		if (hasCountDown == "false") {
			setCountDownSettingVisibility("none");
			//console.log("visibility is now none.");
		}
	}, [hasCountDown]);

	/*
	 * Put [1,2,3,4] into a random order.
	 */
	useEffect(() => {
		let randomProxy = [],
			remainingNums = [1, 2, 3, 4],
			orderIdx = 0,
			nextIdx; //index of the chosen number
		for (let i = 4; i > 0; i--) {
			nextIdx = Math.floor(Math.random() * i);
			randomProxy[orderIdx++] = remainingNums[nextIdx];
			remainingNums.splice(nextIdx, 1);
		}
		setRandomOrder(randomProxy);
		//console.log("order: ", randomProxy);
	}, [currentQuestion, quizURL]);

	useEffect(() => {
		let height = parseFloat(sizeOfFont);
		setProgressBarHeight((height / 100) * 20);
	}, [sizeOfFont]);

	function handleHome() {
		setQuizURL("");
		setCurrentQuestion(1);
		setCorrects(0);
	}

	function handleSetting() {
		setShowSetting(!showSetting);
	}

	return (
		<div>
			{/* navbar begins */}
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
						style={{ verticalAlign: "middle" }}
						width={`${45 * iconScale}`}
						height={`${31 * iconScale}`}
						className="d-inline-block align-top"
					/>{" "}
					<span
						style={{ fontFamily: "Georgia", fontSize: sizeOfFont }}
						onClick={handleHome}
					>
						My-Quiz-App
					</span>
				</Navbar.Brand>
				<div
					style={{
						position: "absolute",
						right: "8px",
					}}
				>
					<OverlayTrigger
						placement="bottom"
						overlay={<Tooltip>Settings</Tooltip>}
					>
						<BsGear
							className="react-icons"
							onClick={handleSetting}
							size={`${40 * iconScale}`}
							color="white"
						/>
					</OverlayTrigger>
					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>
								Abandon the quiz and return to the starting
								screen.
							</Tooltip>
						}
					>
						<RiHome2Line
							className="react-icons"
							onClick={handleHome}
							size={`${40 * iconScale}`}
							color="white"
						/>
					</OverlayTrigger>
				</div>
			</Navbar>
			{/* navbar ends */}
			{/* Setting begins */}
			<Setting
				showSetting={showSetting}
				handleSetting={handleSetting}
				sizeOfFont={sizeOfFont}
				handleFontChange={handleFontChange}
				enableAlert={enableAlert}
				handleAlertChange={handleAlertChange}
				timeoutSettingVisibility={timeoutSettingVisibility}
				alertTimeout={alertTimeout}
				handleAlertTimeoutChange={handleAlertTimeoutChange}
				hasCountDown={hasCountDown}
				setHasCountDown={setHasCountDown}
				countDown={countDown}
				setCountDown={setCountDown}
				handleCountDownChange={handleCountDownChange}
				handleCountDownTimeChange={handleCountDownTimeChange}
				countDownSettingVisibility={countDownSettingVisibility}
				setCountDownSettingVisibility={setCountDownSettingVisibility}
				iconScale={iconScale}
				width={width}
				disclaimerVisibility={disclaimerVisibility}
				setDisclaimerVisibility={setDisclaimerVisibility}
				handleDisclaimerVisibilityChange={
					handleDisclaimerVisibilityChange
				}
			/>
			{/* Setting ends */}
			<ProgressBar
				style={{ fontSize: sizeOfFont, height: progressBarHeight }}
				now={(currentQuestion / amount) * 100}
				label={`Question ${currentQuestion} of ${amount}`}
			/>
			<h6 style={{ fontSize: sizeOfFont, margin: "10px" }}>
				Category: {response[currentQuestion - 1].category} | Difficulty:{" "}
				{response[currentQuestion - 1].difficulty}
			</h6>
			<Question
				category={response[currentQuestion - 1].category}
				correct_answer={response[currentQuestion - 1].correct_answer}
				difficulty={response[currentQuestion - 1].difficulty}
				incorrect_answers={
					response[currentQuestion - 1].incorrect_answers
				}
				question={response[currentQuestion - 1].question}
				type={response[currentQuestion - 1].type}
				corrects={corrects}
				setCorrects={setCorrects}
				currentQuestion={currentQuestion}
				setCurrentQuestion={setCurrentQuestion}
				alertType={alertType}
				setAlertType={setAlertType}
				alertText={alertText}
				setAlertText={setAlertText}
				amount={amount}
				randomOrder={randomOrder}
				alertTimeout={alertTimeout}
				sizeOfFont={sizeOfFont}
				enableAlert={enableAlert}
				buttonSize={buttonSize}
				setButtonSize={setButtonSize}
				iconScale={iconScale}
				hasCountDown={hasCountDown}
				countDown={countDown}
				countDownSettingVisibility={countDownSettingVisibility}
				setCountDownSettingVisibility={setCountDownSettingVisibility}
				sizeOfFontLarge={sizeOfFontLarge}
				setSizeOfFontLarge={setSizeOfFontLarge}
				width={width}
				progressBarHeight={progressBarHeight}
				handleHome={handleHome}
				handleSetting={handleSetting}
			/>
			<Disclaimer
				sizeOfFont={sizeOfFont}
				disclaimerVisibility={disclaimerVisibility}
			/>
		</div>
	);
}
