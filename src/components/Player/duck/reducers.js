import types from './types'

const INITIAL_STATE = {
	playlist: [],
	songId: 0,
	isPlay: 'stopped',
	songIndex: 0,
	filteredList: {
		title: '',
		author: '',
		photoS: { url: '' }
	},
	songTime: {
		currentTime: '0:00',
		duration: '0:00'
	},
	animationTime: 0
}

export const playerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.CHANGE_ID:
			return { ...state, songId: action.songId }
		case types.CHANGE_CONTROL_STATUS:
			return { ...state, isPlay: action.isPlay }
		case types.CHANGE_FILTER:
			return { ...state, filteredList: action.filteredList, songIndex: action.songIndex }
		case types.CHANGE_SONG_TIME:
			return { ...state, songTime: action.songTime }
		case types.CHECK_ANIMATION_TIME:
			return { ...state, animationTime: action.animationTime }
		case types.GET_DATA:
			return { ...state, playlist: action.playlist }
		default:
			return state
	}
}

export default playerReducer
