import { useEffect, useState } from "react";
import formatData from "../utils/formatData";

export default function useData(userID: number) {
	const api_path = "http://localhost:3000/user";
	let tmpData: any[] = [];

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState<object>({});

	useEffect(() => {
		(async () => {
			setLoading(true);
			setError(false);

			try {
				const userR: Promise<Response> = fetch(`${api_path}/${userID}`);
				const activityR: Promise<Response> = fetch(`${api_path}/${userID}/activity`);
				const avgSessionR: Promise<Response> = fetch(`${api_path}/${userID}/average-sessions`);
				const performanceR: Promise<Response> = fetch(`${api_path}/${userID}/performance`);
				const promises: Promise<Response>[] = [userR, activityR, avgSessionR, performanceR];

				const responses: Response[] = await Promise.all(promises);

				for (let response of responses) {
					if (!response.ok) {
						setError(true);
					}
					else {
						const json: JSON = await response.json();
						tmpData.push((json['data']));
					}
				}

				const finalData: object = new formatData(tmpData);
				setData(finalData);
			}
			catch {
				setError(true);
			}
			finally {
				setLoading(false);
			}
		})();

	}, [userID])

	return [data,
		loading,
		error
	] as const;
}

