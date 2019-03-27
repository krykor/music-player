import React from 'react'
import './Player.css'

import PlaylistContext from '../../data/PlaylistContext'

import Details from './Details'
import Controls from './Controls'

const Player = ({ songId }) => {
	return (
		<div className="song-info ">
			<div className="song-info-bg2" />
			<PlaylistContext.Consumer>
				{({ playlists }) => {
					let filteredData = playlists.filter((item) => item.id === songId)[0]

					return (
						<>
							<div
								className="song-info-bg"
								style={{
									background: `url('${filteredData.photo.url}' )bottom / cover no-repeat`
								}}
							/>
							<Details filteredData={filteredData} />
							<Controls id={songId} />
						</>
					)
				}}
			</PlaylistContext.Consumer>
		</div>
	)
}

export default Player
