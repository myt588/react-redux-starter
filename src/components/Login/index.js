import { connect } from 'react-redux'
import actions from '../../actions/'
import selectors from '../../selectors/'
import Login from './Login'

const mapStateToProps = (state) => {
  return {
    // tabFeedIsDisplayed: selectors.getTabFeedIsDisplayed(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // listLoaded: (scope, data) => dispatch(actions.listLoaded(scope, data)),
    // setLoading: (scope, status) => dispatch(actions.setLoading(scope, status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
