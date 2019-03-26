import React from 'react'
import './SongInfo.css'

import next from '../../assets/Next.svg'
import pause from '../../assets/Pause.svg'
import previous from '../../assets/Previous.svg'

const SongInfo = () => {
	const buttonArray = [previous, pause, next]

	return (
		<div className="song-info">
			<div className="song-info-bg" />
			<div className="song-info-container-top">
				<div className="song-info-flex">
					<img
						className="cover-img"
						src="https://i1.sndcdn.com/artworks-000089194882-2f0cp4-t500x500.jpg"
					/>
					<img
						className="cover-img-blur"
						src="https://i1.sndcdn.com/artworks-000089194882-2f0cp4-t500x500.jpg"
					/>
				</div>

				<div className="info">
					<p>Test title titletitlet itletitle title</p>
					<p>Singer</p>
				</div>
			</div>
			<div className="song-info-container-bottom">
				<div className="buttons">
					{buttonArray.map(button => (
						<img key={button} src={button} className="buttons-img" />
					))}
				</div>
				<div>timeline</div>
			</div>
		</div>
	)
}

export default SongInfo
