import React, { useContext } from 'react'
import styled from 'styled-components'

//import './Playlist.css'

import Context from '../../data/PlaylistContext'

const StyledPlaylist = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 25px 32px;
	width: 100%;
	cursor: pointer;
`

const Img = styled.img`
	width: 39px;
	height: 39px;
	border-radius: 50%;
`

const SongData = styled.div`
	min-width: 40px;
	width: 80%;
	font-family: Helvetica;
	margin-left: 10px;
`

const Title = styled.p`
	margin: 4px;
	font-size: 12px;
	color: #8d8d8d;
	letter-spacing: -0.15px;
`

const Author = styled.p`
	margin: 4px;
	font-size: 10px;
	color: #c2c2c2;
`

const Playlist = () => {
	const { playlists, changeId } = useContext(Context)

	return playlists.slice(0, 4).map(({ title, author, photoS, id }) => (
		<StyledPlaylist key={title} onClick={() => changeId(id)}>
			<Img src={photoS.url} alt={title} />
			<SongData>
				<Title>{title}</Title>
				<Author>{author}</Author>
			</SongData>
		</StyledPlaylist>
	))
}

export default Playlist
