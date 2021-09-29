import React from 'react';
import {useParams } from "react-router-dom";
import '../index.css';

import GenreData from './GenreData';
import GenreGames from './GenreGames';

function GenreMain(){
	
	const { id } = useParams();
	
	return (
		<div className = "page-background">
			<GenreData genreID = {id}/>
			<GenreGames genreID = {id}/>
		</div>
	);
}

// ========================================
/*
Ο φάκελος που περιέχει όλα τα components που εμφανίζονται στην αρχική σελίδα της εφαρμογής. Η αρχική σελίδα της εφαρμογής φέρει μια γρήγορη πρώτη ματιά για τον σκοπό της, δηλαδή τι μπορεί να βρει ένας επισκέπτης σ’ αυτήν την εφαρμογή. Γι’ αυτό, πρέπει με σύντομο τρόπο να αποτυπώσει τις βασικότερες λειτουργίες της, και να επιτρέψει τον χρήστη να την εξερευνήσει περαιτέρω.
*/

export default GenreMain;