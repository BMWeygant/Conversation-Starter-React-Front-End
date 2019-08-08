import { combineReducers, createStore } from 'redux'
import initiators from './reducers/initiatorsReducer'

const rootReducer = combineReducers({
    initiators
})

export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())