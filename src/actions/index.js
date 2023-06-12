import axios from "axios";

//Connstant Action Names
export const inc = 'inc'
export const dec = 'dec';
export const incByAmt = 'incByAmt';
export const getUserAccFulfilled = 'account/getUser/fulfilled'
export const getUserAccRejected = 'account/getUser/rejected'
export const getUserAccPending = 'account/getUser/pending'
//Connstant Action Names
export const incP = 'incP'

//Account Action Creaters
export function getUser(id){    
    return async(dispatch , state) => {
        const urlAmt = `http://localhost:3000/account/${id}`;
        const urlPnt = `http://localhost:3000/bonus/${id}`;
        dispatch(getUserAccountPending(true))
        try{
            const {data:account} = await axios.get(urlAmt);
            console.log(account , account.ammount);
            const {data:bonus} = await axios.get(urlPnt);

            dispatch(getUserAccountFulfilled(account.ammount , bonus.points));
        }
        catch(err){
            dispatch(getUserAccountRejected(err.message))
        }
       
    }
}

export function getUserAccountPending(value){
    return { type : getUserAccPending , pending : value }
}

export function getUserAccountFulfilled(ammount, points){
    return { type : getUserAccFulfilled , payload : {ammount , points}}
}

export function getUserAccountRejected(error){
    return { type : getUserAccRejected , error : error}
}

export function increment(){
    return {type : inc};
}

export function decrement(){
    return {type : dec};
}

export function incrementByAmt(value){
    return {type : incByAmt , payload : value};
}

//BOnus
export function incrementP(){
    return {type : incP};
}