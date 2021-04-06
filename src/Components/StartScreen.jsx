import React, { useEffect, useState } from "react";
import Disclaimer from "./Disclaimer";
import Setting from "./Setting";
import TopBanner from "./TopBanner";
import { BsGear } from "react-icons/bs";
import { Button, OverlayTrigger, Tooltip, Navbar } from "react-bootstrap";

export default function StartScreen(props) {
	const {
		quizURL,
		setQuizURL,
		amount,
		setAmount,
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
		scoreHistory,
		setScoreHistory,
		disclaimerVisibility,
		setDisclaimerVisibility,
		handleDisclaimerVisibilityChange,
	} = props;
	//URL template: https://opentdb.com/api.php?amount=30&category=10&difficulty=medium
	//setQuizURL("https://opentdb.com/api.php?amount=10");

	const [category, setCategory] = useState("any"),
		[difficulty, setDifficulty] = useState("any"),
		[showSetting, setShowSetting] = useState(false), //startScreen has a different showSetting as mainScreen
		[scoreHistoryLi, setScoreHistoryLi] = useState(listHistoryLi()),
		[fieldWidth, setFieldWidth] = useState(
			"medium-width-startScreen-field"
		),
		[categoryWidth, setCategoryWidth] = useState(
			"medium-width-startScreen-category"
		),
		[historyWidth, setHistoryWidth] = useState(160),
		[historyBottom, setHistoryBottom] = useState(220),
		[historyBorder, setHistoryBorder] = useState(3);

	useEffect(() => {
		document.title = "Welcome to My-Quiz-App";
	}, []);

	useEffect(() => {
		// console.log(sizeOfFont);
		if (sizeOfFont === "110%") {
			setFieldWidth("medium-width-startScreen-field");
			setCategoryWidth("medium-width-startScreen-category");
			setHistoryWidth(160);
			setHistoryBottom(220);
			setHistoryBorder(3);
			// console.log("setting width now medium");
		}
		if (sizeOfFont === "80%") {
			setFieldWidth("small-width-startScreen-field");
			setCategoryWidth("small-width-startScreen-category");
			setHistoryWidth(130);
			setHistoryBottom(190);
			setHistoryBorder(2);
			// console.log("setting width now small");
		}
		if (sizeOfFont === "140%") {
			setFieldWidth("large-width-startScreen-field");
			setCategoryWidth("large-width-startScreen-category");
			setHistoryWidth(210);
			setHistoryBottom(260);
			setHistoryBorder(4);
			// console.log("setting width now large");
		}
	}, [sizeOfFont]);

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
			console.log("countdown now visible.");
		}
		if (hasCountDown == "false") {
			setCountDownSettingVisibility("none");
			console.log("countdown now invisible.");
		}
	}, [hasCountDown]);

	useEffect(() => {
		setScoreHistoryLi(listHistoryLi());
	}, [scoreHistory]);

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

	function handleSetting() {
		setShowSetting(!showSetting);
	}

	function listHistoryLi() {
		// console.log(scoreHistory);
		const items = [];
		for (let [idx, val] of scoreHistory.entries()) {
			if (parseFloat(val) >= 50)
				items.push(
					<li className="thumb-up" key={idx}>
						{val}
					</li>
				);
			else
				items.push(
					<li className="thumb-down" key={idx}>
						{val}
					</li>
				);
		}
		return items;
	}

	function handleClearHistory() {
		setScoreHistory([]);
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
					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>
								"My" stands for "Myron". (Thanks Michael
								Widenius for the idea)
							</Tooltip>
						}
					>
						<span style={{ fontSize: sizeOfFont }}>
							Welcome to My-Quiz-App!
						</span>
					</OverlayTrigger>
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
				</div>
			</Navbar>
			{/* <TopBanner 
			        iconScale={iconScale}
					sizeOfFont={sizeOfFont}
					handleSetting={handleSetting}
			/> */}
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
				iconScale={iconScale}
				width={width}
				disclaimerVisibility={disclaimerVisibility}
				setDisclaimerVisibility={setDisclaimerVisibility}
				handleDisclaimerVisibilityChange={
					handleDisclaimerVisibilityChange
				}
			/>
			<OverlayTrigger
				placement="bottom"
				overlay={
					<Tooltip>
						Quiz questions will be randomly selected from the Open
						Trivia DB, with the criteria declared below.
					</Tooltip>
				}
			>
				<h1
					style={{
						textAlign: "center",
						marginTop: "10px",
						fontSize: sizeOfFontLarge,
					}}
				>
					{/* width: {width} <br /> */}
					Customize Quiz
				</h1>
			</OverlayTrigger>
			{/* <p>
					1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />
				</p> */}
			<form
				style={{
					textAlign: "center",
					marginTop: "10px",
					fontSize: sizeOfFont,
					position: "relative",
				}}
			>
				<OverlayTrigger
					placement="bottom"
					overlay={
						<Tooltip>
							Number of questions must be between 1 and 50.
						</Tooltip>
					}
				>
					<label htmlFor="trivia_amount">Number of Questions:</label>
				</OverlayTrigger>
				<input
					className={fieldWidth}
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
					placement="bottom"
					overlay={
						<Tooltip>
							Questions will be taken from all categories, or the
							selected category.{" "}
						</Tooltip>
					}
				>
					<label htmlFor="trivia_category">Select Category: </label>
				</OverlayTrigger>
				<select
					className={categoryWidth}
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
					placement="bottom"
					overlay={
						<Tooltip>
							Questions will be taken from all difficulty levels,
							or the selected difficulty level.{" "}
						</Tooltip>
					}
				>
					<label htmlFor="trivia_difficulty">
						Select Difficulty:{" "}
					</label>
				</OverlayTrigger>
				<select
					className={fieldWidth}
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

				<Button
					className="Button"
					variant="primary"
					onClick={handleSubmit}
					style={{ margin: "10px" }}
					size={buttonSize}
				>
					Start a Quiz
				</Button>

				<Button
					className="Button"
					variant="danger"
					onClick={handleReset}
					size={buttonSize}
				>
					Reset Quiz Settings
				</Button>
			</form>
			<div
				id="quiz-history"
				style={{
					// display: "inline-block",
					fontSize: sizeOfFont,
					border: `${historyBorder}px solid deepskyblue`,
					borderRadius: "5%",
					position: "relative",
					left: `${width - historyWidth - historyBorder}px`,
					bottom: `${historyBottom}px`,
					width: `${historyWidth}px`,
				}}
			>
				<div
					style={{
						marginTop: "10px",
						marginLeft: "10px",
					}}
				>
					<p>
						Past Quiz Scores: <br />
					</p>
					<ul>{scoreHistoryLi}</ul>
					<div style={{ textAlign: "center" }}>
						<Button
							className="Button"
							variant="primary"
							onClick={handleClearHistory}
							style={{ margin: "10px" }}
							size={buttonSize}
						>
							clear
						</Button>
					</div>
				</div>
			</div>

			<Disclaimer
				sizeOfFont={sizeOfFont}
				disclaimerVisibility={disclaimerVisibility}
			/>
		</div>
	);
}
