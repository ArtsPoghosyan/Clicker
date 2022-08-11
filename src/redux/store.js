import { createStore, combineReducers, applyMiddleware } from "redux";
import { aim, initalAim } from "./slice/aimSlice/AimReducer";
import { clicker, initalClicker } from "./slice/calcSlice/ClickerReducer";
import { initalCounter, counter } from "./slice/counterSlice/CounterReducer";
import { initalSpace, spaceCps } from "./slice/spaceSlice/SpaceReducer";

const store = createStore(combineReducers({
    clicker,
    spaceCps,
    counter,
    aim,
}), {
    clicker: initalClicker,
    spaceCps: initalSpace,
    counter: initalCounter,
    aim: initalAim,
});

export default store;