import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {birds} from './reducers/birds'

const rootReducer = combineReducers({
   testBirds: birds
})
const initialState = {}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

export type RootState = ReturnType<typeof store.getState>