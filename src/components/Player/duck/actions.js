import types from './types'

const changeId = songId => ({
	type: types.CHANGE_ID,
	songId
})

const changeControlStatus = isPlay => ({
	type: types.CHANGE_CONTROL_STATUS,
	isPlay
})

const changeFilter = (filteredList, songIndex) => ({
	type: types.CHANGE_FILTER,
	filteredList,
	songIndex
})

const changeSongTime = songTime => ({
	type: types.CHANGE_SONG_TIME,
	songTime
})

const checkAnimationTime = animationTime => ({
	type: types.CHECK_ANIMATION_TIME,
	animationTime
})

const getData = playlist => ({
	type: types.GET_DATA,
	playlist
})

export default {
	changeId,
	changeControlStatus,
	changeFilter,
	changeSongTime,
	checkAnimationTime,
	getData
}
