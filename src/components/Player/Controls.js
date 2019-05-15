import React, { useContext } from 'react'

import Context from '../../data/PlaylistContext'
import styled, { keyframes } from 'styled-components'
import SVGIcon from '../../assets/icons/svgIcons'
import Time from './Time'

const StyledControls = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 32px;
	margin-top: 12px;
	min-height: 22px;
	position: relative;
`

const Buttons = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 0 5px;
	width: 122px;

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
	align-items: center;
	display: flex;
	height: 16px;
	justify-content: flex-end;
	max-width: 300px;
	width: 61%;
`

const Bar = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	justify-content: flex-start;
	width: 100%;
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
	animation-duration: ${(props) => props.animationTimeline}s;
	animation-iteration-count: infinite;
	animation-name: ${(props) => (props.animationStopped ? 'none' : progress)};
	animation-play-state: ${(props) => (!props.play ? 'paused' : 'running')};
	animation-timing-function: linear;
	background-color: ${(props) => props.theme.color.pointer};
	border-radius: 50%;
	position: absolute;
	height: 7px;
	width: 7px;
`

const Timeline = styled.div`
	background-color: ${(props) => props.theme.color.timeline};
	border-radius: 2px;
	height: 3px;
	max-width: 192px;
	width: 100%;
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
