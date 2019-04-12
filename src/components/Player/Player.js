import React, { useContext } from 'react'
import styled from 'styled-components'

//import './Player.css'

import Context from '../../data/PlaylistContext'

import Details from './Details'
import Controls from './Controls'
import Audio from './Audio'

const StyledPlayer = styled.div`
	background: rgb(254, 244, 234);
	width: 100%;
	height: 241px;
	position: relative;
	overflow: hidden;
`

const StyledPlayerBg = styled.div`
	background: url('${(props) => props.background}' )bottom / cover no-repeat;
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	transform: scale(1.1);
	filter: blur(32px);
	opacity: 0.24;

	::after {
		background: rgb(255, 255, 255);
	width: 100%;
	height: 100%;
	position: absolute;
	}
`
const StyledPlayerBgColor = styled.div`
	background: rgb(255, 255, 255);
	width: 100%;
	height: 100%;
	position: absolute;
`

const Player = () => {
	const { filteredList } = useContext(Context)

	return (
		<StyledPlayer className="song-info ">
			<StyledPlayerBgColor />
			<StyledPlayerBg background={filteredList.photoS.url} />
			<Audio />
			<Details />
			<Controls />
		</StyledPlayer>
	)
}

export default Player
