import React, { useEffect, useState, useRef } from "react";
import { OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import { RiCloseCircleLine } from "react-icons/ri";

export default function Setting(props) {
	const {
		showSetting,
		handleSetting,
		sizeOfFont,
		handleFontChange,
		enableAlert,
		handleAlertChange,
		timeoutSettingVisibility,
		alertTimeout,
		handleAlertTimeoutChange,
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
		disclaimerVisibility,
		setDisclaimerVisibility,
		handleDisclaimerVisibilityChange,
	} = props;

	const [fieldWidth, setFieldWidth] = useState("medium-width-setting-field"),
		[labelWidth, setLabelWidth] = useState("medium-width-setting-label"),
		[hotkeyVisibility, setHotkeyVisibility] = useState("none");

	const selectInput1 = useRef(),
		selectInput2 = useRef(),
		selectInput3 = useRef(),
		selectInput4 = useRef(),
		numberInput1 = useRef(),
		numberInput2 = useRef();

	useEffect(() => {
		// console.log(sizeOfFont);
		if (sizeOfFont === "110%") {
			setFieldWidth("medium-width-setting-field");
			setLabelWidth("medium-width-setting-label");
			// console.log("setting width now medium");
		}
		if (sizeOfFont === "80%") {
			setFieldWidth("small-width-setting-field");
			setLabelWidth("small-width-setting-label");
			// console.log("setting width now small");
		}
		if (sizeOfFont === "140%") {
			setFieldWidth("large-width-setting-field");
			setLabelWidth("large-width-setting-label");
			// console.log("setting width now large");
		}
	}, [sizeOfFont]);

	function handleRevealHotkey(e) {
		if (hotkeyVisibility === "inline-block") setHotkeyVisibility("none");
		if (hotkeyVisibility === "none") setHotkeyVisibility("inline-block");
	}

	return (
		<Alert
			show={showSetting}
			variant="dark"
			style={{ fontSize: sizeOfFont }}
		>
			<div style={{ marginLeft: "10px" }}>
				<OverlayTrigger
					placement="bottom"
					overlay={<Tooltip>Close Settings</Tooltip>}
				>
					<RiCloseCircleLine
						style={{
							position: "absolute",
							right: "10px",
							cursor: "pointer",
						}}
						onClick={handleSetting}
						size={`${30 * iconScale}`}
						color="dimGray"
					/>
				</OverlayTrigger>

				<h4>Settings</h4>
				<form id="setting-form">
					<OverlayTrigger
						placement="bottom"
						overlay={<Tooltip>Set the font size.</Tooltip>}
					>
						<label
							className={labelWidth}
							id="setting-label"
							htmlFor="font-size"
							onClick={() => selectInput1.current.focus()}
						>
							Font Size
						</label>
					</OverlayTrigger>
					<select
						className={fieldWidth}
						id="setting-select"
						name="font-size"
						value={sizeOfFont}
						onChange={handleFontChange}
						ref={selectInput1}
					>
						<option value="80%">Small</option>
						<option value="110%">Medium</option>
						<option value="140%">Large</option>
					</select>
					<br />
					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>
								Set whether to display a notification for
								if a question was answered correctly.
							</Tooltip>
						}
					>
						<label
							className={labelWidth}
							id="setting-label"
							htmlFor="notify"
							onClick={() => selectInput2.current.focus()}
						>
							Notification
						</label>
					</OverlayTrigger>
					<select
						className={fieldWidth}
						id="setting-select"
						name="notify"
						value={enableAlert}
						onChange={handleAlertChange}
						ref={selectInput2}
					>
						<option value={true}>On</option>
						<option value={false}>Off</option>
					</select>
					<br />
					<div
						id="timeout-setting"
						style={{ display: timeoutSettingVisibility }}
					>
						{/* <pre style={{display:"inline"}}>  &#9492;&#9472;</pre> */}
						<OverlayTrigger
							placement="bottom"
							overlay={
								<Tooltip>
									Set the amount of time the notification is
									visible for (unit in seconds).
								</Tooltip>
							}
						>
							<label
								className={labelWidth}
								id="setting-label"
								htmlFor="notify-timeout"
								onClick={() => numberInput1.current.focus()}
							>
								Notification Time
							</label>
						</OverlayTrigger>
						<input
							className={fieldWidth}
							id="setting-select"
							type="number"
							name="notify-timeout"
							id="notify-timeout"
							min="0"
							max="9999"
							value={alertTimeout}
							onChange={handleAlertTimeoutChange}
							ref={numberInput1}
						/>
						<br />
					</div>

					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>
								Set whether to have a limited time to answer
								each question.
							</Tooltip>
						}
					>
						<label
							className={labelWidth}
							id="setting-label"
							htmlFor="countdown"
							onClick={() => selectInput3.current.focus()}
						>
							Limited Time
						</label>
					</OverlayTrigger>
					<select
						className={fieldWidth}
						id="setting-select"
						name="countdown"
						value={hasCountDown}
						onChange={handleCountDownChange}
						ref={selectInput3}
					>
						<option value={true}>On</option>
						<option value={false}>Off</option>
					</select>
					<br />
					<div
						id="countdown-setting"
						style={{ display: countDownSettingVisibility }}
					>
						{/* <pre style={{display:"inline"}}>  &#9492;&#9472;</pre>				 */}
						<OverlayTrigger
							placement="bottom"
							overlay={
								<Tooltip>
									Set the amount of time allotted for
									answering each question (unit in seconds).
								</Tooltip>
							}
						>
							<label
								className={labelWidth}
								id="setting-label"
								htmlFor="countdown-timeout"
								onClick={() => numberInput2.current.focus()}
							>
								Allotted Time
							</label>
						</OverlayTrigger>
						<input
							className={fieldWidth}
							id="setting-select"
							type="number"
							name="countdown-timeout"
							id="countdown-timeout"
							min="0"
							max="9999"
							value={countDown}
							onChange={handleCountDownTimeChange}
							ref={numberInput2}
						/>
						<br />
					</div>
					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>
								Set the visibility of the footer.
							</Tooltip>
						}
					>
						<label
							className={labelWidth}
							id="setting-label"
							htmlFor="disclaimer-visibility"
							onClick={() => selectInput4.current.focus()}
						>
							Footer Visibility
						</label>
					</OverlayTrigger>
					<select
						className={fieldWidth}
						id="setting-select"
						name="disclaimer-visibility"
						value={disclaimerVisibility}
						onChange={handleDisclaimerVisibilityChange}
						ref={selectInput4}
					>
						<option value={"inline"}>On</option>
						<option value={"none"}>Off</option>
					</select>
					<br />
					<div style={{ verticalAlign: "middle" }}>
						<OverlayTrigger
							placement="bottom"
							overlay={
								<Tooltip>Click to reveal hotkeys.</Tooltip>
							}
						>
							<label
								style={{
									display: "inline-block",
									cursor: "pointer",
									color: "#0077cc",
									bottom: "50%",
									position: "relative",
								}}
								className={labelWidth}
								id="hotkeys"
								htmlFor="hotkeys"
								onClick={handleRevealHotkey}
							>
								Hotkeys
							</label>
						</OverlayTrigger>

						<ul
							style={{
								paddingLeft: 0,
								listStylePosition: "outside",
								listStyleType: "none",
								display: hotkeyVisibility,
							}}
						>
							<li className="hotkey-item">
								<span className="code">space</span> and{" "}
								<span className="code">enter</span>: begin quiz
								/ submit question
							</li>
							<li className="hotkey-item">
								<span className="code">esc</span> and{" "}
								<span className="code">home</span>: reset quiz
								criteria / return to starting screen{" "}
							</li>
							<li className="hotkey-item">
								<span className="code">I</span>: open / close
								settings
							</li>
							<li className="hotkey-item">
								<span className="code">number 1-4</span>: select
								1st through 4th answer
							</li>
						</ul>
					</div>
				</form>
			</div>
		</Alert>
	);
}
