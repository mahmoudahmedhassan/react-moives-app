import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './rootReducer'
import reducer from './reducer/searchReducer'

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
