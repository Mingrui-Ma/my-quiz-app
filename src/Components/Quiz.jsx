import React, { Component } from "react";
import Question from "./Question";

//implement default question set first, then add custom category, difficulty, question number.
class Quiz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quiz: [
				{
					category: "Entertainment: Books",
					correct_answer: "Ian Fleming",
					difficulty: "easy",
					incorrect_answers: (3)[
						("Joseph Conrad", "John Buchan", "Graham Greene")
					],
					question:
						"Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?",
					type: "multiple",
				},
			],
			questionTotal: 9, //starts with 0
			questionNumber: 0, //starts with 0
			correctAnswers: 0,
			currentAnswer: "",
		};
	}

	componentDidMount() {
		document.title = "My-Quiz-App";
		console.log("componentdidmount was called.");
		var xhttp = new XMLHttpRequest(),
			requestURL = "https://opentdb.com/api.php?amount=10",
			self = this;
		xhttp.open("GET", requestURL);
		xhttp.responseType = "json";
		xhttp.send();

		let response;
		xhttp.onload = function () {
			console.log("Quiz JSON loaded successfully.");
			response = xhttp.response;
			self.setState({
				quiz: response.results,
				questionTotal: 9, //starts with 0
				questionNumber: 0, //starts with 0
				correctAnswers: 0,
				currentAnswer: "",
			});
		};
	}

	render() {
		return (
			<div>
				<Question
					quiz={this.state.quiz}
					questionTotal={this.state.questionTotal}
					questionNumber={this.state.questionNumber}
					correctAnswers={this.state.correctAnswers}
					currentAnswer={this.state.currentAnswer}
				/>
				<h3>Category: {this.state.quiz[0].category}</h3>
				<p>Question: {this.state.quiz[0].question}</p>
			</div>
		);
	}
}

export default Quiz;
