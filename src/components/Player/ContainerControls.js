import { connect } from 'react-redux'
import actions from './duck/actions'
import Controls from './Controls'

const mapStateToProps = state => ({
	isPlay: state.player.isPlay,
	songIndex: state.player.songIndex,
	animationTime: state.player.animationTime,
	playlist: state.player.playlist
})

const mapDispachToProps = dispatch => ({
	changeControlStatus: item => dispatch(actions.changeControlStatus(item)),
	changeId: id => dispatch(actions.changeId(id))
})

export default connect(
	mapStateToProps,
	mapDispachToProps
)(Controls)
