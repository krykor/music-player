import { connect } from 'react-redux'
import Details from './Details'

const mapStateToProps = state => ({
	filteredList: state.player.filteredList
})

export default connect(mapStateToProps)(Details)
