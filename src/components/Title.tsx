import React from "react"
import styled from "styled-components"
/**
 * Interface to define props type
 */
interface TextProps {
	text: string
	textColor?: string
	subText?: string
}
/**
 * Function to render a title with optional subtitle
 * @param {Object} props - Component props
 * @param {String} props.text - The main title text to display
 * @param {String} [props.textColor] - Color to apply to a specific part of the title
 * @param {String} [props.subText] - Optional subtitle text displayed below the title
 * @returns {JSX.Element}
 */
export default function Title({ text, textColor, subText }: TextProps): JSX.Element {
	return (
		<FlexTitle>
			<h1>
				{text}
				<div className="color">{textColor}</div>
			</h1>
			{subText ? <SubText>{subText}</SubText> : null}
		</FlexTitle>
	)
}

const FlexTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 70px;

	h1 {
		display: flex;
		flex-direction: row;
		gap: 10px;
		flex-wrap: wrap;
		color: black;
		font-family: Roboto, sans-serif;
		font-style: bold;
		font-weight: 550;
		font-size: 48px;
	}

	.color {
		color: #ff0101;
	}
`

const SubText = styled.h2`
	display: flex;
	margin-left: 2px;
	flex-direction: row;
	color: black;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	font-size: 19px;
`
