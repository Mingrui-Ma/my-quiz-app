import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Question extends Component {
	constructor(props) {
		super(props);
	}

	//generate "1,2,3,4" in a random order
	randomlyGenerateOrder() {
		let remainingNums = [1, 2, 3, 4],
			randomOrder = [];

		let orderIdx = 0,
			nextIdx, //index of the chosen number
			idxInRemain;
		for (let i = 4; i > 0; i--) {
			nextIdx = Math.floor(Math.random() * i);
			//console.log(`${i}th iteration: got ${nextIdx}`);
			randomOrder[orderIdx++] = remainingNums[nextIdx];
			remainingNums.splice(nextIdx, 1);
			//console.log(`Remains: ${remainingNums}`);
		}
		return randomOrder;
	}
	//create the buttons for answers
	generateAnswers() {
		const {
			quiz,
			questionTotal,
			questionNumber,
			correctAnswers,
			currentAnswer,
		} = this.props;
		console.log("quiz:", quiz);
		console.log("qNum", questionNumber);
		if (!quiz[questionNumber].type === "multiple") {
			//true/false question
			return (
				<div id="answerButtons">
					<Button variant="secondary">True</Button>
					<Button variant="secondary">False</Button>
				</div>
			);
		}
		//multiple choise question
		let answerOrder = this.randomlyGenerateOrder(), //number 4 corresponds to correct answer
			answers = [];
		let correctAnswerIdx = answerOrder.indexOf(4),
			wrongAnswerIdx1 = answerOrder.indexOf(3),
			wrongAnswerIdx2 = answerOrder.indexOf(2),
			wrongAnswerIdx3 = answerOrder.indexOf(1);
		answers[correctAnswerIdx] = quiz[questionNumber].correct_answer;
		answers[wrongAnswerIdx1] = quiz[questionNumber].incorrect_answers[0];
		answers[wrongAnswerIdx2] = quiz[questionNumber].incorrect_answers[1];
		answers[wrongAnswerIdx3] = quiz[questionNumber].incorrect_answers[2];
		return (
			<div id="answerButtons">
				<Button variant="secondary">A: {answers[0]}</Button>
				<Button variant="secondary">B: {answers[1]}</Button>
				<Button variant="secondary">C: {answers[2]}</Button>
				<Button variant="secondary">D: {answers[3]}</Button>
			</div>
		);
	}

	render() {
		return <div>{this.generateAnswers()}</div>;
	}
}

export default Question;
