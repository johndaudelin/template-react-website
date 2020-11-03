import ContentScreen from '../ui/ContentScreen'
import { connect } from 'react-redux'
import { changeSampleProperty } from '../../actions'

const mapStateToProps = state => ({
  sampleProperty: state.sampleProperty
})

const mapDispatchToProps = dispatch => ({
  changeSampleProperty (value) {
    dispatch(changeSampleProperty(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentScreen)
