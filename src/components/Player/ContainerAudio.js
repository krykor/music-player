import { connect } from 'react-redux'
import actions from './duck/actions'
import Audio from './Audio'

const mapStateToProps = state => ({
	isPlay: state.player.isPlay,
	songIndex: state.player.songIndex,
	animationTime: state.player.animationTime
})

const mapDispachToProps = dispatch => ({
	checkAnimationTime: item => dispatch(actions.checkAnimationTime(item)),
	changeSongTime: item => dispatch(actions.changeSongTime(item))
})

export default connect(
	mapStateToProps,
	mapDispachToProps
)(Audio)
