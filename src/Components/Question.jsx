import React, { useState, useEffect, useRef } from "react";
import {
	Button,
	Alert,
	ProgressBar,
	OverlayTrigger,
	Tooltip,
} from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";

function Question(props) {
	const [chosenAnswer, setChosenAnswer] = useState(""),
		[showAlert, setShowAlert] = useState(false),
		[timeoutObject, setTimeoutObject] = useState({});

	const {
		category,
		correct_answer,
		difficulty,
		incorrect_answers,
		question,
		type,
		corrects,
		setCorrects,
		currentQuestion,
		setCurrentQuestion,
		alertType,
		setAlertType,
		alertText,
		setAlertText,
		amount,
		randomOrder,
		alertTimeout,
		sizeOfFont,
		enableAlert,
		buttonSize,
		setButtonSize,
		iconScale,
		progressBarHeight,
		hasCountDown,
		countDown,
		countDownSettingVisibility,
		setCountDownSettingVisibility,
		sizeOfFontLarge,
		setSizeOfFontLarge,
		width,
		handleHome,
		handleSetting,
	} = props;

	//countDown in seconds; countDownCurrent in milliseconds
	//countDownCurrent will be decreased over time
	const [countDownCurrent, setCountDownCurrent] = useState(countDown * 1000),
		[quizHasEnded, setQuizHasEnded] = useState(false);

	const answer1 = useRef(),
		answer2 = useRef(),
		answer3 = useRef(),
		answer4 = useRef();

	useEffect(() => {
		setCountDownCurrent(countDown * 1000);
	}, [countDown, currentQuestion]);

	useEffect(() => {
		let timer;
		// console.log("has count down in use effect is ", typeof hasCountDown);
		if (hasCountDown !== "false" && !quizHasEnded) {
			timer =
				countDownCurrent > 0 &&
				setInterval(
					() => setCountDownCurrent(countDownCurrent - 100),
					100
				);
			// console.log("countdown: ", timer);
			if (timer === false) {
				if (enableAlert) {
					handleSubmitWithAlert();
				}
				if (!enableAlert) {
					handleSubmitNoAlert();
				}
			}
		}
		return () => clearInterval(timer);
	}, [countDownCurrent, hasCountDown]);

	useEffect(() => {
		function handleKeyDown(e) {
			// console.log(`Updated. current question: ${currentQuestion}`);
			if (e.code === "Digit1" || e.code === "Numpad1") {
				answer1.current.focus();
				setChosenAnswer(answers[0]);
				console.log("set chosen answer: ", answers[0]);
			}
			if (e.code === "Digit2" || e.code === "Numpad2") {
				answer2.current.focus();
				setChosenAnswer(answers[1]);
				console.log("set chosen answer: ", answers[1]);
			}
			if (e.code === "Digit3" || e.code === "Numpad3") {
				if (answers.length > 2) {
					answer3.current.focus();
					setChosenAnswer(answers[2]);
				}
			}
			if (e.code === "Digit4" || e.code === "Numpad4") {
				if (answers.length > 2) {
					answer4.current.focus();
					setChosenAnswer(answers[3]);
				}
			}
			if (
				e.code === "Space" ||
				e.code === "Enter" ||
				e.code === "NumpadEnter"
			) {
				if (enableAlert || enableAlert === "true") {
					handleSubmitWithAlert();
				}
				if (!enableAlert || enableAlert === "false") {
					handleSubmitNoAlert();
				}
			}
			if (e.code === "Escape" || e.code === "Home") {
				handleHome();
			}
			if (e.code === "KeyI") handleSetting();
		}
		// console.log("handle key down reference: ", handleKeyDown);
		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	});

	if (props === []) {
		//loading not complete
		return <h4>Loading...</h4>;
	}

	let answers = [];
	//formatting input
	let question_formatted = question.replace(/&quot;|&ldquo;|&rdquo;/g, '"');
	question_formatted = question_formatted.replace(/&#039;/g, "'");
	question_formatted = question_formatted.replace(/&amp;/g, "&");
	question_formatted = question_formatted.replace(/&minus;/g, "-");
	question_formatted = question_formatted.replace(/&plus;/g, "+");
	question_formatted = question_formatted.replace(/&lt;/g, "<");
	question_formatted = question_formatted.replace(/&gr;/g, ">");

	let correct_answer_formatted = correct_answer.replace(
		/&quot;|&ldquo;|&rdquo;/g,
		'"'
	);
	correct_answer_formatted = correct_answer_formatted.replace(/&#039;/g, "'");
	correct_answer_formatted = correct_answer_formatted.replace(/&amp;/g, "&");

	let incorrect_answers_formatted = incorrect_answers.map((answer) =>
		answer.replace(/&#039;/g, "'")
	);
	incorrect_answers_formatted = incorrect_answers_formatted.map((answer) =>
		answer.replace(/&quot;|&ldquo;|&rdquo;/g, '"')
	);
	incorrect_answers_formatted = incorrect_answers_formatted.map((answer) =>
		answer.replace(/&amp;/g, "&")
	);

	/**
	 *
	 * @returns The jsx for the answering buttons. For either true/false or multiple choice questions.
	 */
	function generateAnswers() {
		if (type === "boolean") {
			//true/false question
			answers = ["True", "False"];
			return (
				<div id="answer-buttons">
					<Button
						className="Button"
						variant="outline-primary"
						size={buttonSize}
						value="True"
						onClick={handleAnswer}
						ref={answer1}
					>
						True
					</Button>{" "}
					<Button
						className="Button"
						variant="outline-primary"
						size={buttonSize}
						value="False"
						onClick={handleAnswer}
						ref={answer2}
					>
						False
					</Button>{" "}
				</div>
			);
		}

		//multiple choise question
		answers = [];
		answers[randomOrder.indexOf(4)] = correct_answer_formatted;
		answers[randomOrder.indexOf(3)] = incorrect_answers_formatted[0];
		answers[randomOrder.indexOf(2)] = incorrect_answers_formatted[1];
		answers[randomOrder.indexOf(1)] = incorrect_answers_formatted[2];
		//console.log("answers ", answers);

		return (
			<div style={{ margin: "20px" }}>
				<Button
					className="Button"
					variant="outline-primary button-answer"
					size={buttonSize}
					onClick={handleAnswer}
					value={answers[0]}
					ref={answer1}
				>
					A: {answers[0]}
				</Button>{" "}
				<Button
					className="Button"
					variant="outline-primary"
					size={buttonSize}
					onClick={handleAnswer}
					value={answers[1]}
					ref={answer2}
				>
					B: {answers[1]}
				</Button>{" "}
				<Button
					className="Button"
					variant="outline-primary"
					size={buttonSize}
					onClick={handleAnswer}
					value={answers[2]}
					ref={answer3}
				>
					C: {answers[2]}
				</Button>{" "}
				<Button
					className="Button"
					variant="outline-primary"
					size={buttonSize}
					onClick={handleAnswer}
					value={answers[3]}
					ref={answer4}
				>
					D: {answers[3]}
				</Button>{" "}
			</div>
		);
	}

	function handleSubmitWithAlert() {
		clearTimeout(timeoutObject); //cancel alert timeout from previous question
		if (chosenAnswer === correct_answer_formatted) {
			setAlertType("success");
			setCorrects(corrects + 1);
			setAlertText("Correct!");
		} else {
			setAlertText(
				`Sorry wrong answer. The correct answer was ${correct_answer_formatted}.`
			);
			setAlertType("warning");
		}
		setShowAlert(true);
		setCurrentQuestion(currentQuestion + 1);
		setChosenAnswer("");
		setTimeoutObject(
			setTimeout(() => {
				setShowAlert(false);
			}, alertTimeout * 1000)
		);
	}

	function handleSubmitNoAlert() {
		if (currentQuestion > amount) {
			// this is here to prevent handleSubmit from running when mainScreen has unmounted.
		} else {
			if (chosenAnswer === correct_answer_formatted) {
				setCorrects(corrects + 1);
			} else {
			}
			setCurrentQuestion(currentQuestion + 1);
			setChosenAnswer("");
		}
	}

	function generateSubmit() {
		let handleSubmit = handleSubmitWithAlert;
		if (enableAlert == "true") {
			handleSubmit = handleSubmitWithAlert;
		}
		if (enableAlert == "false") {
			handleSubmit = handleSubmitNoAlert;
		}
		// console.log("(generate submit) enable alert is ", enableAlert);
		// console.log("(generate submit) handle submit is ", handleSubmit);

		if (chosenAnswer == "") {
			return <React.Fragment></React.Fragment>;
		}
		return (
			<React.Fragment>
				<Button
					className="Button"
					variant="primary"
					value="Submit"
					size={buttonSize}
					onClick={handleSubmit}
				>
					Submit
				</Button>{" "}
			</React.Fragment>
		);
	}

	function handleAnswer(e) {
		setChosenAnswer(e.target.value);
		//console.log("Chosen answer: ", e.target.value);
	}

	return (
		<div>
			<Alert
				show={showAlert}
				variant={alertType}
				style={{ fontSize: sizeOfFontLarge }}
			>
				{alertText}
			</Alert>
			<div
				id="Question-and-answers"
				style={{
					textAlign: "center",
				}}
			>
				<h3 style={{ fontSize: sizeOfFontLarge }}>
					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip style={{ fontSize: sizeOfFont }}>
								Question {currentQuestion} of {amount} <br />{" "}
								Category: {category} <br /> Difficulty:{" "}
								{difficulty}
							</Tooltip>
						}
					>
						<BsQuestionCircle
							style={{ padding: "6px" }}
							size={`${35 * iconScale}`}
							color="deepskyblue"
						/>
					</OverlayTrigger>{" "}
					{question_formatted}
				</h3>
				<hr></hr>
				<div style={{ display: countDownSettingVisibility }}>
					<ProgressBar
						style={{
							fontSize: sizeOfFont,
							height: progressBarHeight,
							margin: "5px 500px 10px 500px",
						}}
						now={(countDownCurrent / (countDown * 1000)) * 100}
						label={`${countDownCurrent / 1000} sec`}
					/>
				</div>

				{generateAnswers()}
				<br></br>
				{generateSubmit()}
			</div>
		</div>
	);
}

export default Question;
