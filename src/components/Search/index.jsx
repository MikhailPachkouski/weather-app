import React, { useState } from 'react';
import cl from './Search.module.scss';

const Search = ({ updateWeatherData }) => {
	const handleSubmit = event => {
		event.preventDefault();
		if (event.target[0].value.trim()) {
			updateWeatherData(event.target[0].value);
		}

		event.target[0].value = '';
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' className={cl.search__input} />
				<button type='submit' className={cl.search__button}>
					<img src='/img/search_logo.svg' alt='search' />
				</button>
			</form>
		</div>
	);
};

export default Search;
