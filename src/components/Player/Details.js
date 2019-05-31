import React from 'react'

import styled from 'styled-components'

const StyledDetails = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 32px;
	padding-bottom: 12px;
`
const Flex = styled.div`
	height: 132px;
	width: 132px;
`
const Img = styled.img`
	height: 132px;
	position: relative;
	width: 132px;
	z-index: 4;
`

const ImgBlur = styled.img`
	position: absolute;
	filter: blur(15px);
	height: 132px;
	left: 32px;
	opacity: 0.6;
	width: 132px;
	z-index: 3;
`

const Song = styled.div`
	color: ${props => props.theme.color.primary};
	font-family: ${props => props.theme.font.family};
	margin-left: 20px;
	z-index: 0;
`

const Title = styled.p`
	font-size: ${props => props.theme.font.size.title};
	letter-spacing: -0.25px;
	margin: 5px;
	margin-top: 12px;
`

const Author = styled.p`
	font-size: ${props => props.theme.font.size.big};
	letter-spacing: -0.15px;
	margin: 5px;
	margin-top: 10px;
	opacity: 0, 7;
`

const Details = ({
	filteredList: {
		title,
		author,
		photoS: { url }
	}
}) => (
	<StyledDetails>
		<Flex>
			<Img src={url} alt={title} />
			<ImgBlur src={url} alt={`${title} - cover`} />
		</Flex>
		<Song>
			<Title>{title}</Title>
			<Author>{author}</Author>
		</Song>
	</StyledDetails>
)

export default Details
