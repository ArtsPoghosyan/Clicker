import random from "../../../react/componets/plugins/randomNumbers";

export function aim(state={}, action){
    if(action.type === "addCountAim"){
        let x = random(7, 30) + "px";
        return {
            ...state,
            aimCount: state.aimCount + 1,
            styles: {
                width: x,
                height: x,
                marginLeft: random(4, 90) + "%",
                marginTop: random(4, 33) + "%",
                backgroundColor: "#3234CA",
                borderRadius: "50%",
            },
        }
    }else if(action.type === "startAim"){
        return{
            ...state,
            aimCount: 0,
            timer: state.timer,
            time: 0,
            start: true,
            date: new Date().toISOString(),  
        }
    }else if(action.type === "finishAim"){
        return{
            ...state,
            start: false,
        }
    }else if(action.type === "addTimeAim"){
        return {
            ...state,
            time: state.time + 100,
        }
    }else if(action.type === "refeshAim"){
        let hist = state.history;
        hist.unshift({...state});
        let x = random(10, 35) + "px";
        return {
            timer: state.timer,
            time: 0,
            start: "start",
            aimCount: 0,
            history: hist,
            styles: {
                width: x,
                height: x,
                marginLeft: random(4, 90) + "%",
                marginTop: random(4, 33) + "%",
                backgroundColor: "#3234CA",
                borderRadius: "50%",
            }
        }
    }else if(action.type === "setTimerAim"){
        return {
            ...state,
            timer: action.payload.timer,
            time: 0,
            start: "start",
            aimCount: 0,
        }
    }
    return state;
}

export const initalAim = {
    timer: 5000,
    time: 0,
    start: "start",
    aimCount: 0,
    styles: {
        width: "20px",
        height: "20px",
        marginLeft: random(4, 90) + "%",
        marginTop: random(4, 33) + "%",
        backgroundColor: "#3234CA",
        borderRadius: "50%",
    },
    history: [],
}

export function addCountAim(){
    return {
        type: "addCountAim",
        payload: {}
    }
}


export function startAim(){
    return {
        type: "startAim",
        payload:{}
    }
}

export function finishAim(){
    return {
        type: "finishAim",
        payload: {}
    }
}

export function addTimeAim(){
    return {
        type: "addTimeAim",
        payload: {}
    }
}

export function refeshAim(){
    return {
        type: "refeshAim",
        payload:{}
    }
}

export function setTimerAim(seconds){
    return {
        type: "setTimerAim",
        payload:{
            timer: seconds,
        }
    }
}