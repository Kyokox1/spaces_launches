import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Box, Button, Flex, Icon, Spacer, Tag, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
// import "dayjs/locale/es" //*Por si quieren las fechas en español

export const LaunchItem = (launch) => {
	return (
		<Box bg="gray.100" p="4" m="4" borderRadius="lg">
			<Flex>
				<Text fontSize="2xl">
					Mission <strong> {launch.mission_name}</strong> (
					{launch.launch_year})
				</Text>
				<Spacer />
				<Tag
					colorScheme={launch.launch_success ? "green" : "red"}
					p="3"
				>
					{launch.launch_success ? "Sucess" : "Failure"}
				</Tag>
			</Flex>
			<Flex align="center" py="2">
				<Icon as={FaCalendarAlt} color="gray.500" />
				<Text fontSize="sm" ml={2} color="gray.500">
					{dayjs(launch.launch_date_locale).format("DD MMMM, YYYY")}
					{/* .locale("es") */}
				</Text>
			</Flex>
			<Link to={`/launch/${launch.flight_number}`}>
				<Button colorScheme="purple" mt={2}>
					More Details
				</Button>
			</Link>
		</Box>
	);
};
