import React from 'react';
import logo from "./logo.svg";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate()

	const handleClickNavigateHome = () => {
		navigate("/")
	}

	return (
		<HeaderSportSee>
			<nav>
				<ul>
					<li><img alt="logo" src={logo} /></li>
					<li onClick={handleClickNavigateHome}>Accueil</li>
					<li>Profil</li>
					<li>Réglage</li>
					<li>Communauté</li>
				</ul>
			</nav>
		</HeaderSportSee>
	);
}

const HeaderSportSee = styled.header`
	z-index: 2;
	position: fixed;
	top: 0;
	width: 100%;
	background-color: #020203;
	color: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	
	ul {
		display:flex;
		justify-content:space-between;
		@media screen and (max-width: 1000px) { justify-content: center; gap: 10px;}
	}

	@media screen and (max-width: 1000px) { img { display: none; } }

	li {
		display: flex;
		align-items: center;
		min-height: 91px;
		font-family: Roboto, sans-serif; 
		font-weight: 500;
		font-size: 24px;
		cursor: pointer;

		&:hover {
			cursor : pointer;
		}

		@media screen and (max-width: 1000px) { font-size: 16px; }

		&:first-child {
			padding-left: 28px;
			@media screen and (max-width: 1000px) { padding-left: 0px;}
		}
		
		&:last-child { 
			padding-right: 87px;
			@media screen and (max-width: 1000px) { padding-right: 0px;}
		}
	}
`;


