import mockData from "../../public/data/data"
/**
 * Function to mock user data
 * @param {Number} userID - User ID
 * @returns {Promise}
 */
export async function mockUserData(userID: number): Promise<Response[]> {
	console.log("mockUserData")

	return new Promise((resolve) => {
		resolve([
            new Response(JSON.stringify({ data: mockData[userID].user })),
            new Response(JSON.stringify({ data: mockData[userID].activity })),
            new Response(JSON.stringify({ data: mockData[userID].averageSessions })),
            new Response(JSON.stringify({ data: mockData[userID].performance })),
        ]);
	});
}