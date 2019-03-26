import React from 'react'
import './Playlist.css'

import next from '../../assets/Next.svg'
import pause from '../../assets/Pause.svg'
import previous from '../../assets/Previous.svg'

const Playlist = () => {
	return (
		<div className="playlist">
			<img src="https://i1.sndcdn.com/artworks-000089194882-2f0cp4-t500x500.jpg" />
			<div className="songData">
				<p>title</p>
				<p>Singer</p>
			</div>
		</div>
	)
}

export default Playlist
