import React, { useEffect, useState } from "react";
import Question from "./Question";
import Disclaimer from "./Disclaimer";
import "./MainScreen.css";
import axios from "axios";
import { BsGear } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import {
	Button,
	ProgressBar,
	OverlayTrigger,
	Tooltip,
	Alert,
	Navbar,
} from "react-bootstrap";

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
		sizeOfFont,
		setSizeOfFont,
		enableAlert,
		setEnableAlert,
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
		[alertTimeout, setAlertTimeout] = useState(3000),
		[showSetting, setShowSetting] = useState(false),
		[randomOrder, setRandomOrder] = useState([]);

	useEffect(() => {
		document.title = `Question ${currentQuestion} - My-Quiz-App`;
	}, [quizURL, currentQuestion]);

	useEffect(() => {
		axios
			.get(quizURL)
			.then((res) => {
				const results = res.data.results;
				if (results !== response) setResponse(results);
				console.log("reference to response", response);
			})
			.catch((err) => console.log("error: ", err));
	}, []);

	function handleHome() {
		setQuizURL("");
	}

	/**
	 *
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

	function handleSetting() {
		setShowSetting(!showSetting);
	}

	const [progressBarHeight, setProgressBarHeight] = useState(20);
	useEffect(() => {
		let height = parseFloat(sizeOfFont);
		setProgressBarHeight((height / 100) * 20);
	}, [sizeOfFont]);
	function handleFontChange(e) {
		setSizeOfFont(e.target.value);
		//console.log("size of font: ", sizeOfFont);
	}
	function handleAlertChange(e) {
		setEnableAlert(e.target.value);
	}
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
						width="44"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					My-Quiz-App
					{/* <OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>
								"My" stands for "Myron". (Thanks Michael
								Widenius for the idea)
							</Tooltip>
						}
					> 	
						Welcome to My-Quiz-App!
					</OverlayTrigger> */}
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
							size={42}
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
							style={{ padding: "6px" }}
							onClick={handleHome}
							size={42}
							color="white"
						/>
					</OverlayTrigger>
				</div>
			</Navbar>

			<Alert
				show={showSetting}
				variant="dark"
				style={{ fontSize: sizeOfFont }}
			>
				implement setting here
				<form>
					<label htmlFor="font-size">Font size</label>
					<select
						name="font-size"
						value={sizeOfFont}
						onChange={handleFontChange}
					>
						<option value="80%">Small</option>
						<option value="110%">Medium</option>
						<option value="140%">Large</option>
					</select>
					<br />
					{/* <OverlayTrigger
					placement="bottom"
					overlay={
						<Tooltip>
							Show a notification for whether you answered the question correctly.
						</Tooltip>
					}>

					</OverlayTrigger> */}
					<label htmlFor="notify">Notify after submitting</label>
					<select
						name="notify"
						value={enableAlert}
						onChange={handleAlertChange}
					>
						<option value={true}>Yes</option>
						<option value={false}>No</option>
					</select>
					<br />
				</form>
			</Alert>
			<ProgressBar
				style={{ fontSize: sizeOfFont, height: progressBarHeight }}
				now={(currentQuestion / amount) * 100}
				label={`Question ${currentQuestion} of ${amount}`}
			/>
			<h6 style={{ fontSize: sizeOfFont }}>
				category: {response[currentQuestion - 1].category} | difficulty:{" "}
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
				amount={amount}
				randomOrder={randomOrder}
				alertTimeout={alertTimeout}
				sizeOfFont={sizeOfFont}
				enableAlert={enableAlert}
			/>

			<Disclaimer />
		</div>
	);
}
