

export function fetchSkills() {
//  YOUR SKILLS ACTION CREATOR
   console.log("Hitting fetchSkills ACTION CREATOR")
//    debugger
    return (dispatch) => {
        // First action sent immediately after promise is returned
        dispatch({type: 'LOADING_SKILLS'})
        return fetch('http://localhost:3001/skills')
            .then(r => r.json())
            .catch(error => console.log(error))
        // Second action sent after promise is resolved
        //   console.log('Promise resolved -- Actually Fetching Skills', skills)
            .then(skills => dispatch({ type: 'FETCHING_SKILLS', payload: skills }))
    }
}

export const addSkill = (skill) => {
    // debugger
    console.log("skill: ", skill)
    
   return (dispatch) => {
       return fetch('http://localhost:3001/skills', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({
               skill: skill})
       })
       .then(resp => resp.json())
       .then(newSkill => dispatch({type:"ADD_SKILL", newSkill}))
       .catch(error => console.error(error))
   }
}
    

  