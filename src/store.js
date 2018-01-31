import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import reducers from './reducers'

const logger = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV === `development`,
  collapsed: (getState, action, logEntry) => !logEntry.error
})

const middleware = applyMiddleware(thunk, promise(), logger)

export default createStore(reducers, middleware)
