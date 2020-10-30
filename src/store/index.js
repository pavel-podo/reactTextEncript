import {createStore,combineReducers} from 'redux'
import{mainReducer} from './reducers/mainReducer'
import{headerReducer} from './reducers/headerReducer'
import{interfaceLanguageReducer} from './reducers/interfaceLanguage'
const rootReducer = combineReducers({
    mainReducer:mainReducer,
    headerReducer:headerReducer,
    interfaceLanguageReducer:interfaceLanguageReducer,

})
export default createStore(rootReducer)