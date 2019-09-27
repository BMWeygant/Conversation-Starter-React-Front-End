import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import convos from './reducers/convosReducer'
import quotes from './reducers/quotesReducer'
import comments from './reducers/commentsReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    convos,
    quotes,
    comments
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)
    )
 )