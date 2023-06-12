
import {incP,decP, incByAmt ,getUserAccFulfilled ,getUserAccPending,getUserAccRejected} from '../actions'

export function bonusReducer(state = {points: 1} , action){
    switch(action.type){
        case getUserAccPending : 
            return {...state , pending : true};
        case getUserAccRejected : 
            return {...state , error : action.error , pending : false};
        case getUserAccFulfilled : 
            return {points: action.payload.points};
        case incP : 
                return {points: state.points+1}
        case incByAmt :
            if(action.payload > 100)
                return {points: state.points+1}
        default : 
            return state;
    }
}

