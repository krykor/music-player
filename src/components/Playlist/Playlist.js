import React from 'react'

import styled from 'styled-components'

const StyledPlaylist = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: flex-start;
	margin: 25px 32px;
	width: 100%;
`

const Img = styled.img`
	border-radius: 50%;
	height: 39px;
	width: 39px;
`

const SongData = styled.div`
	font-family: ${props => props.theme.font.family};
	margin-left: 10px;
	min-width: 40px;
	width: 80%;
`

const Title = styled.p`
	color: ${props => props.theme.color.gray};
	font-size: ${props => props.theme.font.size.big};
	letter-spacing: -0.15px;
	margin: 4px;
`

const Author = styled.p`
	color: ${props => props.theme.color.secondary};
	font-size: ${props => props.theme.font.size.small};
	margin: 4px;
`

const Playlist = ({ playlist, changeId }) =>
	playlist.slice(0, 4).map(({ title, author, photoS, id }) => (
		<StyledPlaylist key={title} onClick={() => changeId(id)}>
			<Img src={photoS.url} alt={title} />
			<SongData>
				<Title>{title}</Title>
				<Author>{author}</Author>
			</SongData>
		</StyledPlaylist>
	))

export default Playlist
