import { sampleData } from "../../app/api/SampleData";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";

const innitialState = {
    events : sampleData
}

export default function eventReducer(state=innitialState,{type,payload}){
    switch(type){
        case CREATE_EVENT :
            return {
                ...state,
                events:[...state.events, payload]
            };
            case UPDATE_EVENT :
            return {
               ...state,
               events:[...state.events.filter(evt=> evt.id !== payload.id), payload]
            };
            case DELETE_EVENT:
                return {
                    ...state,
                    events:[...state.events.filter(evt=> evt.id !== payload)]
                }
            default :
            return  state;
    } 
    
}