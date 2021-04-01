import React, { Component, useState } from "react";
import {
	Button,
	ProgressBar,
	OverlayTrigger,
	Tooltip,
	Alert,
	Navbar,
} from "react-bootstrap";

export default function Setting(props) {
	const {
		showSetting,
		sizeOfFont,
		handleFontChange,
		enableAlert,
		handleAlertChange,
		timeoutSettingVisibility,
		alertTimeout,
		handleAlertTimeoutChange,
	} = props;

	return (
		<Alert
			show={showSetting}
			variant="dark"
			style={{ fontSize: sizeOfFont }}
		>
			<h4>Settings</h4>
			<form>
				<OverlayTrigger
					placement="bottom"
					overlay={
						<Tooltip>
							Change the font sizes as well as the sizes of some
							elements.
						</Tooltip>
					}
				>
					<label htmlFor="font-size">Font size</label>
				</OverlayTrigger>
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
				<OverlayTrigger
					placement="bottom"
					overlay={
						<Tooltip>
							After submitting a question, show a notification for
							whether you answered the question correctly.
						</Tooltip>
					}
				>
					<label htmlFor="notify">Notify after submitting</label>
				</OverlayTrigger>
				<select
					name="notify"
					value={enableAlert}
					onChange={handleAlertChange}
				>
					<option value={true}>Yes</option>
					<option value={false}>No</option>
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
								Change the amount of time the notification is
								visible for. (Unit in seconds)
							</Tooltip>
						}
					>
						<label htmlFor="notify-timeout">
							Notification timeout
						</label>
					</OverlayTrigger>
					<input
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
			</form>
		</Alert>
	);
}
