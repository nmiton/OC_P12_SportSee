import React from "react";
import styled from "styled-components";

interface CardProps {
	type: "Calories" | "Proteines" | "Glucides" | "Lipides";
	weight: number;
}

export default function CardStat({ type, weight }: CardProps) {

	let src: string = "";

	switch (type) {
		case 'Calories':
			src = "assets/icon/calories-icon.svg";
			break;
		case 'Proteines':
			src = "assets/icon/protein-icon.svg";
			break;
		case 'Glucides':
			src = "assets/icon/carbs-icon.svg";
			break;
		case 'Lipides':
			src = "assets/icon/fat-icon.svg";
			break;
	}

	return (
		<Stat>
			<div className="flex">
				<img src={src}></img>
				<div className="flex-text">
					<h3>
						{weight}
						{type === 'Calories' ? "kCal" : "g"}
					</h3>
					<h4>{type}</h4>
				</div>
			</div>
		</Stat>
	)
}

const Stat = styled.div`
	height: 124px;
	min-width: 258px;
	width: 100%; 
	border-radius: 5px;
	padding: 32px;
	background-color: #FBFBFB; 
		
	img {
		height: 60px; 
		width: 60px; 	 
	}

	.flex { 
		display flex;
		flex-direction: row; 
		gap: 24px; 
	}
	
	.flex-text { 
		display: flex; 
		flex-direction: column; 
		justify-content: space-evenly;
		font-family: Roboto, sans-serif;
		color: black;

		h3 {
			font-size: 20px; 
			font-weight: 700;
		}

		h4 {
			color: #74798C;
			font-size: 14px; 
			font-weight: 600;
		}
	}
`;
