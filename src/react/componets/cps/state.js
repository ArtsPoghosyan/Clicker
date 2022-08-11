import React from "react";
import {useSelector} from "react-redux";
import seconds from "../plugins/seconds";

function State(){
    const data = useSelector((state)=>{
        return state.clicker;
    })
    return (
        <>
            <div>Timer: {data.time / 1000}</div>
            <div>Click/s: {seconds(data.clickCount, data.timer)}</div>
            <div>Score: {data.clickCount}</div>
        </>
    )

}

export default State;