import React from "react"
import { GlobalStyles } from "./GlobalStyles"

import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Sidebar from "./components/siderbar"
/**
 * Function to render home page
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Navigation />
			<Sidebar />
		</>
	)
}
