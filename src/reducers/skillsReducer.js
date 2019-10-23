export default function skillsReducer(
    // YOUR SKILLS REDUCER

    //INCLUDES DUMMY/HARD-CODED DATA
    state= {loading:false, skills:[], equipment:[]}, action) {
        console.log("skills reducer:", state)
        switch (action.type) {
            case 'LOADING_SKILLS':
                console.log('Reducer: Loading_Skills')
                return {...state, loading: true}
                
            case 'FETCHING_SKILLS':
                console.log(state = {loading: false, skills: action.payload})
                console.log('Reducer: Fetching_Skills')
                
                const newState = {...state, skills: action.payload}
                return newState

            case 'SELECTING_SKILL':
                console.log(state = {loading: false, skills: action.payload})
                console.log('Reducer: Selecting Skill')
            
                const updatedState = {...state, skills: action.payload}
                return updatedState

            default:
                return state
        }
}