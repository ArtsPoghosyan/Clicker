import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { start, finish, addCount, addTime, refesh, setTimer } from "../../../redux/slice/calcSlice/ClickerReducer";
import seconds from "../plugins/seconds";

function Clicker(){
    const data = useSelector((state)=>{
        return state.clicker;
    });
    const dispatch = useDispatch();
    function timee(date){
        if(date.time >= date.timer){
            dispatch(finish());
        }else{
            setTimeout(() => {
                timee({time: date.time + 100, timer: date.timer});
            }, 100);
            dispatch(addTime());
        }
    }
    function middle(state){
        if(state.start === true){
            dispatch(addCount());
        }else{
            setTimeout(() => {
                timee(state);
            }, 10);
            dispatch(start()); 
        }
    }
    return (
        <>
            <div className="divClick" onClick={()=>{middle(data)}}>
                {
                    data.start === "start" 
                            ?   "Click here to start the CPS test"
                            :   data.start === false
                                    ?   "Click here to start the CPS test"
                                    :   ""
                }
            </div>
            {
                data.start === false    
                    ?<div className="divFinishBlock">
                        <div className="divFinish"></div>
                            <div className="ratingBlock">
                                <div className="closeDiv"><span onClick={()=>{dispatch(refesh())}}>+</span></div>
                                <h1>Check Your Score</h1>
                                <p>Your click score is {seconds(data.clickCount, data.timer)} CPS.</p>
                                <p>{data.clickCount} clicks in {data.timer / 1000} seconds.</p>
                                <div className="tryAgain" onClick={()=>{dispatch(refesh())}}>TRY AGAIN <i aria-hidden="true" class="fa fa-rotate-right"></i></div>
                                <h2>Take Next Level Challenge</h2>
                                <div className="divMore">
                                    <div onClick={()=>{
                                        dispatch(setTimer(1000));  
                                    }}>10 SECOND CHALLANGE</div>
                                    <div onClick={()=>{
                                        dispatch(setTimer(100000));   
                                    }}>100 SECOND CHALLANGE</div>
                                </div>
                            </div>
                     </div>
                    :   ""
            }
            
        </>
    )

}

export default Clicker;