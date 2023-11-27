import React from "react";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

import { GlobalStyles } from "../../GlobalStyles";
import Header from "../Header/Header";
import Title from "../Title/Title";
import ChartBar from "../ChartBar/CharBar";
import ChartLine from "../ChartLine/ChartLine";
import ChartRadar from "../ChartRadar/ChartRadar";
import ChartScore from "../ChartScore/ChartScore";
import CardStat from "../CardStat/Stats";
import Sidebar from "../Sidebar/Siderbar";

export default function Dashboard() {
    const { id } = useParams();
	const userID: number = id ? parseInt(id) : 0;

    const [data, loading, error] = useData(userID);
    
    return (
		<>
			<GlobalStyles />
			<Header />
			{loading ?
				<div className="loading"></div>
				: error ? <div className="error">Erreur lors de la recherche des données...</div> :
					<div className="main-container">
						<Title text="Bonjour" textColor={data["userInfos"]['firstName']} subText={"Félicitation ! Vous avez explosé vos objectifs hier 👏"} />

						<div className="home-container">
							<div className="left-container">
								<ChartBar data={data["sessionsWeight"]} />
								<div className="cards-container">
									<ChartLine data={data["sessionsLength"]} />
									<ChartRadar data={data["data"]} />
									<ChartScore score={data["todayScore"]} />
								</div>
							</div>

							<div className="right-container">
								<CardStat type="Calories" weight={data['keyData']['calorieCount']} />
								<CardStat type="Proteines" weight={data['keyData']['proteinCount']} />
								<CardStat type="Glucides" weight={data['keyData']['carbohydrateCount']} />
								<CardStat type="Lipides" weight={data['keyData']['lipidCount']} />
							</div>
						</div>

					</div>}

			<Sidebar />
		</>
	);
};
