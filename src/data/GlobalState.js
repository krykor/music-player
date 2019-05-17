import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actions from '../components/Player/duck/actions'

import PlaylistContext from './PlaylistContext'

const GlobalState = props => {
	const controlSong = index =>
		index >= 0 && index < props.data.playlists.length - 1
			? props.changeId(props.data.playlists[index].id)
			: null

	useEffect(() => {
		props.changeFilter(
			props.data.playlists.find(item => item.id === props.player.songId),
			props.data.playlists.findIndex(item => item.id === props.player.songId)
		)
		props.changeControlStatus('stopped')
	}, [props.player.songId])

	useEffect(() => {
		const { currentTime, duration } = props.player.songTime
		currentTime === duration && props.changeControlStatus('stopped')
	}, [props.player.songTime])

	useEffect(() => {
		const testy = (item, item2) => props.changeFilter(item, item2)
		testy(props.data.playlists[0], 0)
	}, [])

	return (
		<PlaylistContext.Provider
			value={{
				playlists: props.data.playlists,
				songId: props.player.songId,
				changeId: props.changeId,
				isPlay: props.player.isPlay,
				changeControlStatus: props.changeControlStatus,
				songIndex: props.player.songIndex,
				filteredList: props.player.filteredList
					? props.data.playlists[0]
					: props.player.filteredList,
				controlSong,
				songTime: props.player.songTime,
				changeSongTime: props.changeSongTime,
				animationTime: props.player.animationTime,
				checkAnimationTime: props.checkAnimationTime
			}}
		>
			{props.children}
		</PlaylistContext.Provider>
	)
}

const mapStateToProps = state => ({
	player: state.player
})

const mapDispachToProps = dispatch => ({
	changeFilter: (filtered, id) => dispatch(actions.changeFilter(filtered, id)),
	changeId: id => dispatch(actions.changeId(id)),
	changeControlStatus: item => dispatch(actions.changeControlStatus(item)),
	checkAnimationTime: item => dispatch(actions.checkAnimationTime(item)),
	changeSongTime: item => dispatch(actions.changeSongTime(item))
})

export default connect(
	mapStateToProps,
	mapDispachToProps
)(GlobalState)

/*import {
	Reducer,
	CHANGE_ID,
	CHANGE_CONTROL_STATUS,
	CHANGE_FILTER,
	CHANGE_SONG_TIME,
	CHECK_ANIMATION_TIME
} from './Reducer'

import PlaylistContext from './PlaylistContext'

const GlobalState = (props) => {
	const inicialState = {
		songId: props.data.playlists[0].id,
		isPlay: 'stopped',
		songIndex: 0,
		filteredList: props.data.playlists[0],
		songTime: {
			currentTime: '0:00',
			duration: '0:00'
		},
		animationTime: 0
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

	const changeSongTime = (songTime) => {
		dispatch({ type: CHANGE_SONG_TIME, songTime })
	}

	const checkAnimationTime = (animationTime) => {
		dispatch({ type: CHECK_ANIMATION_TIME, animationTime })
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
		changeControlStatus('stopped')
	}, [playerState.songId])

	useEffect(() => {
		const { currentTime, duration } = playerState.songTime
		currentTime === duration && changeControlStatus('stopped')
	}, [playerState.songTime])

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
				controlSong,
				songTime: playerState.songTime,
				changeSongTime,
				animationTime: playerState.animationTime,
				checkAnimationTime
			}}
		>
			{props.children}
		</PlaylistContext.Provider>
	)
}

export default GlobalState
*/
