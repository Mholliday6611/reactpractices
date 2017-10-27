import React from 'react';
import './list.css';
import Card from './card'

export default function List(){
	return (
			<div className='list'>
				<h3>Example List</h3>
				<Card />
				<Card />
				<Card />

			</div>
		)
}