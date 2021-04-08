import React, { useEffect, useState, useRef } from "react";
import Disclaimer from "./Disclaimer";
import Setting from "./Setting";
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
		height,
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
		[historyBorder, setHistoryBorder] = useState(3),
		[navbarBrandWidth, setNavbarBrandWidth] = useState(306);

	const navbarEl = useRef(),
		numInput = useRef(),
		selectInput1 = useRef(),
		selectInput2 = useRef();

	useEffect(() => {
		document.title = "Welcome to My-Quiz-App";

		numInput.current.focus();
	}, []);

	useEffect(() => {
		function handleKeyDown(e) {
			console.log(`key code: ${e.code}`);
			if (
				e.code === "Enter" ||
				e.code === "Space" ||
				e.code === "NumpadEnter"
			)
				handleGenerateURL();
			if (e.code === "Escape" || e.code === "Home") handleResetURL();
			if (e.code === "KeyI") handleSetting();
		}
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	});

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

		setNavbarBrandWidth(navbarEl.current.offsetWidth);
	}, [sizeOfFont]);

	useEffect(() => {
		if (enableAlert === "true") {
			setTimeoutSettingVisibility("inline");
			//console.log("visibility is now inline.");
		}
		if (enableAlert === "false") {
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
	function handleGenerateURL() {
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

	function handleResetURL() {
		setAmount(10);
		setCategory("any");
		setDifficulty("any");
	}

	function handleSetting() {
		setShowSetting(!showSetting);
	}

	/**
	 * Wrap scoreHistory items in li tag so that JSX can display it.
	 * @returns array
	 */
	function listHistoryLi() {
		// console.log(scoreHistory);
		const items = [];
		for (let [idx, val] of scoreHistory.entries()) {
			if (parseFloat(val) >= 50)
				items.push(
					<li className="thumbs thumb-up" key={idx}>
						{val}
					</li>
				);
			else
				items.push(
					<li className="thumbs thumb-down" key={idx}>
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
				<Navbar.Brand href="#home" ref={navbarEl}>
					<img
						alt=""
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
						style={{ verticalAlign: "middle" }}
						width={`${45 * iconScale}`}
						height={`${31 * iconScale}`}
						// className="d-inline-block align-top"
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
						<span
							style={{
								fontFamily: "Georgia",
								fontSize: sizeOfFont,
							}}
						>
							Welcome to My-Quiz-App!
						</span>
					</OverlayTrigger>
				</Navbar.Brand>
				<div
					style={{ position: "absolute", right: "8px" }}
				>
					<OverlayTrigger
						placement="bottom"
						overlay={<Tooltip>Settings</Tooltip>}
					>
						<BsGear
							className="react-icons"
							onClick={handleSetting}
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
				iconScale={iconScale}
				width={width}
				disclaimerVisibility={disclaimerVisibility}
				setDisclaimerVisibility={setDisclaimerVisibility}
				handleDisclaimerVisibilityChange={
					handleDisclaimerVisibilityChange
				}
			/>

			{/* <p>
				Helvetica is perhaps the most famous font of all time, <br />{" "}
				and definitely one of the only fonts to have its own dedicated
				documentary. <br /> It’s a modern sans serif font, inspired by
				other modern Swiss and German fonts from the late 19th and early
				20th centuries. Rather than a soft, rounded, and warm design,
				<br /> it’s balanced and focused on clean lines and shapes.{" "}
				<br />
				This makes it one of the few fonts suitable for both body copy
				and headlines. <br />
				All Apple devices include Helvetica fonts, while Microsoft
				defaults to Arial, its MS equivalent.
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
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
							Quiz questions will be randomly selected from the
							Open Trivia DB, with the criteria declared below.
						</Tooltip>
					}
				>
					<h1
						style={{
							marginBottom: "10px",
							fontSize: sizeOfFontLarge,
						}}
					>
						{/* width: {width} <br />
						navbar brand width: {navbarBrandWidth} <br /> */}
						Customize Quiz
					</h1>
				</OverlayTrigger>
				<OverlayTrigger
					placement="bottom"
					overlay={
						<Tooltip>
							Number of questions must be between 1 and 50.
						</Tooltip>
					}
				>
					<label
						htmlFor="trivia_amount"
						onClick={() => numInput.current.focus()}
					>
						Number of Questions:
					</label>
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
					ref={numInput}
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
					<label
						htmlFor="trivia_category"
						onClick={() => selectInput1.current.focus()}
					>
						Select Category:{" "}
					</label>
				</OverlayTrigger>
				<select
					className={categoryWidth}
					name="trivia_category"
					value={category}
					onChange={handleCategoryChange}
					ref={selectInput1}
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
					<label
						htmlFor="trivia_difficulty"
						onClick={() => selectInput2.current.focus()}
					>
						Select Difficulty:{" "}
					</label>
				</OverlayTrigger>
				<select
					className={fieldWidth}
					name="trivia_difficulty"
					value={difficulty}
					onChange={handleDifficultyChange}
					ref={selectInput2}
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
					onClick={handleGenerateURL}
					style={{ margin: "10px" }}
					size={buttonSize}
				>
					Begin Quiz
				</Button>

				<Button
					className="Button"
					variant="danger"
					onClick={handleResetURL}
					size={buttonSize}
				>
					Reset
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
						margin: "10px",
						textAlign: "center",
					}}
				>
					<p>
						Past Quiz Scores: <br />
					</p>
					<ul>{scoreHistoryLi}</ul>
					<div>
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
