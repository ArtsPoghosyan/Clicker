import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { startSpace, finishSpace, addCountSpace, addTimeSpace, refeshSpace, setTimerSpace } from "../../../redux/slice/spaceSlice/SpaceReducer";
import seconds from "../plugins/seconds";

function SpaceCps(){
    var data = useSelector((state)=>{
        return state.spaceCps;
    });
    
    const dispatch = useDispatch();
    const timee = function(date){
        if(date.time >= date.timer){
            dispatch(finishSpace());
        }else{
            setTimeout(() => {
                timee({time: date.time + 100, timer: date.timer});
            }, 100);
            dispatch(addTimeSpace());
        }
    }
    const middle = function(state){
        if(state.start === true){
            dispatch(addCountSpace());
        }else{
            setTimeout(() => {
                timee(state);
            }, 100);
            dispatch(startSpace()); 
        }
    }
    
    return (
        <>
            <input type="text" className="divClick2" placeholder={
                    data.start === "start" 
                            ?   "Click and start pressed the 'Space bar'"
                            :   data.start === false
                                    ?   "Click and start pressed the 'Space bar'"
                                    :   ""
                }
                value={data.start === true ? "" : "Click and start pressed the 'Space bar'"}
                onChange={(evt)=>{
                    let x = evt.target.value;
                    x = x.substring(x.length - 1, x.length);
                    if( data.start === true){
                        if(x === " "){
                            middle(data);
                        }
                    }
                }}
                onClick={()=>{
                    if(data.start === "start"){
                        middle(data);
                    }
                }}
            />
            {
                data.start === false    
                    ?<div className="divFinishBlock">
                        <div className="divFinish"></div>
                            <div className="ratingBlock">
                                <div className="closeDiv"><span onClick={()=>{dispatch(refeshSpace())}}>+</span></div>
                                <h1>Check Your Score</h1>
                                <p>Your pressed score is {seconds(data.spaceCount, data.timer)} CPS.</p>
                                <p>{data.spaceCount} pressed in {data.timer / 1000} seconds.</p>
                                <div className="tryAgain" onClick={()=>{dispatch(refeshSpace())}}>TRY AGAIN <i aria-hidden="true" class="fa fa-rotate-right"></i></div>
                                <h2>Take Next Level Challenge</h2>
                                <div className="divMore">
                                    <div onClick={()=>{
                                        dispatch(setTimerSpace(1000));  
                                    }}>10 SECOND CHALLANGE</div>
                                    <div onClick={()=>{
                                        dispatch(setTimerSpace(100000));   
                                    }}>100 SECOND CHALLANGE</div>
                                </div>
                            </div>
                     </div>
                    :   ""
            }
            
        </>
    )
}

export default SpaceCps;