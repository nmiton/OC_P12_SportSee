import React from "react"
import styled from "styled-components"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
/**
 * Function to render ChartScore
 * @param {Number} score - Score number
 * @returns {JSX.Element}
 */
export default function ChartScore({ score }: { score: number }): JSX.Element {
	const data = [{ name: "Score", value: score * 100 }]

	return (
		<CustomScore>
			<div className="title">Score</div>

			<ResponsiveContainer width="100%" height="100%" id="spin">
				<PieChart>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						startAngle={70}
						endAngle={430 * score + 70}
						innerRadius={"60%"}
						outerRadius={"70%"}
						dataKey="value"
						cornerRadius={10}
					>
						<Cell stroke="" fill="red" />
					</Pie>
				</PieChart>
			</ResponsiveContainer>

			<div className="bgScore">
				<div className="percentage">{score * 100}%</div>
				<div className="message">de votre</div>
				<div className="message">objectif</div>
			</div>
		</CustomScore>
	)
}

const CustomScore = styled.div`
	position: relative;
	background: #fbfbfb;
	border-radius: 5px;
	height: 263px;
	min-width: 240px;
	opacity: 0.9;

	.title {
		position: absolute;
		margin-top: 24px;
		margin-left: 24px;
		color: black;
		font-family: Roboto, sans-serif;
		font-size: 15px;
		font-weight: 700;
	}

	.bgScore {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		position: absolute;
		content: "";

		width: 150px;
		height: 150px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		z-index: -1;
		background-color: #ffffff;

		.percentage {
			font-family: Roboto, sans-serif;
			font-size: 26px;
			font-weight: 700;
			color: black;
		}

		.message {
			font-family: Roboto, sans-serif;
			font-size: 16px;
			font-weight: 600;
			color: black;
			opacity: 0.6;
		}
	}
`
