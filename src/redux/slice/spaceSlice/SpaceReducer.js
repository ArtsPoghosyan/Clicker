export function spaceCps(state={}, action){
    if(action.type === "addCountSpace"){
        return {
           ...state,
           spaceCount: state.spaceCount + 1,
        }
    }else if(action.type === "startSpace"){
        return{
            ...state,
            spaceCount: 0,
            timer: state.timer,
            time: 0,
            start: true,
            date: new Date().toISOString(),  
        }
    }else if(action.type === "finishSpace"){
        return{
            ...state,
            start: false,
        }
    }else if(action.type === "addTimeSpace"){
        return {
            ...state,
            time: state.time + 100,
        }
    }else if(action.type === "refeshSpace"){
        let hist = state.history;
        hist.unshift({...state});
        return {
            timer: state.timer,
            time: 0,
            start: "start",
            spaceCount: 0,
            history: hist,
        }
    }else if(action.type === "setTimerSpace"){
        return {
            ...state,
            timer: action.payload.timer,
            time: 0,
            start: "start",
            spaceCount: 0,
        }
    }
    return state;
}

export const initalSpace = {
    timer: 5000,
    time: 0,
    start: "start",
    spaceCount: 0,
    history: [],
}

export function addCountSpace(){
    return {
        type: "addCountSpace",
        payload: {}
    }
}


export function startSpace(){
    return {
        type: "startSpace",
        payload:{}
    }
}

export function finishSpace(){
    return {
        type: "finishSpace",
        payload: {}
    }
}

export function addTimeSpace(){
    return {
        type: "addTimeSpace",
        payload: {}
    }
}

export function refeshSpace(){
    return {
        type: "refeshSpace",
        payload:{}
    }
}

export function setTimerSpace(seconds){
    return {
        type: "setTimerSpace",
        payload:{
            timer: seconds,
        }
    }
}