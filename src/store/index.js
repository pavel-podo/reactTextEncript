import {createStore,combineReducers} from 'redux'
import{mainReducer} from './reducers/mainReducer'
import{headerReducer} from './reducers/headerReducer'
import{interfaceLanguageReducer} from './reducers/interfaceLanguage'
import{themeReducer} from './reducers/themeReducer'
import{messageLangReducer} from './reducers/messageLangReducer'
const rootReducer = combineReducers({
    mainReducer:mainReducer,
    headerReducer:headerReducer,
    interfaceLanguageReducer:interfaceLanguageReducer,
    themeReducer:themeReducer,
    messageLangReducer:messageLangReducer,
})
export default createStore(rootReducer)