export function counter(state={}, action){

    if(action.type === "addCount"){
        return {
            count: state.count + 1,
        }
    }else if(action.type === "removeCount"){
        return {
            count: state.count - 1,
        }
    }else if(action.type === "refeshCount"){
        return {
            count: 0,
        }
    }
    return state;
}

export const initalCounter = {
    count: 0,
}

export function addCount(){
    return {
        type: "addCount",
        payload: {}
    }
}

export function removeCount(){
    return {
        type: "removeCount",
        payload: {}
    }
}

export function refeshCount(){
    return{
        type: "refeshCount",
        payload:{}
    }
}