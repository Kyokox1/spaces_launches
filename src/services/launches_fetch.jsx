const API = "https://api.spacexdata.com/v3/launches";

export const fetchAllLaunches = async () => {
	try {
		const response = await fetch(API);
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchLaunchesByFlightNumber = async (flightNumber) => {
	try {
		const responde = await fetch(`${API}/${flightNumber}`);
		const data = await responde.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
