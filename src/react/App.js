import React from "react";
import { Provider } from "react-redux";
import Main from "./componets/Main";
import SpaceBar from "./componets/space/Space";
import CounterBar from "./componets/counter/Counter";
import History from "./componets/history/history";
import AimTrainer from "./componets/aim/Aim";
import store from "../redux/store";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App(){
    return(
        <Router> 
            <div className="mainDiv">
            <Routes>
                <Route path="/" element={<Provider store={store}><Main /></Provider>} />
                <Route path="/spacebar-counter" element={<Provider store={store}><SpaceBar /></Provider>} />
                <Route path="/clicker-counter" element={<Provider store={store}><CounterBar /></Provider>}/>
                <Route path="/aim-trainer" element={<Provider store={store}><AimTrainer /></Provider>}/>
                <Route path="/history" element={<Provider store={store}><History /></Provider>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            </div>
        </Router>
    )
}

export default App;