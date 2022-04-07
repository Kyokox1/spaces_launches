import React, { useState, useEffect } from "react";
import logo from "./assets/SpaceX-Logo.png";
import {
	fetchAllLaunches,
	fetchLaunchesByFlightNumber
} from "./services/launches_fetch";
import { Image } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import { LauchesList } from "./components/Lauches_list";
import { LaunchDetails } from "./components/Launch_details";
import { RocketDetails } from "./components/Rocket_details";

export const App = () => {
	const [launches, setLaunches] = useState([]);
	useEffect(() => {
		fetchAllLaunches().then((data) => setLaunches(data));
	}, []);

	return (
		<>
			<Link to="/">
				<Image src={logo} width={300} mt="-12" />
			</Link>
			<Routes>
				<Route
					path="/"
					element={<LauchesList launches={launches} />}
				/>
				<Route path="/launch/:launchId" element={<LaunchDetails />} />
				<Route path="/rocket/:rocketId" element={<RocketDetails />} />
			</Routes>
		</>
	);
};
