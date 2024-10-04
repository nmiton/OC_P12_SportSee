import React from "react"
import styled from "styled-components"
/**
 * Function to render sidebar
 * @returns {JSX.Element}
 */
export default function Sidebar(): JSX.Element {
	return (
		<SidebarSportSee>
			<ContainerIcon>
				<img src="../public/assets/img/mediatation.svg"></img>
			</ContainerIcon>
			<ContainerIcon>
				<img src="../public/assets/img/swim.svg"></img>
			</ContainerIcon>
			<ContainerIcon>
				<img src="../public/assets/img/bike.svg"></img>
			</ContainerIcon>
			<ContainerIcon>
				<img src="../public/assets/img/bodybuilding.svg"></img>
			</ContainerIcon>
			<Copyright>Copyright, SportSee 2020</Copyright>
		</SidebarSportSee>
	)
}

const SidebarSportSee = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1;
	padding-top: 90px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	justify-content: center;
	height: 100%;
	background-color: #020203;
	width: 117px;
	@media screen and (max-width: 1000px) {
		display: none;
	}
`

const ContainerIcon = styled.div`
	display: flex;
	justify-content: center;
	min-width: 64px;
	min-height: 64px;
	border-radius: 6px;
	background-color: #ffffff;
	cursor: pointer;

	img {
		max-width: 32px;
		max-width: 32px;
	}
`

const Copyright = styled.div`
	position: absolute;
	z-index: -2;
	bottom: 100px;
	width: 150px;
	transform: rotate(270deg);
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	color: #ffffff;
`
