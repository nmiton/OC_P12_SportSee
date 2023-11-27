import React from "react";
import { GlobalStyles } from "./GlobalStyles";

import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Siderbar";
import Navigation from "./components/Navigation/Navigation";

export default function Home() {

	return (
		<>
			<GlobalStyles />
			<Header />
				<Navigation/>
			<SideBar />
		</>
	);
};


