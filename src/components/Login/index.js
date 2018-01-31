import { connect } from 'react-redux'
import { loginWithPassword } from '../../actions/userActions'
import { getUserId, getUserName } from '../../selectors/userSelectors'
import Login from './Login'

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
    userName: getUserName(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginWithPassword: (username, password) => dispatch(loginWithPassword(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
