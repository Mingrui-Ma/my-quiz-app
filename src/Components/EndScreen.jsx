import React, { Component } from "react";
import { Button } from "react-bootstrap";

function EndScreen(props) {
	const {
		corrects,
		amount,
		setQuizURL,
		setCorrects,
		setCurrentQuestion,
		sizeOfFont,
	} = props;

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
		<div style={{ fontSize: sizeOfFont }}>
			<h2>You've reached the end of the quiz.</h2>
			<h3>
				Your score is: {calcPercentage(corrects, amount)} ({corrects}{" "}
				right out of {amount}).
			</h3>
			<Button variant="primary" onClick={handleReturn}>
				Home
			</Button>
		</div>
	);
}

export default EndScreen;
