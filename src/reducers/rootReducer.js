import {combineReducers} from 'redux';

// Skills Reducer
    import skills from '../reducers/skills'
// Equipment Reducer
    import equipment from '../reducers/equipment'

const rootReducer = combineReducers({skills: skills, equipment: equipment})


export default rootReducer