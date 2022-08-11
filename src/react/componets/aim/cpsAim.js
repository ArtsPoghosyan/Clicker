import React from "react";
import AimState from "./aimState";
import AimCps from "./aimCps";
import "../../../scss/cps.scss";

function CpsAim(){
    return(
        <>
            <h1>Aim Trainer</h1><br></br>
            <div className="divCps">
                <div className="divCpsBorder">
                    <AimCps />
                </div>
                <div className="divState">
                    <AimState />
                </div>
            </div>
        </>
    )
}

export default CpsAim;