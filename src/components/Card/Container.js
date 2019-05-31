import React, { useEffect } from 'react'

const ComponentEffect = props => {
	useEffect(() => {
		props.getData(props.data.playlists)
	}, [])

	useEffect(() => {
		props.player.songId !== 0
			? props.changeFilter(
					props.data.playlists.find(item => item.id === props.player.songId),
					props.data.playlists.findIndex(item => item.id === props.player.songId)
			  )
			: props.changeFilter(props.data.playlists[0], 0)

		props.changeControlStatus('stopped')
	}, [props.player.songId])

	useEffect(() => {
		const { currentTime, duration } = props.player.songTime
		currentTime === duration && props.changeControlStatus('stopped')
	}, [props.player.songTime])

	return <></>
}

const Component = Component => props => (
	<>
		<ComponentEffect {...props} /> <Component {...props} />
	</>
)

export default Component
