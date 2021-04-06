import React, { useState } from "react";
import Disclaimer from "./Disclaimer";
import Setting from "./Setting";
import { BsGear } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import { Button, OverlayTrigger, Tooltip, Navbar } from "react-bootstrap";

//this top banner includes the home button
export default function TopBanner(props) {
	const { iconScale, sizeOfFont,setQuizURL,} = props;

    const [showSetting, setShowSetting] = useState(false);

    function handleSetting() {
		setShowSetting(!showSetting);
	}
	function handleHome() {
		setQuizURL("");
	}
    
	return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
                width={`${40*iconScale}`}
                height={`${27*iconScale}`}
                className="d-inline-block align-top"
            />{" "}
            <span onClick={handleHome}>My-Quiz-App</span>
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
                    size={`${40*iconScale}`}
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
                    size={`${40*iconScale}`}
                    color="white"
                />
            </OverlayTrigger>
        </div>
    </Navbar>
	);
}
