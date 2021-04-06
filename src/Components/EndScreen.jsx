import React, { useState, useEffect } from "react";
import TopBanner from "./TopBanner";
import setting from "./Setting";
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
		handleSetting,
		scoreHistory,
		setScoreHistory,
	} = props;

	const [showAlert, setShowAlert] = useState(true);

	useEffect(() => {
		document.title = `End of Quiz - Your Score is ${calcPercentage(
			corrects,
			amount
		)}`;

		setTimeout(() => setShowAlert(false), alertTimeout * 1000);

		let scoreHistoryAr = scoreHistory;
		scoreHistoryAr.push(calcPercentage(corrects, amount));
		setScoreHistory(scoreHistoryAr);
	}, []);

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

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
						width={`${40 * iconScale}`}
						height={`${27 * iconScale}`}
						className="d-inline-block align-top"
					/>{" "}
					<span
						onClick={handleReturn}
						style={{ fontSize: sizeOfFont }}
					>
						My-Quiz-App
					</span>
				</Navbar.Brand>
			</Navbar>
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
