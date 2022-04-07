import React from "react";
import { Heading } from "@chakra-ui/react";
import { LaunchItem } from "./Launch_item";

export const LauchesList = ({ launches }) => {
	// console.log(launches)
	return (
		<>
			<Heading as="h1" fontSize="2xl" align="center" mt="-12">
				SpacesX Launches
			</Heading>
			{!launches.length == 0 ? (
				<section>
					{launches.map((launch) => (
						<LaunchItem key={launch.flight_number} {...launch} />
					))}
				</section>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
};
