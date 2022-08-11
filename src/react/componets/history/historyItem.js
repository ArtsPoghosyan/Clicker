import React from "react";
import {useSelector} from "react-redux";
import {useState} from "react";
import HistoryItems from "./hisItems";
import "../../../scss/history.scss";

function HistItem(){
    const data = useSelector((state)=>{
        return {clicker:state.clicker, space: state.spaceCps, aim: state.aim};
    })
    const [value, setValue] = useState("clicker");

    return (
        <>
            <h1>History</h1><br></br>
            <div className="divButtons">
                <div id={value === "clicker" ? "backGr" : ""} onClick={()=>{setValue("clicker")}}>Clicker</div>
                <div id={value === "spaceBar" ? "backGr" : ""} onClick={()=>{setValue("spaceBar")}}>SpaceBar</div>
                <div id={value === "aim" ? "backGr" : ""} onClick={()=>{setValue("aim")}}>Aim</div>
            </div>
            <div className="divHistory">
                <div>
                    <div>Date</div>
                    <div>Time</div>
                    <div>CPS</div>
                    <div>Clicks</div>
                </div>
                {
                    value === "clicker"
                        ?   data.clicker.history.map((evt, index)=>{
                                return <HistoryItems state={evt} i={index} key={index}/>
                        })
                        :   value === "aim" 
                                ?   data.aim.history.map((evt, index)=>{
                                            return <HistoryItems state={evt} i={index} key={index}/>
                                    })
                                :   data.space.history.map((evt, index)=>{
                                        return <HistoryItems state={evt} i={index} key={index}/>
                                    })
                }
            </div>
        </>
    )
}

export default HistItem;