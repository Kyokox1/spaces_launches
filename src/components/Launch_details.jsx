import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Flex, Spacer, Tag, Text } from "@chakra-ui/react";
import { fetchLaunchesByFlightNumber } from "../services/launches_fetch";

export const LaunchDetails = () => {
	// const params=useParams()
	const { launchId } = useParams();

	const [detailLaunch, setDetailLaunch] = useState({});

	useEffect(() => {
		fetchLaunchesByFlightNumber(launchId).then(setDetailLaunch);
	}, []);

	console.log(detailLaunch);
	return (
		<Box bg="gray.100" p="4" m="4" borderRadius="lg">
			{!detailLaunch ? (
				<h3>Loading...</h3>
			) : (
				<>
					<Flex>
						<Text fontSize="2xl">
							Mission <strong> {detailLaunch.mission_name}</strong> (
							{detailLaunch.launch_year})
						</Text>
						<Spacer />
						<Tag
							colorScheme={
								detailLaunch.launch_success ? "green" : "red"
							}
							p="3"
						>
							{detailLaunch.launch_success ? "Sucess" : "Failure"}
						</Tag>
					</Flex>
					<Box>
						<Text fontSize="lg" color="blue.600">
							Rocket:{" "}
							<Link to={`/rocket/${detailLaunch.rocket?.rocket_id}`}>
								{detailLaunch.rocket?.rocket_name}
							</Link>
						</Text>
						<Text color="blue.400" fontSize="md">
							{detailLaunch.details}
						</Text>
					</Box>
				</>
			)}
		</Box>
	);
};
