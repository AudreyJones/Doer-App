export default function equipmentReducer(
    // YOUR EQUIPMENT REDUCER

    state= {loading:false, skills:[], equipment:[]}, action) {
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

            // case 'SELECTING_EQUIPMENT':
            //             // state = {loading: false, equipment: action.payload}
            //             //console.log('Reducer: Fetching_Equipment')
            //             // console.log("g")
            //     const newState = {...state, equipment: action.payload}
            //     return newState
                

            default:
                return state
        }
}