export function clicker(state={}, action){
    if(action.type === "addCount"){
        return {
           ...state,
           clickCount: state.clickCount + 1,
        }
    }else if(action.type === "start"){
        return{
            ...state,
            clickCount: 1,
            timer: state.timer,
            time: 0,
            start: true,  
            date: new Date().toISOString(),       
        }
    }else if(action.type === "finish"){
        return{
            ...state,
            start: false,
        }
    }else if(action.type === "addTime"){
        return {
            ...state,
            time: state.time + 100,
        }
    }else if(action.type === "refesh"){
        let hist = state.history;
        hist.unshift({...state});
        return {
            timer: state.timer,
            time: 0,
            start: "start",
            clickCount: 0,
            history: hist,
        }
    }else if(action.type === "setTimer"){
        return {
            ...state,
            timer: action.payload.timer,
            time: 0,
            start: "start",
            clickCount: 0, 
        }
    }
    return state;
}

export const initalClicker = {
    clickCount: 0,
    timer: 5000,
    time: 0,
    start: "start",
    history: []
};

export function addCount(){
    return {
        type: "addCount",
        payload: {}
    }
}


export function start(time){
    return {
        type: "start",
        payload: {
            timer: time,
        }
    }
}

export function finish(){
    return {
        type: "finish",
        payload: {}
    }
}

export function addTime(){
    return {
        type: "addTime",
        payload: {}
    }
}

export function refesh(){
    return {
        type: "refesh",
        payload:{}
    }
}

export function setTimer(seconds){
    return {
        type: "setTimer",
        payload:{
            timer: seconds,
        }
    }
}