/**
 * Utility class to format data retrieved from API responses.
 */
export default class formatData {
	/**
	 * @param {Object} obj - Objects which are the response bodies from API requests.
	 * @return {Object} A single data object with all properties formatted.
	 */
	constructor(obj: any) {
		// Join objects
		obj = this.joinObj(obj)
		// Format the 'kind' property
		obj = this.formatKind(obj)

		// Sometimes, todayScore doesn't exist but is found in the 'score' property, so we assign a new property 'todayScore'
		if (obj["score"]) {
			obj["todayScore"] = obj["score"]
			delete obj.score
		}

		// Format calories number
		if (obj["keyData"]["calorieCount"]) obj["keyData"]["calorieCount"] = this.formatCalories(obj["keyData"]["calorieCount"])

		return obj
	}

	/**
	 * Formats the 'kind' property of the object by replacing the numeric values with their French equivalents.
	 * @param {Object} obj - Object with a 'kind' property.
	 * @returns A new object with the 'kind' property replaced by its corresponding French name.
	 */
	formatKind(obj: object): object {
		obj["data"].map((value) => {
			if (!isNaN(value["kind"])) {
				if (obj["kind"][value["kind"]]) {
					value["kind"] = obj["kind"][value["kind"]]
				}
			}

			switch (value["kind"]) {
				case "cardio":
					value["kind"] = "Cardio"
					break
				case "energy":
					value["kind"] = "Énergie"
					break
				case "endurance":
					value["kind"] = "Endurance"
					break
				case "strength":
					value["kind"] = "Force"
					break
				case "speed":
					value["kind"] = "Vitesse"
					break
				case "intensity":
					value["kind"] = "Intensité"
					break
			}
		})
		if (obj.hasOwnProperty("kind")) {
			delete obj["kind"]
		}
		return obj
	}

	/**
	 * Merges objects from the array into a single object while avoiding duplicate properties.
	 * @param {Array} obj - Array of objects.
	 * @returns A new object that merges all data and avoids duplicate properties.
	 */
	joinObj(obj: any): object {
		obj = obj.reduce((acc, obj) => {
			Object.entries(obj).forEach(([key, value]) => {
				if (acc[key] === undefined) {
					acc[key] = value
				}

				/* Avoid duplicate 'sessions' property */
				if (key === "sessions" && typeof value === "object" && value) {
					const isInteger = value[0].day
					if (!isNaN(isInteger)) {
						acc["sessionsLength"] = value
					} else {
						acc["sessionsWeight"] = value
					}
				}
			})
			return acc
		})
		if (obj["sessionsLength"] && obj["sessionsWeight"]) {
			delete obj.sessions
		}
		return obj
	}

	/**
	 * Function to format Calories weight with a comma after first numeral
	 * @param {Number} weight - Calories weight
	 * @returns {String} Weight to string format with a comma
	 * @example formatCalories(1930) -> return "1,930".
	 */
	formatCalories(weight: number): string {
		const numAsString = weight.toString()
		if (numAsString.indexOf(",") === -1) {
			return numAsString.charAt(0) + "," + numAsString.slice(1, numAsString.length)
		} else {
			return numAsString
		}
	}
}
