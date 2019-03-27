import React, { useState } from 'react'
import './Card.css'

import Player from '../Player/Player'
import Playlist from '../Playlist/Playlist'

const Card = ({ initialId }) => {
	const [id, updateId] = useState(initialId)

	const changeId = (newId) => updateId(newId)

	return (
		<div className="card">
			<Player songId={id} />
			<Playlist changeId={changeId} />
		</div>
	)
}

export default Card
