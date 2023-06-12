
import {getUserAccPending , getUserAccFulfilled, getUserAccRejected , inc , dec , incByAmt} from '../actions'

export function accountReducer(state = {ammount: 1} , action){
    switch(action.type){
        case getUserAccPending : 
            return {...state , pending : true};
        case getUserAccFulfilled : 
            return {ammount : action.payload.ammount, pending : false};
        case getUserAccRejected : 
            return {...state , error : action.error , pending : false};
        case inc : 
            return {ammount : state.ammount+1};
        case dec : 
            return {ammount : state.ammount-1};
        case incByAmt :
             return {ammount : state.ammount + action.payload};
        default : 
            return state;
    }
}



