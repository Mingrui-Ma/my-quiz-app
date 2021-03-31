import React, { Component, useState, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";

function Question(props) {
	const [chosenAnswer, setChosenAnswer] = useState(""),
		[showAlert, setShowAlert] = useState(false),
		[alertText, setAlertText] = useState("Correct!"),
		[alertType, setAlertType] = useState("success");

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
		amount,
		randomOrder,
		alertTimeout,
		sizeOfFont,
		enableAlert,
	} = props;

	const [buttonSize, setButtonSize] = useState("");
	const [sizeOfFontLarge, setSizeOfFontLarge] = useState(sizeOfFont);
	useEffect(() => {
		let sizeOfFontNumber = parseFloat(sizeOfFont);
		setSizeOfFontLarge(sizeOfFontNumber * 1.3 + "%");
		if (sizeOfFontNumber == 100) setButtonSize("");
		if (sizeOfFontNumber < 100) setButtonSize("sm");
		if (sizeOfFontNumber > 100) setButtonSize("lg");
	}, [sizeOfFont]);

	const [handleSubmit, setHandleSubmit] = useState(() => 1);
	useEffect(() => {
		if (enableAlert) setHandleSubmit(handleSubmitWithAlert);
		else setHandleSubmit(handleSubmitNoAlert);
	}, [enableAlert]);

	if (props === []) {
		//loading not complete
		return <h4>Loading...</h4>;
	}

	//formatting input
	let question_formatted = question.replace(/&quot;/g, '"');
	question_formatted = question_formatted.replace(/&#039;/g, "'");
	question_formatted = question_formatted.replace(/&amp;/g, "&");
	question_formatted = question_formatted.replace(/&minus;/g, "-");
	question_formatted = question_formatted.replace(/&plus;/g, "+");
	question_formatted = question_formatted.replace(/&lt;/g, "<");
	question_formatted = question_formatted.replace(/&gr;/g, ">");

	let correct_answer_formatted = correct_answer.replace(/&quot;/g, '"');
	correct_answer_formatted = correct_answer_formatted.replace(/&#039;/g, "'");
	correct_answer_formatted = correct_answer_formatted.replace(/&amp;/g, "&");

	let incorrect_answers_formatted = incorrect_answers.map((answer) =>
		answer.replace(/&#039;/g, "'")
	);
	incorrect_answers_formatted = incorrect_answers_formatted.map((answer) =>
		answer.replace(/&quot;/g, '"')
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
			return (
				<div id="answerButtons">
					<Button
						variant="outline-primary"
						size={buttonSize}
						value="True"
						onClick={handleAnswer}
					>
						True
					</Button>{" "}
					<Button
						variant="outline-primary"
						size={buttonSize}
						value="False"
						onClick={handleAnswer}
					>
						False
					</Button>{" "}
				</div>
			);
		}

		//multiple choise question
		let answers = [];
		answers[randomOrder.indexOf(4)] = correct_answer_formatted;
		answers[randomOrder.indexOf(3)] = incorrect_answers_formatted[0];
		answers[randomOrder.indexOf(2)] = incorrect_answers_formatted[1];
		answers[randomOrder.indexOf(1)] = incorrect_answers_formatted[2];
		//console.log("answers ", answers);

		return (
			<div>
				<Button
					variant="outline-primary button-answer"
					size={buttonSize}
					onClick={handleAnswer}
					value={answers[0]}
				>
					A: {answers[0]}
				</Button>{" "}
				<Button
					variant="outline-primary"
					size={buttonSize}
					onClick={handleAnswer}
					value={answers[1]}
				>
					B: {answers[1]}
				</Button>{" "}
				<Button
					variant="outline-primary"
					size={buttonSize}
					onClick={handleAnswer}
					value={answers[2]}
				>
					C: {answers[2]}
				</Button>{" "}
				<Button
					variant="outline-primary"
					size={buttonSize}
					onClick={handleAnswer}
					value={answers[3]}
				>
					D: {answers[3]}
				</Button>{" "}
			</div>
		);
	}

	function handleSubmitWithAlert() {
		if (chosenAnswer === correct_answer_formatted) {
			setAlertType("success");
			incrementCorrects();
			setAlertText("Correct!");
		} else {
			setAlertText(
				`Sorry wrong answer. The correct answer was ${correct_answer_formatted}.`
			);
			setAlertType("warning");
		}
		setShowAlert(true);
		incrementCurrentQuestion();
		setChosenAnswer("");
		setTimeout(() => {
			setShowAlert(false);
		}, alertTimeout);
	}

	function handleSubmitNoAlert() {
		if (chosenAnswer === correct_answer_formatted) {
			incrementCorrects();
		} else {
		}
		incrementCurrentQuestion();
		setChosenAnswer("");
	}

	function generateSubmit() {
		if (chosenAnswer == "") {
			return <React.Fragment></React.Fragment>;
		}
		return (
			<React.Fragment>
				<Button
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

	function incrementCorrects() {
		setCorrects(corrects + 1);
	}
	function incrementCurrentQuestion() {
		setCurrentQuestion(currentQuestion + 1);
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
			<h3 style={{ fontSize: sizeOfFontLarge }}>
				Question: {question_formatted}
			</h3>
			<hr></hr>
			{generateAnswers()}
			<br></br>
			{generateSubmit()}
		</div>
	);
}

export default Question;
