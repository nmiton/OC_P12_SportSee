import { useEffect, useState } from "react"
import formatData from "../utils/formatData"
import fetchUserData from "../services/fetchUserData"
import { mockUserData } from "../services/mockUserData"
/**
 * Function to get data for an user
 * @param {Number} userID - String to define user ID
 * @returns
 */
export default function getUserData(userID: number) {
	let tmpData: any[] = []

	const MOCK_DATA = import.meta.env.VITE_APP_USE_MOCK === "true"

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [data, setData] = useState<object>({})

	useEffect(() => {
		(async () => {
			setLoading(true)
			setError(null)

			try {
				const responses: Response[] = MOCK_DATA ? await mockUserData(userID) : await fetchUserData(userID)

				for (let response of responses) {
					if (!response.ok) {
						throw new Error(`Error fetching data...`)
					} else {
						const json: JSON = await response.json()
						tmpData.push(json["data"])
					}
				}

				const finalData: object = new formatData(tmpData)
				setData(finalData)
			} catch (e) {
				setError(e)
			} finally {
				setLoading(false)
			}
		})()
	}, [userID])

	return [data, loading, error] as const
}
