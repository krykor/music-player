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
			<div>timeline</div>
		</div>
	)
}

export default Controls
