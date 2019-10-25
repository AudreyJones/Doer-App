export default function skillsReducer(
    // YOUR SKILLS REDUCER

    state= {loading:false, skills:[]}, action) {
        console.log("skills reducer:", state)
        switch (action.type) {
            case 'LOADING_SKILLS':
                console.log('REDUCER: Loading_Skills')
                return {...state, loading: true}
                
            case 'FETCHING_SKILLS':
                // console.log(state = {loading: false, skills: action.payload})
                console.log('REDUCER: Fetching_Skills')
                
                const newState = {...state, skills: action.payload}
                return newState
                
            case 'ADD_SKILL':
                debugger
                // console.log(state = {loading: false, skills: action.payload})
                console.log('REDUCER: Add_Skill')   
                const newSkill = [...state.skills]
                newSkill.push(action.newSkill)
                return {...state, skills: newSkill }

            default:
                return state
        }
}