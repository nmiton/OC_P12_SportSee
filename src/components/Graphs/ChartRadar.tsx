import React from "react"
import styled from "styled-components"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"
/**
 * Function to render ChartRadar
 * @param {Array} data - Array of data to show
 * @returns {JSX.Element}
 */
export default function ChartRadar({ data }: { data: Array<object> }): JSX.Element {
	const polarGrid: boolean = false

	return (
		<CustomRadar>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="66%" data={data}>
					<PolarGrid radialLines={polarGrid} />
					<PolarAngleAxis dataKey="kind" dy={4} tickSize={15} />

					<Radar name="performance" dataKey="value" fill="red" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</CustomRadar>
	)
}

const CustomRadar = styled.div`
	display: flex;
	background: #020203;
	border-radius: 5px;
	height: 263px;
	min-width: 240px;
	opacity: 0.9;

	tspan,
	.tspan {
		text-align: left;
		position: absolute;
		margin-top: 10%;
		font-family: Roboto, sans-serif;
		font-size: 12px;
		font-weight: 500;
		fill: #ffffff;
	}
`
