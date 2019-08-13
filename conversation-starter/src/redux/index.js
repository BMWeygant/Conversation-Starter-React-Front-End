import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import initiators from './reducers/initiatorsReducer'
import convos from './reducers/convosReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    //initiators
    convos
})

//const middleware = (thunk)

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)
    )
 )