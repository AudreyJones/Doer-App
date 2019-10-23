export function fetchSkills() {
    //  Your MATERIALS ACTION CREATOR
        // console.log("Hitting fetchMaterials")
        // console.log("c")
        return (dispatch) => {
                    dispatch({ type: 'FETCHING_SKILLS', payload: ['Warehouse', 'Hospitality', 'General Labor', 'Office', 'iRelaunch']})
        }
}

export const selectSkill = (skill) => {
        return (dispatch) => {
            dispatch({type: 'SELECTING_SKILL', payload: skill})
        }
}
    

    //  export const addMaterial = (material) => {
    //     //  debugger
    //     //  Destructuring: const ({name, brand, color, quantity, project_id} = {material})
    //     return (dispatch) => {
    //         return fetch('http://localhost:3001/materials', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Accept: 'application/json'
    //             },
    //             body: JSON.stringify({material})
    //         })
    //         .then(resp => resp.json())
    //         .then(material => dispatch({type:"ADD_MATERIAL", material}))
    //         .catch(error => console.error(error))
    //     }
    //  }
    
     // Old POST request for data persistence
        // addMaterial = (name, brand, color, quantity, project_id) => {
        //   console.log("sent added material to Rails API")
        //   const data = {name, brand, color, quantity, project_id}
        //   fetch("http://localhost:3001/materials", {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type' : 'application-json',
        //     },
        //     body: JSON.stringify(data)
        //   })
        //   .then(resp => resp.json())
        //   .then(console.log())
        // }