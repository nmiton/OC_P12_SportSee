import React from "react";
import { GlobalStyles } from "./GlobalStyles";

import Header from "./components/Header"
import Navigation from "./components/Navigation";
import Sidebar from "./components/siderbar";

export default function Home() {

	return (
		<>
			<GlobalStyles />
			<Header />
				<Navigation/>
			<Sidebar />
		</>
	);
};


