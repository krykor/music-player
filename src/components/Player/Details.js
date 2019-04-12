import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from '../../data/PlaylistContext'

const StyledDetails = styled.div`
	padding: 32px;
	padding-bottom: 12px;
	display: flex;
	justify-content: flex-start;
`
const Flex = styled.div`
	width: 132px;
	height: 132px;
`
const Img = styled.img`
	width: 132px;
	height: 132px;
	z-index: 4;
	position: relative;
`

const ImgBlur = styled.img`
	width: 132px;
	height: 132px;
	left: 32px;
	position: absolute;
	filter: blur(15px);
	opacity: 0.6;
	z-index: 3;
`

const Song = styled.div`
	font-family: Helvetica;
	color: #26107b;
	margin-left: 20px;
	z-index: 0;
`

const Title = styled.p`
	font-size: 20px;
	letter-spacing: -0.25px;
	margin: 5px;
	margin-top: 12px;
`

const Author = styled.p`
	font-size: 12px;
	letter-spacing: -0.15px;
	opacity: 0, 7;
	margin: 5px;
	margin-top: 10px;
`

const Details = () => {
	const { filteredList } = useContext(Context)

	const { title, author, photoS } = filteredList

	return (
		<StyledDetails>
			<Flex>
				<Img src={photoS.url} alt={title} />
				<ImgBlur src={photoS.url} alt={`${title} - cover`} />
			</Flex>
			<Song>
				<Title>{title}</Title>
				<Author>{author}</Author>
			</Song>
		</StyledDetails>
	)
}

export default Details
