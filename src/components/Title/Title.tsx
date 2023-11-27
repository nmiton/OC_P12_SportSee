import React from 'react';
import styled from 'styled-components';

interface TextProps {
	text: string;
	textColor?: string;
	subText?: string;
}

export default function Title({ text, textColor, subText }: TextProps) {
	return (
		<FlexTitle>

			<h1>{text}<div className="color">{textColor}</div></h1>
			{subText ? <SubText>{subText}</SubText> : null}
		</FlexTitle>
	);
}

const FlexTitle = styled.div`
	display:flex;
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
		color: #FF0101;
	}
	`;

const SubText = styled.h2`
	display: flex;
	margin-left: 2px;
	flex-direction: row;	
	color: black;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	font-size: 19px;
`;