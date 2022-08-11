import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import random from "../plugins/randomNumbers";
import { startAim, finishAim, addCountAim, addTimeAim, refeshAim, setTimerAim } from "../../../redux/slice/aimSlice/AimReducer";
import seconds from "../plugins/seconds";

function AimCps(){
    var data = useSelector((state)=>{
        return state.aim;
    });
    
    const dispatch = useDispatch();
    const timee = function(date){
        if(date.time >= date.timer){
            dispatch(finishAim());
        }else{
            setTimeout(() => {
                timee({time: date.time + 100, timer: date.timer});
            }, 100);
            dispatch(addTimeAim());
        }
    }
    const middle = function(state){
        if(state.start === true){
            dispatch(addCountAim());
        }else{
            setTimeout(() => {
                timee(state);
            }, 100);
            dispatch(startAim()); 
        }
    }
    
    return (
        <>
            <div className="divClick" id={data.start === true ? "divAimCps" : ""} onClick={()=>{
                if(data.start === "start"){
                    middle(data);
                }
            }}>
                {
                    data.start === "start" 
                            ?   "Click here to start the AIM test"
                            :   data.start === false
                                    ?   "Click here to start the AIM test"
                                    :   ""
                }
                {
                    data.start === true 
                        ?   <div style={data.styles} onClick={()=>{dispatch(addCountAim())}}></div>
                        : ""
                }
            </div>
            {
                data.start === false    
                    ?<div className="divFinishBlock">
                        <div className="divFinish"></div>
                            <div className="ratingBlock">
                                <div className="closeDiv"><span onClick={()=>{dispatch(refeshAim())}}>+</span></div>
                                <h1>Check Your Score</h1>
                                <p>Your click score is {seconds(data.aimCount, data.timer)}%</p>
                                <p>You hit {data.aimCount}x the target in {data.timer / 1000} seconds.</p>
                                <div className="tryAgain" onClick={()=>{dispatch(refeshAim())}}>TRY AGAIN <i aria-hidden="true" class="fa fa-rotate-right"></i></div>
                                <h2>Take Next Level Challenge</h2>
                                <div className="divMore">
                                    <div onClick={()=>{
                                        dispatch(setTimerAim(1000));  
                                    }}>10 SECOND CHALLANGE</div>
                                    <div onClick={()=>{
                                        dispatch(setTimerAim(100000));   
                                    }}>100 SECOND CHALLANGE</div>
                                </div>
                            </div>
                     </div>
                    :   ""
            }
            
        </>
    )
}

export default AimCps;