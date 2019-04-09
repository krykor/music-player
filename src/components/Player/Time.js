import React, { useContext } from 'react'

import Context from '../../data/PlaylistContext'

const Controls = ({ showTime }) => {
	const { songTime } = useContext(Context)

	const getTime = (time) =>
		!isNaN(time) && Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

	return (
		<div className={showTime}>
			{showTime === 'start-time'
				? songTime.currentTime > 0
					? getTime(songTime.currentTime)
					: '0:00'
				: songTime.duration > 0
				? getTime(songTime.duration)
				: '0:00'}
		</div>
	)
}

export default Controls
