import { combineReducers } from 'redux'
import playerReducer from './components/Player/duck'

const rootReducer = combineReducers({
	player: playerReducer
})

export default rootReducer
