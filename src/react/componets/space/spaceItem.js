import React from "react";
import SpaceCps from "./cpsSpac";
import SpaceState from "./stateSpace";
import "../../../scss/cps.scss";

function CpsSpace(){
    return(
        <>
            <h1>Spacebar counter</h1><br></br>
            <div className="divCps">
                <div className="divCpsBorder">
                    <SpaceCps />
                </div>
                <div className="divState">
                    <SpaceState />
                </div>
            </div>
        </>
    )
}

export default CpsSpace;