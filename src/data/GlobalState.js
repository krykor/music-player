import React, { useReducer } from 'react'

import { Reducer, CHANGE_ID, CHANGE_CONTROL_STATUS /*FILTERED_DATA*/ } from './Reducer'

import PlaylistContext from './PlaylistContext'

const GlobalState = (props) => {
	const inicialState = {
		songId: props.data.playlists[0].id,
		isPlay: false
		//filteredData: props.data.playlists[0]
	}

	const [playerState, dispatch] = useReducer(Reducer, inicialState)

	/*const filteredData = props.data.playlists.filter((item) => item.id === playerState.songId)[0]
	const changeFilter = () => {
		dispatch({ type: FILTERED_DATA, filteredData })
	}*/

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
				//filteredData: playerState.filteredData,
				//changeFilter
			}}
		>
			{props.children}
		</PlaylistContext.Provider>
	)
}

export default GlobalState
