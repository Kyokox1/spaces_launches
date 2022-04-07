import React, { useState, useEffect } from "react";
import {
	fetchAllLaunches,
	fetchLaunchesByFlightNumber
} from "./services/launches_fetch";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const App = () => {
	const [launches, setLaunches] = useState([]);
	useEffect(() => {
		fetchAllLaunches().then((data) => setLaunches(data));
	}, []);

	return (
		<>
			{/* <img src={logo} ></img> */}
			<Heading as="h1" fontSize="3xl">
				Spaces Launches
			</Heading>
			{!launches.length == 0 ? (
				<section>
					{launches.map((launch) => (
						<Box
							key={launch.flight_number}
							bg="gray.100"
							p="4"
							m="4"
							borderRadius="lg"
						>
							<Flex display="flex">
								<Text fontSize="2xl">
									Mission <strong> {launch.mission_name}</strong> (
									{launch.launch_year})
								</Text>
							</Flex>
              {launch.mission_name} ({launch.launch_year})
						</Box>
					))}
				</section>
			) : (
				<h3>cargando...</h3>
			)}
		</>
	);
};
