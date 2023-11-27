/**
 * Classe utilitaire pour formater les données récupérées des réponses API.
 */
export default class formatData {
	/**
	 * @param obj Un tableau d'objets qui sont les réponses du corps des requêtes API.
	 * @return Un objet de données composé d'un seul objet avec toutes les propriétés formatées.
	 */
	constructor(obj: any) {
		// Joindre les objets et formater la propriété 'kind'
		obj = this.joinObj(obj);
		obj = this.formatKind(obj);

		/* Parfois, todayScore n'existe pas mais existe dans la propriété score, nous attribuons donc une nouvelle propriété todayScore. */
		if (obj['score']) { obj['todayScore'] = obj['score']; delete obj.score; }

		// Formater le nombre de calories
		if (obj['keyData']['calorieCount']) {
			obj['keyData']['calorieCount'] = this.formatCalories(obj['keyData']['calorieCount']);
		}

		return obj;
	}

	/**
	 * Formate la propriété 'kind' de l'objet en remplaçant les valeurs numériques par leurs équivalents en français.
	 * @param obj Un seul objet avec une propriété 'kind'.
	 * @returns Un nouvel objet avec la propriété 'kind' remplacée par son nom français correspondant.
	 */
	formatKind(obj: object): object {
		obj['data'].map(value => {

		if (!isNaN(value['kind'])) {
			if (obj['kind'][value['kind']]) {
				value['kind'] = obj['kind'][value['kind']];
			}
		}

		switch (value['kind']) {
			case "cardio":
				value['kind'] = "Cardio";
				break;
			case "energy":
				value['kind'] = "Énergie";
				break;
			case "endurance":
				value['kind'] = "Endurance";
				break;
			case "strength":
				value['kind'] = "Force";
				break;
			case "speed":
				value['kind'] = "Vitesse";
				break;
			case "intensity":
				value['kind'] = "Intensité";
				break;
		}

		});
		if (obj.hasOwnProperty('kind')) { delete obj['kind']; }
		return obj;
	}

	/**
	 * Fusionne les objets du tableau en un seul objet tout en évitant les propriétés en double.
	 * @param obj Un tableau d'objets.
	 * @returns Un nouvel objet qui fusionne toutes les données et évite les propriétés en double.
	 */
	joinObj(obj: any): object {
		obj = obj.reduce((acc, obj) => {
			Object.entries(obj).forEach(([key, value]) => {
				if (acc[key] === undefined) {
					acc[key] = value;
				}

				/* Éviter la propriété en double 'sessions' */
				if (key === "sessions" && typeof value === "object" && value) {
					const isInteger = value[0].day;
					if (!isNaN(isInteger)) {
						acc["sessionsLength"] = value;
					}
					else {
						acc["sessionsWeight"] = value;
					}
				}
			});
			return acc;
		});
		if (obj['sessionsLength'] && obj['sessionsWeight']) { delete obj.sessions; }
		return obj;
	}

	/**
	* Formate le poids des calories en ajoutant une virgule après le premier chiffre.
	* @param weight Le poids des calories en tant que nombre.
	* @example formatCalories(1930) -> retourne "1,930".
	* @returns Le poids sous forme de chaîne de caractères avec une virgule après le premier chiffre.
	*/
	formatCalories(weight: number): string {
		const numAsString = weight.toString();
		if (numAsString.indexOf(",") === -1) {
			return numAsString.charAt(0) + "," + numAsString.slice(1, numAsString.length);
		} else {
			return numAsString;
		}
	}
}
