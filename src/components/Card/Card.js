import React from 'react'
import styled from 'styled-components'

//import './Card.css'

import Player from '../Player/Player'
import Playlist from '../Playlist/Playlist'

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

export default Card
