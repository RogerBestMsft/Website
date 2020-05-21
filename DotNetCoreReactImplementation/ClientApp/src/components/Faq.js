import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Faq = () => {
	return (
		<div>
			<h1>FAQ goes here!</h1>
			<h1>
				Visit the map visualization <Link to="/map">here</Link>
			</h1>
		</div>
	);
}
