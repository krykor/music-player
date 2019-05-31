import { connect } from 'react-redux'
import actions from '../Player/duck/actions'
import Card from './Card'

const mapStateToProps = state => ({
	player: state.player
})

const mapDispachToProps = dispatch => ({
	changeFilter: (filtered, id) => dispatch(actions.changeFilter(filtered, id)),
	changeId: id => dispatch(actions.changeId(id)),
	changeControlStatus: item => dispatch(actions.changeControlStatus(item)),
	getData: item => dispatch(actions.getData(item))
})
export default connect(
	mapStateToProps,
	mapDispachToProps
)(Card)
