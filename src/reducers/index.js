import { combineReducers } from 'redux'
import chatReducer from './chat'
import inputReducer from './input'

export default combineReducers({
    chat:   chatReducer,
    input:  inputReducer,
})
