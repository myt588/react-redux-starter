import axios from 'axios'
import actions from './index'

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  user
})

export const loginWithPassword = (username, password) => async (dispatch, getState) => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch(loginSuccess(users.data[0]))
  } catch (error) {
    dispatch(actions.addError(error))
  }
}
