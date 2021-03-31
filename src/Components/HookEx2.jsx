import React, { useEffect, useState } from "react";
import Question from "./Question";
import axios from "axios";

export default function HookEx2(props) {
    const [test, setTest] = useState(0);
	return (
		<div>
			<p>{props.val.toString()}</p>
		</div>
	);
}