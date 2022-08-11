import React from "react";
import seconds from "../plugins/seconds";
import TimeRender  from "../plugins/timeRender";
import Proverka from "../plugins/proverka";

function HistoryItems({state, i}){
    return (
        <div className="backgroundDivs" id={Proverka(i)}>
            <div>{TimeRender(state.date)}</div>
            <div>{state.timer / 1000} sec</div>
            <div>{seconds((state.spaceCount || state.clickCount || state.aimCount), state.timer)}</div>
            <div>{(state.spaceCount || state.clickCount || state.aimCount) === undefined ? 0 : state.spaceCount || state.clickCount || state.aimCount}</div>
        </div>
    )
}

export default HistoryItems;