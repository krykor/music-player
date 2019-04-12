import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from '../../data/PlaylistContext'

const StyledTime = styled.div`
	font-size: 10px;
	opacity: 0.7;
	color: #26107b;
	display: flex;
	align-items: center;
	margin-bottom: 1px;
	${(props) => `margin-${props.margin}`}: 15px;
`

const Time = ({ margin }) => {
	const { songTime } = useContext(Context)

	const SongTimeComponent = ({ songTime: { currentTime, duration } }) => {
		const getTime = (time) =>
			!isNaN(time) && Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

		if (margin === 'right') return currentTime > 0 ? getTime(currentTime) : '0:00'
		return duration > 0 ? getTime(duration) : '0:00'
	}

	return (
		<StyledTime margin={margin}>
			{/*margin === 'right'
				? songTime.currentTime > 0
					? getTime(songTime.currentTime)
					: '0:00'
				: songTime.duration > 0
				? getTime(songTime.duration)
	: '0:00'*/}
			<SongTimeComponent songTime={songTime} />
		</StyledTime>
	)
}

export default Time
