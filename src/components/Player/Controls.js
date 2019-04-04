import React, { useContext, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'

import Context from '../../data/PlaylistContext'

import Audio from './Audio'

import SVGIcon from '../../assets/svgIcons'
import PlaylistContext from '../../data/PlaylistContext'

/*className="song-timeline">
				<div className="start-time">{songTime.currentTime}</div>
				<div className="bar">
					<div className="timeline-pointer" />
					<div className="timeline" />
				</div>
				<div className="end-time"></div>*/

const Controls = () => {
	const {
		isPlay,
		changeControlStatus,
		songIndex,
		controlSong,
		songTime,
		animationTime
	} = useContext(Context)

	useEffect(() => {
		const TimelinePointer = styled.div`
		${(props) =>
			props.play &&
			css`
				animation: ${progress} ${animationTime}s linear infinite;
			`}

		animation: ${progress} ${animationTime}s linear infinite;
	`
	}, [animationTime])

	const SongTimeline = styled.div`
		width: 61%;
		max-width: 300px;
		height: 16px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	`

	const Bar = styled.div`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		cursor: pointer;
	`

	const progress = keyframes`
	from {
		margin-left: 0px
	}

	to {
		margin-left: 180px;
	}
`
	const TimelinePointer = styled.div`
		position: absolute;
		width: 7px;
		height: 7px;
		background-color: rgba(38, 16, 123);
		border-radius: 50%;
		${(props) => {
			props.play &&
				css`
					animation: ${progress} ${animationTime}s linear infinite;
				` &&
				console.log('paused')
		}};
	`

	const Timeline = styled.div`
		max-width: 192px;
		width: 100%;
		height: 3px;
		background-color: rgb(55, 32, 135, 0.2);
		border-radius: 2px;
	`

	/*animation: ${progress} s linear infinite;
	${(props) =>
			props.play &&
			css`
				transition: ${animationTime}s;
				margin-left: 50% !important;
			`}*/

	const buttonStatus = isPlay ? 'pause' : 'play'

	const buttonArray = ['previous', buttonStatus, 'next']

	return (
		<div className="song-info-container-bottom">
			<Audio />
			<div className="buttons">
				{buttonArray.map((button) => (
					<SVGIcon
						width={100}
						key={button}
						alt={button}
						name={button}
						className="buttons-img"
						onClick={
							button === 'play' || button === 'pause'
								? () => changeControlStatus(isPlay === true ? false : true)
								: button === 'previous'
								? () => controlSong(songIndex - 1)
								: button === 'next'
								? () => controlSong(songIndex + 1)
								: null
						}
					/>
				))}
			</div>
			<SongTimeline>
				<div className="start-time">{songTime.currentTime}</div>
				<Bar>
					<TimelinePointer play={isPlay ? true : false} />
					<Timeline />
				</Bar>
				<div className="end-time">{songTime.duration}</div>
			</SongTimeline>
		</div>
	)
}

export default Controls
