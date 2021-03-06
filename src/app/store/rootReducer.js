import {combineReducers} from 'redux'
import eventReducer from '../../features/events/eventReducer'
import testReducer from '../../features/sandbox/testReducer'

const rootReducer = combineReducers({
    test : testReducer,
    events: eventReducer
});
export default rootReducer;