import { connect } from 'react-redux'
import Time from './Time'

const mapStateToProps = state => ({
	songTime: state.player.songTime
})

export default connect(mapStateToProps)(Time)
