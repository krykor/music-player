import React from 'react'
import './SongInfo.css'

import { Consumer } from '../../data/PlaylistContext'

import next from '../../assets/Next.svg'
import pause from '../../assets/Pause.svg'
import previous from '../../assets/Previous.svg'

const SongInfo = () => {
	const buttonArray = [previous, pause, next]

	return (
		<Consumer>
			{data => {
				let filteredData = data.filter(item => item.title === 'Death Race For Love')[0]

				const { title, author, photo } = filteredData

				return (
					<div className="song-info ">
						<div
							className="song-info-bg2"
							/*style={{
								background: `url('${photo.url}' )bottom / cover no-repeat`
							}}*/
						/>
						<div
							className="song-info-bg"
							style={{
								background: `url('${photo.url}' )bottom / cover no-repeat`
							}}
						/>
						<div className="song-info-container-top">
							<div className="song-info-flex">
								<img className="cover-img" src={photo.url} />
								<img className="cover-img-blur" src={photo.url} />
							</div>

							<div className="info">
								<p>{title}</p>
								<p>{author}</p>
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
			}}
		</Consumer>
	)
}

export default SongInfo
