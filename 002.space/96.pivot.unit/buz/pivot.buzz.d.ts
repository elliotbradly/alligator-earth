export declare const initPivot: (cpy: PivotModel, bal: PivotBit, ste: State) => Promise<PivotModel>;
export declare const updatePivot: (cpy: PivotModel, bal: PivotBit, ste: State) => PivotModel;
export declare const openPivot: (cpy: PivotModel, bal: PivotBit, ste: State) => Promise<PivotModel>;
export declare const runPivot: (cpy: PivotModel, bal: PivotBit, ste: State) => Promise<PivotModel>;
export declare const editPivot: (cpy: PivotModel, bal: PivotBit, ste: State) => PivotModel;
export declare const cloudPivot: (cpy: PivotModel, bal: PivotBit, ste: State) => Promise<PivotModel>;
export declare const patchPivot: (cpy: PivotModel, bal: PivotBit, ste: State) => PivotModel;
import { PivotModel } from "../pivot.model";
import PivotBit from "../fce/pivot.bit";
import State from "../../99.core/state";
