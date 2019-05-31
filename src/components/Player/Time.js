import React from 'react'

import styled from 'styled-components'

const StyledTime = styled.div`
	align-items: center;
	color: ${props => props.theme.color.primary};
	display: flex;
	font-size: ${props => props.theme.font.size.small};
	margin-bottom: 1px;
	opacity: 0.7;
	${props => `margin-${props.margin}`}: 15px;
`

const Time = ({ margin, songTime }) => {
	const SongTimeComponent = ({ songTime: { currentTime, duration } }) => {
		const getTime = time =>
			!isNaN(time) && Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

		if (margin === 'right') return currentTime > 0 ? getTime(currentTime) : '0:00'
		return duration > 0 ? getTime(duration) : '0:00'
	}

	return (
		<StyledTime margin={margin}>
			<SongTimeComponent songTime={songTime} />
		</StyledTime>
	)
}

export default Time
