import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export default function Navigation() {
    const navigate = useNavigate()

    const handleClickNavigate = (id: Number) => {
        navigate(`/user/${id}`)
    }

    return (
        <NavigationStyle>

        <div className="main-container">
            <h1>Bienvenue sur le site de <span className="color">SportSee</span> !</h1>
            
            <p>Projet 12 de la formation de développeur front-end d'OpenClassRoom</p>
            <p>Cette démo met en avant le tableau de bord d'un utilisateur de l'application SportSee, une startup dédiée au coaching sportif.</p>
            <p>L’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur.</p>
            <p>Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.</p>
        
            <p className="help-navigation">Vous pouvez cliquer sur un des liens ci-dessous afin de visualiser le tableau de bord d'un utilisateur.</p>    
            <ul className="navigation">
                <li onClick={()=>handleClickNavigate(12)}>Je veux être l'utilisateur 12</li>
                <li onClick={() => handleClickNavigate(18)}>Je veux être l'utilisateur 18</li>
            </ul>
        </div>
        </NavigationStyle>
    )
};

const NavigationStyle = styled.div`
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
		font-size: 42px;
        margin-bottom: 2rem;
	}
    
    .color {
		color: #FF0101;
	}

    p {
        margin-top: 1rem; 
        font-size: 18px;
        font-family: Roboto, sans-serif;
    }

    .navigation {
        list-style : none;
        margin: 2rem; 
        font-size: 18px;
        font-family: Roboto, sans-serif;
        display : flex;
        flex-direction: column;
        gap: 0.5rem;

        @media screen and (min-width: 500px){
            margin : 2rem auto;
            flex-direction: row;
            max-width: 75%; 
        }

        li {
            border : 1px solid black;
            border-radius : 5px;
            width: fit-content;
            padding: 0.25rem;
            margin: auto;

            &:hover {
                cursor: pointer;
                background-color: #FBFBFB; 
            }
        }
    }
`;
