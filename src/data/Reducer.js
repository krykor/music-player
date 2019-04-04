export const CHANGE_ID = 'CHANGE_ID'
export const CHANGE_CONTROL_STATUS = 'CHANGE_CONTROL_STATUS'
export const CHANGE_FILTER = 'CHANGE_FILTER'
export const CHANGE_SONG_TIME = 'CHANGE_SONG_TIME'
export const CHECK_ANIMATION_TIME = 'CHECK_ANIMATION_TIME'

export const Reducer = (state, action) => {
	switch (action.type) {
		case CHANGE_ID:
			return { ...state, songId: action.songId }
		case CHANGE_CONTROL_STATUS:
			return { ...state, isPlay: action.isPlay }
		case CHANGE_FILTER:
			return { ...state, filteredList: action.filteredList, songIndex: action.songIndex }
		case CHANGE_SONG_TIME:
			return { ...state, songTime: action.songTime }
		case CHECK_ANIMATION_TIME:
			return { ...state, animationTime: action.animationTime }
		default:
			return state
	}
}
