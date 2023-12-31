export declare const initClock: (cpy: ClockModel, bal: ClockBit, ste: State) => ClockModel;
export declare const updateClock: (cpy: ClockModel, bal: ClockBit, ste: State) => Promise<ClockModel>;
export declare const readClock: (cpy: ClockModel, bal: ClockBit, ste: State) => Promise<ClockModel>;
export declare const writeClock: (cpy: ClockModel, bal: ClockBit, ste: State) => Promise<ClockModel>;
export declare const removeClock: (cpy: ClockModel, bal: ClockBit, ste: State) => Promise<ClockModel>;
export declare const createClock: (cpy: ClockModel, bal: ClockBit, ste: State) => Promise<ClockModel>;
export declare const deleteClock: (cpy: ClockModel, bal: ClockBit, ste: State) => Promise<ClockModel>;
export declare const pushClock: (cpy: ClockModel, bal: ClockBit, ste: State) => Promise<ClockModel>;
import { ClockModel } from "../clock.model";
import ClockBit from "../fce/clock.bit";
import State from "../../99.core/state";
