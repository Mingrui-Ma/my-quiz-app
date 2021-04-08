import React, { useState, useEffect } from "react";
import { BsGear } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import Setting from "./Setting";
import {
	Button,
	OverlayTrigger,
	Tooltip,
	Navbar,
	Alert,
} from "react-bootstrap";

function EndScreen(props) {
	const {
		corrects,
		amount,
		setQuizURL,
		setCorrects,
		setCurrentQuestion,
		alertText,
		alertType,
		alertTimeout,
		quizURL,
		currentQuestion,
		sizeOfFont,
		sizeOfFontLarge,
		buttonSize,
		iconScale,
		scoreHistory,
		setScoreHistory,
		handleFontChange,
		enableAlert,
		handleAlertChange,
		timeoutSettingVisibility,
		handleAlertTimeoutChange,
		hasCountDown,
		setHasCountDown,
		countDown,
		setCountDown,
		handleCountDownChange,
		handleCountDownTimeChange,
		countDownSettingVisibility,
		setCountDownSettingVisibility,
		width,
		disclaimerVisibility,
		setDisclaimerVisibility,
		handleDisclaimerVisibilityChange,
	} = props;

	const [showSetting, setShowSetting] = useState(false),
		[showAlert, setShowAlert] = useState(true);

	useEffect(() => {
		//doc title
		document.title = `End of Quiz - Your Score is ${calcPercentage(
			corrects,
			amount
		)}`;

		//notification from last question
		setTimeout(() => setShowAlert(false), alertTimeout * 1000);

		//append score history
		let scoreHistoryAr = scoreHistory;
		scoreHistoryAr.push(calcPercentage(corrects, amount));
		setScoreHistory(scoreHistoryAr);
	}, []);

	useEffect(() => {
		function handleKeyDown(e) {
			if (e.code === "Escape" || e.code === "Home") {
				handleReturn();
			}
			if (e.code === "KeyI") handleSetting();
		}
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	});

	/**
	 * Calculate a divided by b as a percentage, keeping 4 significant digits.
	 * @param {number} a The dividend
	 * @param {number} b The divisor
	 * @returns the percentage as a string.
	 */
	function calcPercentage(a, b) {
		let num = (a / b) * 100,
			numSigDig = Number.parseFloat(num).toPrecision(4),
			lastDigitZero = numSigDig[numSigDig.length - 1] === "0";
		while (lastDigitZero) {
			numSigDig = numSigDig.slice(0, -1);
			lastDigitZero = numSigDig[numSigDig.length - 1] === "0";
		}
		if (numSigDig[numSigDig.length - 1] === ".")
			numSigDig = numSigDig.slice(0, -1);
		return numSigDig + "%";
	}

	function handleReturn() {
		setQuizURL("");
		setCorrects(0);
		setCurrentQuestion(1);
	}

	function handleSetting() {
		setShowSetting(!showSetting);
	}

	return (
		<div>
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
						onClick={handleReturn}
						style={{ fontFamily: "Georgia", fontSize: sizeOfFont }}
					>
						My-Quiz-App
					</span>
				</Navbar.Brand>
				<div
					id="navbar-button-group"
					style={{
						cursor: "pointer",
						position: "fixed",
						right: "10px",
					}}
				>
					<OverlayTrigger
						placement="bottom"
						overlay={<Tooltip>Settings</Tooltip>}
					>
						<BsGear
							style={{ padding: "6px", paddingRight: "10px" }}
							onClick={handleSetting}
							size={`${40 * iconScale}`}
							color="white"
						/>
					</OverlayTrigger>
					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>Return to the starting screen.</Tooltip>
						}
					>
						<RiHome2Line
							style={{ padding: "6px" }}
							onClick={handleReturn}
							size={`${40 * iconScale}`}
							color="white"
						/>
					</OverlayTrigger>
				</div>
			</Navbar>
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
			<Alert
				show={showAlert}
				variant={alertType}
				style={{ fontSize: sizeOfFontLarge }}
			>
				{alertText}
			</Alert>
			<div
				id="end-screen-info"
				style={{
					textAlign: "center",
					marginTop: "10px",
					fontSize: sizeOfFont,
				}}
			>
				<h2>You've reached the end of the quiz.</h2>
				<h3>
					Your score is:{" "}
					<em style={{ color: "blue" }}>
						{calcPercentage(corrects, amount)}
					</em>{" "}
					({corrects} right out of {amount}).
				</h3>
				<Button
					variant="primary"
					onClick={handleReturn}
					size={buttonSize}
				>
					Home
				</Button>
			</div>
		</div>
	);
}

export default EndScreen;
