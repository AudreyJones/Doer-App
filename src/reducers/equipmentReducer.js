export default function equipmentReducer(
    // YOUR EQUIPMENT REDUCER

    state= {loading:false, skills:[], equipment:[], certifications:[]}, action) {
        // console.log("equipment reducer:", state)
        switch (action.type) {
            
            case 'LOADING_EQUIPMENT':
                //console.log('Reducer: Loading_Equipment')
                // console.log("f")
                return {...state, loading: true}
                
            case 'FETCHING_EQUIPMENT':
                // state = {loading: false, equipment: action.payload}
                //console.log('Reducer: Fetching_Equipment')
                // console.log("g")
                const newState = {...state, equipment: action.payload}
                return newState

            case 'ADD_EQUIPMENT':
                // debugger
                console.log('Reducer: Add_Equipment')
                // Using concat because we're making a new array that is a modified version of the original anyways 
                const newEquipment = [...state.equipment].concat(action.equipment)
                return {...state, equipment: newEquipment}
                

            default:
                return state
        }
}