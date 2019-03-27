import React, { useContext } from 'react'

import Context from '../../data/PlaylistContext'

import next from '../../assets/Next.svg'
import pause from '../../assets/Pause.svg'
import play from '../../assets/Play.svg'
import previous from '../../assets/Previous.svg'

const Controls = () => {
	const { isPlay, changeControlStatus } = useContext(Context)

	const buttonStatus = isPlay ? pause : play

	const buttonArray = [previous, buttonStatus, next]

	return (
		<div className="song-info-container-bottom">
			<div className="buttons">
				{buttonArray.map((button) => (
					<img
						key={button}
						alt={button}
						src={button}
						className="buttons-img"
						onClick={
							button === play || button === pause
								? () => changeControlStatus(isPlay === true ? false : true)
								: undefined
						}
					/>
				))}
			</div>
			<div className="song-timeline">
				<div className="start-time">0:00</div>
				<div className="bar">
					<div className="timeline-pointer" />
					<div className="timeline" />
				</div>
				<div className="end-time">1:28</div>
			</div>
		</div>
	)
}

export default Controls
