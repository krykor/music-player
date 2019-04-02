import React, { useContext } from 'react'

import './Player.css'

import Context from '../../data/PlaylistContext'

import Details from './Details'
import Controls from './Controls'

const Player = () => {
	const { playlists, songId } = useContext(Context)

	let filteredData = playlists.find((item) => item.id === songId)

	return (
		<div className="song-info ">
			<div className="song-info-bg2" />
			<div
				className="song-info-bg"
				style={{
					background: `url('${filteredData.photo.url}' )bottom / cover no-repeat`
				}}
			/>
			<Details filteredData={filteredData} />
			<Controls />
		</div>
	)
}

export default Player
