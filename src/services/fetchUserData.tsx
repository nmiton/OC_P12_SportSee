/**
 * Function to fetch user data
 * @param {Number} userID - User ID
 * @returns {Promise}
 */
export default async function fetchUserData(userID: number): Promise<Response[]> {
	console.log("fetchUserData")
	const api_path = "http://localhost:3000/user"

	const userR: Promise<Response> = fetch(`${api_path}/${userID}`)
	const activityR: Promise<Response> = fetch(`${api_path}/${userID}/activity`)
	const avgSessionR: Promise<Response> = fetch(`${api_path}/${userID}/average-sessions`)
	const performanceR: Promise<Response> = fetch(`${api_path}/${userID}/performance`)
	const promises: Promise<Response>[] = [userR, activityR, avgSessionR, performanceR]

	return await Promise.all(promises)
}
