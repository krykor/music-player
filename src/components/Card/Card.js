import React from 'react'
import './Card.css'

import SongInfo from '../SongInfo/SongInfo'
import Playlist from '../Playlist/Playlist'

const Card = () => {
	return (
		<div className="card">
			<SongInfo />
			<Playlist />
		</div>
	)
}

export default Card
