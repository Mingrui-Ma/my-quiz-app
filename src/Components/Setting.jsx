import React, { Component, useState } from "react";
import { Collapse } from "react-collapse";
import { Button } from "react-bootstrap";
import { BsFillPauseFill } from "react-icons/bs";

export default function Setting() {
	const [collapse, setCollapse] = useState(false);

	function handleCollapse() {
		console.log("Collapse is ", collapse);
		setCollapse(!collapse);
	}

	// return (
	// 	<div>
	// 		<Button variant="secondary" onClick={handleCollapse}>
	// 			Click to collapse/uncollapse
	// 		</Button>
	// 		<Collapse isOpened={collapse}>
	// 			<div>hell o here</div>
	// 		</Collapse>
	// 	</div>
	// );
}
