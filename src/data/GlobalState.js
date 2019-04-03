import React, { useReducer, useEffect } from 'react'

import { Reducer, CHANGE_ID, CHANGE_CONTROL_STATUS, CHANGE_FILTER } from './Reducer'

import PlaylistContext from './PlaylistContext'

const GlobalState = (props) => {
	const inicialState = {
		songId: props.data.playlists[0].id,
		isPlay: false,
		songIndex: 0,
		filteredList: props.data.playlists[0]
	}

	const [playerState, dispatch] = useReducer(Reducer, inicialState)

	const changeId = (songId) => {
		dispatch({ type: CHANGE_ID, songId })
	}

	const changeControlStatus = (isPlay) => {
		dispatch({ type: CHANGE_CONTROL_STATUS, isPlay })
	}

	const changeFilter = (filteredList, songIndex) => {
		dispatch({ type: CHANGE_FILTER, filteredList, songIndex })
	}

	const controlSong = (index) =>
		index >= 0 && index < props.data.playlists.length - 1
			? changeId(props.data.playlists[index].id)
			: null

	useEffect(() => {
		changeFilter(
			props.data.playlists.find((item) => item.id === playerState.songId),
			props.data.playlists.findIndex((item) => item.id === playerState.songId)
		)
	}, [playerState.songId])

	return (
		<PlaylistContext.Provider
			value={{
				playlists: props.data.playlists,
				songId: playerState.songId,
				changeId,
				isPlay: playerState.isPlay,
				changeControlStatus,
				songIndex: playerState.songIndex,
				filteredList: playerState.filteredList,
				controlSong
			}}
		>
			{props.children}
		</PlaylistContext.Provider>
	)
}

export default GlobalState
