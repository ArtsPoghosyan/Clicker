import React from "react";
import Clicker from "./cps";
import State from "./state";
import "../../../scss/cps.scss";

function Cps(){
    return(
        <>
            <h1>Click CPS test</h1><br></br>
            <div className="divCps">
                <div className="divCpsBorder">
                    <Clicker />
                </div>
                <div className="divState">
                    <State />
                </div>
            </div>
        </>
    )
}

export default Cps;