import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import Time from './Time'

import Context from '../../data/PlaylistContext'

import SVGIcon from '../../assets/svgIcons'

const StyledControls = styled.div`
	margin: 32px;
	margin-top: 12px;
	display: flex;
	justify-content: space-between;
	min-height: 22px;
	position: relative;
`

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 122px;
	padding: 0 5px;

	svg {
		width: 12px;
		height: 17px;
		cursor: pointer;
	}

	svg:nth-child(2) {
		width: 15px;
		height: 22px;
	}
`

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
	background-color: rgb(38, 16, 123);
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
	background-color: rgba(55, 32, 135, 0.2);
	border-radius: 2px;
`

const Controls = () => {
	const { isPlay, changeControlStatus, songIndex, controlSong, animationTime } = useContext(Context)

	const buttonStatus = isPlay === 'stopped' ? 'play' : isPlay === 'playing' ? 'pause' : 'play'

	const buttonArray = ['previous', buttonStatus, 'next']

	return (
		<StyledControls>
			<Buttons>
				{buttonArray.map((button) => (
					<SVGIcon
						width={100}
						key={button}
						alt={button}
						name={button}
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
			</Buttons>
			<SongTimeline>
				<Time margin={'right'} />
				<Bar>
					<TimelinePointer
						play={isPlay === 'playing' ? true : false}
						animationTimeline={animationTime}
						animationStopped={isPlay === 'stopped'}
					/>
					<Timeline />
				</Bar>
				<Time margin={'left'} />
			</SongTimeline>
		</StyledControls>
	)
}

export default Controls
