import React, { useReducer } from 'react'

import { Reducer, CHANGE_ID, CHANGE_CONTROL_STATUS } from './Reducer'

import PlaylistContext from './PlaylistContext'

const GlobalState = (props) => {
	const inicialState = {
		songId: props.data.playlists[0].id,
		isPlay: false
	}

	const [playerState, dispatch] = useReducer(Reducer, inicialState)

	const changeId = (songId) => {
		dispatch({ type: CHANGE_ID, songId })
	}

	const changeControlStatus = (isPlay) => {
		dispatch({ type: CHANGE_CONTROL_STATUS, isPlay })
	}

	return (
		<PlaylistContext.Provider
			value={{
				playlists: props.data.playlists,
				songId: playerState.songId,
				changeId,
				isPlay: playerState.isPlay,
				changeControlStatus
			}}
		>
			{props.children}
		</PlaylistContext.Provider>
	)
}

export default GlobalState
