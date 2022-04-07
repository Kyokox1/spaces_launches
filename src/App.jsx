import React, { useState, useEffect } from "react";
import { fetchAllLaunches, fetchLaunchesByFlightNumber } from "./services/launches_fetch";
import { Box, Flex, Heading, Spacer, Tag, Text } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import dayjs from 'dayjs'
// import "dayjs/locale/es" //*Por si quieren las fechas en español

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
							<Flex>
								<Text fontSize="2xl">
									Mission <strong> {launch.mission_name}</strong> (
									{launch.launch_year})
								</Text>
								<Spacer />
								<Tag
									colorScheme={
										launch.launch_success ? "green" : "red"
									}
									p="4"
								>
									{launch.launch_success ? "Sucess" : "Failure"}
								</Tag>
							</Flex>
							<Flex align="center" py="2">
								<FaCalendarAlt />
								<Text fontSize="sm" ml={2}>
									{dayjs(launch.launch_date_locale).format(
										"DD MMMM, YYYY"
									)}
									{/* .locale("es") */}
								</Text>
							</Flex>
						</Box>
					))}
				</section>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
};
