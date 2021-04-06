import React, { Component, useEffect, useState } from "react";
import {
	Button,
	ProgressBar,
	OverlayTrigger,
	Tooltip,
	Alert,
	Navbar,
} from "react-bootstrap";
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
		[labelWidth, setLabelWidth] = useState("medium-width-setting-label");

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
						overlay={<Tooltip>Set the font size</Tooltip>}
					>
						<label
							className={labelWidth}
							id="setting-label"
							htmlFor="font-size"
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
								Set whether to show a notification for whether a
								question was answered correctly
							</Tooltip>
						}
					>
						<label
							className={labelWidth}
							id="setting-label"
							htmlFor="notify"
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
					>
						<option value={true}>On</option>
						<option value={false}>Off</option>
					</select>
					<br />
					<div
						id="timeout-setting"
						style={{ display: timeoutSettingVisibility }}
					>
						<OverlayTrigger
							placement="bottom"
							overlay={
								<Tooltip>
									Set the amount of time the notification is
									visible for (unit in seconds)
								</Tooltip>
							}
						>
							<label
								className={labelWidth}
								id="setting-label"
								htmlFor="notify-timeout"
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
						/>
						<br />
					</div>

					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>
								Set whether to have a limited time to answer
								each question
							</Tooltip>
						}
					>
						<label
							className={labelWidth}
							id="setting-label"
							htmlFor="countdown"
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
					>
						<option value={true}>On</option>
						<option value={false}>Off</option>
					</select>
					<br />
					<div
						id="countdown-setting"
						style={{ display: countDownSettingVisibility }}
					>
						<OverlayTrigger
							placement="bottom"
							overlay={
								<Tooltip>
									Set the amount of time allotted for
									answering each question (unit in seconds)
								</Tooltip>
							}
						>
							<label
								className={labelWidth}
								id="setting-label"
								htmlFor="countdown-timeout"
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
						/>
						<br />
					</div>
					<OverlayTrigger
						placement="bottom"
						overlay={
							<Tooltip>
								Set whether to display the footer containing
								copyright information
							</Tooltip>
						}
					>
						<label
							className={labelWidth}
							id="setting-label"
							htmlFor="disclaimer-visibility"
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
					>
						<option value={"inline"}>On</option>
						<option value={"none"}>Off</option>
					</select>
					<br />
				</form>
			</div>
		</Alert>
	);
}
