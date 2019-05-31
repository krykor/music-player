import { connect } from 'react-redux'
import Player from './Player'

const mapStateToProps = state => ({
	filteredList: state.player.filteredList
})

export default connect(mapStateToProps)(Player)
