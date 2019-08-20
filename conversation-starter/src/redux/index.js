import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import convos from './reducers/convosReducer'
import quotes from './reducers/quotesReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    convos,
    quotes
})

//const middleware = (thunk)

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)
    )
 )