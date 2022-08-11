import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { addCount, removeCount, refeshCount } from "../../../redux/slice/counterSlice/CounterReducer";

function CounterClicker(){
    const data = useSelector((state)=>{
        return state.counter;
    });
    const dispatch = useDispatch();

    return (
        <>
            <div className="divClick" id="rowsDivs">
                <div><div onClick={()=>{dispatch(removeCount())}}>-</div></div>
                <div><h1>{data.count}</h1><div onClick={()=>{dispatch(refeshCount())}}><i class="fas fa-undo"></i></div></div>
                <div><div onClick={()=>{dispatch(addCount())}}>+</div></div>
            </div>       
        </>
    )
}

export default CounterClicker;