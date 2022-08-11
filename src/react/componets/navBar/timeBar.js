import React, {memo} from "react";
import "../../../scss/timeBar.scss";
import { useSelector, useDispatch} from "react-redux";
import { setTimer } from "../../../redux/slice/calcSlice/ClickerReducer";
import { setTimerSpace } from "../../../redux/slice/spaceSlice/SpaceReducer";
import { setTimerAim } from "../../../redux/slice/aimSlice/AimReducer";

export default memo(function TimeBar({path}){
    const data = useSelector((state)=>{
        if(path === "cps"){
            return state.clicker;
        }else if(path === "spaceCps"){
            return state.spaceCps;
        }else if(path === "aim"){
            return state.aim;
        }
    });
    const dispatch = useDispatch();
    return (
        <div className="timeBar">
            <div>SEC</div>
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                    dispatch(setTimer(1000));
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(1000))
                }else if(path === "aim"){
                    dispatch(setTimerAim(1000))
                }}}} 
                id={data.timer === 1000 ? "bgCol" : ""}>1</div>   
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                dispatch(setTimer(2000))
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(2000))
                }else if(path === "aim"){
                    dispatch(setTimerAim(2000))
                }}}} 
                id={data.timer === 2000 ? "bgCol" : ""}>2</div>
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                dispatch(setTimer(5000))
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(5000))
                }else if(path === "aim"){
                    dispatch(setTimerAim(5000))
                }}}} 
                id={data.timer === 5000 ? "bgCol" : ""}>5</div>
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                dispatch(setTimer(10000))
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(10000))
                }else if(path === "aim"){
                    dispatch(setTimerAim(10000))
                }}}} 
                id={data.timer === 10000 ? "bgCol" : ""}>10</div>
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                dispatch(setTimer(15000))
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(15000));
                }else if(path === "aim"){
                    dispatch(setTimerAim(15000))
                }}}}
                id={data.timer === 15000 ? "bgCol" : ""}>15</div>
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                dispatch(setTimer(20000))
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(20000))
                }else if(path === "aim"){
                    dispatch(setTimerAim(20000))
                }}}} 
                id={data.timer=== 20000 ? "bgCol" : ""}>20</div>
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                dispatch(setTimer(30000))
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(30000))
                }else if(path === "aim"){
                    dispatch(setTimerAim(30000))
                }}}} 
                id={data.timer === 30000 ? "bgCol" : ""}>30</div>
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                dispatch(setTimer(50000))
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(50000))
                }else if(path === "aim"){
                    dispatch(setTimerAim(50000))
                }}}} 
                id={data.timer === 50000 ? "bgCol" : ""}>50</div>
            <div onClick={()=>{if(data.start !== true){
                if(path === "cps"){
                dispatch(setTimer(100000))
                }else if(path === "spaceCps"){
                    dispatch(setTimerSpace(100000))
                }else if(path === "aim"){
                    dispatch(setTimerAim(100000))
                }}}} 
                id={data.timer === 100000 ? "bgCol" : ""}>100</div>
        </div>
    )
})
