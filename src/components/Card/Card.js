import React from 'react'

import ContainerEffects from './Container'
import styled from 'styled-components'
import Player from '../Player/ContainerPlayer'
import Playlist from '../Playlist/ContainerPlaylist'

const StyledCard = styled.div`
	width: 472px;
	height: 515px;
	background-color: #fff;

	@media (max-width: 500px) {
		width: 100%;
		height: 100%;
	}
`

const Card = () => (
	<StyledCard>
		<Player />
		<Playlist />
	</StyledCard>
)

export default ContainerEffects(Card)
