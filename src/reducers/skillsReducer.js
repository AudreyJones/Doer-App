export default function skillsReducer(
    // YOUR SKILLS REDUCER

    state= {loading:false, skills:[], equipment:[], certifications:[]}, action) {
        // console.log("skills reducer:", state)
        switch (action.type) {
            
            case 'LOADING_SKILLS':
                //console.log('Reducer: Loading_Skills')
                // console.log("f")
                return {...state, loading: true}
                
            case 'FETCHING_SKILLS':
                // state = {loading: false, skills: action.payload}
                //console.log('Reducer: Fetching_Skills')
                // console.log("g")
                const newState = {...state, skills: action.payload}
                return newState

            case 'ADD_SKILL':
                // debugger
                console.log('Reducer: Add_Skill')
                // Using concat because we're making a new array that is a modified version of the original anyways 
                const newSkills = [...state.skills].concat(action.skill)
                return {...state, skills: newSkills}
                

            default:
                return state
        }
}