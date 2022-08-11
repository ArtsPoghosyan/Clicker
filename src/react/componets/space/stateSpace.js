import React from "react";
import {useSelector} from "react-redux";
import seconds from "../plugins/seconds";

function SpaceState(){
    const data = useSelector((state)=>{
        return state.spaceCps;
    })
    return (
        <>
            <div>Timer: {data.time / 1000}</div>
            <div>Click/s: {seconds(data.spaceCount, data.timer)}</div>
            <div>Score: {data.spaceCount}</div>
        </>
    )

}

export default SpaceState;