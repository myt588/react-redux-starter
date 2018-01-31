const initialState = {
  id: null,
  name: 'Not Logged In'
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {...state, id: action.user.id, name: action.user.name}
    default:
      return state
  }
}

export default user
