import { WhenThisActionHappend   } from '../actions/types';


const initialState = {
    partOfStateThatWillChange: "Rezvani-redux-boilerplate"
}

const ReducerName = (oldState = initialState , action ) => {

    switch (action.type) {
        case WhenThisActionHappend:
            return {
                ...oldState,
                partOfStateThatWillChange: action.peyload
            }
        default:
            return {...oldState};
    }
}

export default ReducerName;