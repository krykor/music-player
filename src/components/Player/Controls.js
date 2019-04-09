import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import Time from './Time'

import Context from '../../data/PlaylistContext'

import SVGIcon from '../../assets/svgIcons'

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

	animation-name: ${(props) => (props.animationStopped ? 'none' : progress)};
	animation-duration: ${(props) => props.animationTimeline}s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-play-state: ${(props) => (!props.play ? 'paused' : 'running')};
`

const Timeline = styled.div`
	max-width: 192px;
	width: 100%;
	height: 3px;
	background-color: rgb(55, 32, 135, 0.2);
	border-radius: 2px;
`

const Controls = () => {
	const { isPlay, changeControlStatus, songIndex, controlSong, animationTime } = useContext(Context)

	const buttonStatus = isPlay === 'stopped' ? 'play' : isPlay === 'playing' ? 'pause' : 'play'

	const buttonArray = ['previous', buttonStatus, 'next']

	return (
		<div className="song-info-container-bottom">
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
								? () => changeControlStatus(isPlay === 'playing' ? 'paused' : 'playing')
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
				<Time showTime={'start-time'} />
				<Bar>
					<TimelinePointer
						play={isPlay === 'playing' ? true : false}
						animationTimeline={animationTime}
						animationStopped={isPlay === 'stopped'}
					/>
					<Timeline />
				</Bar>
				<Time showTime={'end-time'} />
			</SongTimeline>
		</div>
	)
}

export default Controls
