import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./Home"
import Dashboard from "./components/Dashboard"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const path = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Home />,
	},
	{
		path: "/user/:id",
		element: <Dashboard />,
		errorElement: <Home />,
	},
])

const root = document.getElementById("root") as HTMLBodyElement

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RouterProvider router={path} />
	</React.StrictMode>,
)
