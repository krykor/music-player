import React from 'react'
import './SongInfo.css'

import next from '../../assets/Next.svg'
import pause from '../../assets/Pause.svg'
import previous from '../../assets/Previous.svg'

const SongInfo = () => {
	return (
		<div className="song-info">
			<div className="song-info-bg" />
			<img
				className="cover-img"
				src="https://i1.sndcdn.com/artworks-000089194882-2f0cp4-t500x500.jpg"
			/>
			<img
				className="cover-img-blur"
				src="https://i1.sndcdn.com/artworks-000089194882-2f0cp4-t500x500.jpg"
			/>
			<div className="info">
				<p>Test title</p>
				<p>Singer</p>
			</div>
			<div className="buttons">
				<img src={previous} />
				<img src={pause} />
				<img src={next} />
			</div>
		</div>
	)
}

export default SongInfo
