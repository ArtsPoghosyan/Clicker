import React from "react";
import {useSelector} from "react-redux";
import seconds from "../plugins/seconds";

function AimState(){
    const data = useSelector((state)=>{
        return state.aim;
    })
    return (
        <>
            <div>Timer: {data.time / 1000}</div>
            <div>Click/s: {seconds(data.aimCount, data.timer)}</div>
            <div>Score: {data.aimCount}</div>
        </>
    )

}

export default AimState;