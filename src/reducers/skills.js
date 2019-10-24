export default function skillsReducer(
    // YOUR SKILLS REDUCER

    state= {loading:false, skills:[], equipment:[]}, action) {
        // console.log("skills reducer:", state)
        switch (action.type) {
            case 'LOADING_SKILLS':
                console.log('Reducer: Loading_Skills')
                return {...state, loading: true}
                
            case 'FETCHING_SKILLS':
                // console.log(state = {loading: false, skills: action.payload})
                console.log('Reducer: Fetching_Skills')
                
                const newState = {...state, skills: ['Warehouse', 'Hospitality', 'General Labor', 'Office', 'iRelaunch']}
                console.log(newState)
                return newState
                
            case 'ADD_SKILL':
                console.log(state = {loading: false, skills: action.payload})
                console.log('Reducer: Add_Skill')
            
                const updatedState = {...state, skills: action.payload}
                return updatedState

            default:
                return state
        }
}