import {combineReducers} from 'redux';

// Skills Reducer
    import skills from './skillsReducer'
// Equipment Reducer
    import equipment from './equipmentReducer'

const rootReducer = combineReducers({skills: skills, equipment: equipment})


export default rootReducer