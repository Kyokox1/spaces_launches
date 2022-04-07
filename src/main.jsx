import { StrictMode } from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";

render(
	<StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</StrictMode>,
	document.getElementById("root")
);
