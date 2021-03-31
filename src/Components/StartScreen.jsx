import React, { useEffect, useState } from "react";
import Disclaimer from "./Disclaimer";
import { BsFillGearFill } from "react-icons/bs";
import { Button, OverlayTrigger, Tooltip, Navbar } from "react-bootstrap";

export default function StartScreen(props) {
	useEffect(() => {
		document.title = "my-quiz-app-start";
	}, []);

	const { quizURL, setQuizURL, amount, setAmount } = props;
	//URL template: https://opentdb.com/api.php?amount=30&category=10&difficulty=medium
	//setQuizURL("https://opentdb.com/api.php?amount=10");

	const [category, setCategory] = useState("any"),
		[difficulty, setDifficulty] = useState("any");

	function handleAmountChange(e) {
		setAmount(e.target.value);
	}
	function handleCategoryChange(e) {
		setCategory(e.target.value);
	}
	function handleDifficultyChange(e) {
		setDifficulty(e.target.value);
	}

	let url = "https://opentdb.com/api.php?amount=";
	function handleSubmit() {
		url += amount;
		if (category !== "any") {
			url += "&category=";
			url += category;
		}
		if (difficulty !== "any") {
			url += "&difficulty=";
			url += difficulty;
		}
		//console.log(url);
		setQuizURL(url);
	}

	function handleReset() {
		setAmount(10);
		setCategory("any");
		setDifficulty("any");
	}

	return (
		<div>
			<form>
				<OverlayTrigger
					placement="bottom"
					overlay={
						<Tooltip>
							"My" stands for "Myron". (Thanks Michael Widenius
							for the idea)
						</Tooltip>
					}
				>
					<Navbar bg="dark" variant="dark">
						<Navbar.Brand href="#home">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
								width="44"
								height="30"
								className="d-inline-block align-top"
							/>{" "}
							Welcome to My-Quiz-App!
						</Navbar.Brand>
					</Navbar>
				</OverlayTrigger>

				<h2>Customize quiz</h2>

				<OverlayTrigger
					placement="top"
					overlay={
						<Tooltip>
							Number of questions must be between 1 and 50.
						</Tooltip>
					}
				>
					<label htmlFor="trivia_amount">Number of Questions:</label>
				</OverlayTrigger>
				<input
					type="number"
					name="trivia_amount"
					id="trivia_amount"
					min="1"
					max="50"
					value={amount}
					onChange={handleAmountChange}
				/>
				<br />

				<OverlayTrigger
					placement="top"
					overlay={
						<Tooltip>
							Questions will be taken from all categories, or one
							chosen category.{" "}
						</Tooltip>
					}
				>
					<label htmlFor="trivia_category">Select Category: </label>
				</OverlayTrigger>
				<select
					name="trivia_category"
					value={category}
					onChange={handleCategoryChange}
				>
					<option value="any">Any Category</option>
					<option value="9">General Knowledge</option>
					<option value="10">Entertainment: Books</option>
					<option value="11">Entertainment: Film</option>
					<option value="12">Entertainment: Music</option>
					<option value="13">
						Entertainment: Musicals and Theatres
					</option>
					<option value="14">Entertainment: Television</option>
					<option value="15">Entertainment: Video Games</option>
					<option value="16">Entertainment: Board Games</option>
					<option value="17">Science and Nature</option>
					<option value="18">Science: Computers</option>
					<option value="19">Science: Mathematics</option>
					<option value="20">Mythology</option>
					<option value="21">Sports</option>
					<option value="22">Geography</option>
					<option value="23">History</option>
					<option value="24">Politics</option>
					<option value="25">Art</option>
					<option value="26">Celebrities</option>
					<option value="27">Animals</option>
					<option value="28">Vehicles</option>
					<option value="29">Entertainment: Comics</option>
					<option value="30">Science: Gadgets</option>
					<option value="31">
						Entertainment: Japanese Anime and Manga
					</option>
					<option value="32">
						Entertainment: Cartoon and Animations
					</option>
				</select>
				<br />

				<OverlayTrigger
					placement="top"
					overlay={
						<Tooltip>
							Questions will be taken from all difficulty levels,
							or one chosen difficulty level.{" "}
						</Tooltip>
					}
				>
					<label htmlFor="trivia_difficulty">
						Select Difficulty:{" "}
					</label>
				</OverlayTrigger>
				<select
					name="trivia_difficulty"
					value={difficulty}
					onChange={handleDifficultyChange}
				>
					<option value="any">Any Difficulty</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
				<br />

				<Button variant="primary" onClick={handleSubmit}>
					Start a quiz
				</Button>
				<br />

				<Button variant="danger" onClick={handleReset}>
					Reset settings
				</Button>
			</form>
			<Disclaimer />
		</div>
	);
}
