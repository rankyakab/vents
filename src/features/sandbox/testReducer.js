 export const INCREMENT_COUNTER ='INCREMENT_COUNTER'
 export const DECREMENT_COUNTER ='DECREMENT_COUNTER'

 export function increment(amount){
     return {
         type:INCREMENT_COUNTER,
         payload:amount
     }
 }

 export function decremnt(amount){
     return {
         type: DECREMENT_COUNTER,
         payload: amount
     }
 }
 
 const innitialState = {
     data:42,
     name: 'ola'
 }

 export default function testReducer(state= innitialState, {type,payload}){
     switch(type){
         case INCREMENT_COUNTER :
             return{
              ...state, data:state.data + payload
             };
        case DECREMENT_COUNTER :
            return {
          ...state, data: state.data - payload
            };
            default:
            return state;
     }
   
 }