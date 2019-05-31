import { connect } from 'react-redux'
import actions from '../Player/duck/actions'
import Playlist from './Playlist'

const mapStateToProps = state => ({
	playlist: state.player.playlist
})

const mapDispachToProps = dispatch => ({
	changeId: id => dispatch(actions.changeId(id))
})

export default connect(
	mapStateToProps,
	mapDispachToProps
)(Playlist)
