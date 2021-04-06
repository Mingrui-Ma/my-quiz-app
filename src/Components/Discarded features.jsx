// features that were removed but that I couldn't bring to deleting. This file is for storage only and doesn't affect the app.

// source: question.jsx
// effect: does not enter endScreen until the notification has faded out.
// reason for removal: bad UX; calling setAlertText() in rapid succession can lead to bugs.
function handleSubmitWithAlert() {
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
	setChosenAnswer("");

	const enabledAlert = enableAlert == "true" || enableAlert;
	const lastQuestion = currentQuestion == amount;
	// console.log(enableAlert == "true" && currentQuestion == amount);
	clearTimeout(timeoutObject);
	if (enabledAlert && lastQuestion) {
		setShowSkip("yes");
		setQuizHasEnded(true);
		const text = alertText;
		setAlertText("End of quiz.  " + text);
		setTimeoutObject(
			setTimeout(() => {
				setCurrentQuestion(currentQuestion + 1);
				setShowAlert(false);
			}, alertTimeout * 1000)
		);
		// console.log("incrementing after timeout");
	} else {
		setCurrentQuestion(currentQuestion + 1);
		// console.log("incrementing normally.");
		setTimeoutObject(
			setTimeout(() => {
				setShowAlert(false);
			}, alertTimeout * 1000)
		);
	}
}

function handleSkip() {
	clearTimeout(timeoutObject);
	setCurrentQuestion(currentQuestion + 1);
}
function generateSkip() {
	if (showSkip == "") {
		return <React.Fragment></React.Fragment>;
	}
	return (
		<React.Fragment>
			<Button
				className="Button"
				variant="light"
				value="skip"
				size={buttonSize}
				onClick={handleSkip}
			>
				Skip Wait Time
			</Button>{" "}
		</React.Fragment>
	);
}
