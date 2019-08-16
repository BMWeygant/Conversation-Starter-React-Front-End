import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import convos from './reducers/convosReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    convos
})

//const middleware = (thunk)

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)
    )
 )