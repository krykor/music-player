export const CHANGE_ID = 'CHANGE_ID'
export const CHANGE_CONTROL_STATUS = 'CHANGE_CONTROL_STATUS'
export const CHANGE_FILTER = 'CHANGE_FILTER'

export const Reducer = (state, action) => {
	switch (action.type) {
		case CHANGE_ID:
			return { ...state, songId: action.songId }
		case CHANGE_CONTROL_STATUS:
			return { ...state, isPlay: action.isPlay }
		case CHANGE_FILTER:
			return { ...state, filteredList: action.filteredList, songIndex: action.songIndex }
		default:
			return state
	}
}
