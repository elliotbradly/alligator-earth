import { Action } from "../99.core/interface/action.interface";
import PlotBit from "./fce/plot.bit";
export declare const INIT_PLOT = "[Plot action] Init Plot";
export declare class InitPlot implements Action {
    bale: PlotBit;
    readonly type = "[Plot action] Init Plot";
    constructor(bale: PlotBit);
}
export declare const UPDATE_PLOT = "[Plot action] Update Plot";
export declare class UpdatePlot implements Action {
    bale: PlotBit;
    readonly type = "[Plot action] Update Plot";
    constructor(bale: PlotBit);
}
export declare const PUSH_PLOT = "[Push action] Push Plot";
export declare class PushPlot implements Action {
    bale: PlotBit;
    readonly type = "[Push action] Push Plot";
    constructor(bale: PlotBit);
}
export declare const OPEN_PLOT = "[Open action] Open Plot";
export declare class OpenPlot implements Action {
    bale: PlotBit;
    readonly type = "[Open action] Open Plot";
    constructor(bale: PlotBit);
}
export declare const READ_PLOT = "[Read action] Read Plot";
export declare class ReadPlot implements Action {
    bale: PlotBit;
    readonly type = "[Read action] Read Plot";
    constructor(bale: PlotBit);
}
export declare const WRITE_PLOT = "[Write action] Write Plot";
export declare class WritePlot implements Action {
    bale: PlotBit;
    readonly type = "[Write action] Write Plot";
    constructor(bale: PlotBit);
}
export declare const CREATE_PLOT = "[Create action] Create Plot";
export declare class CreatePlot implements Action {
    bale: PlotBit;
    readonly type = "[Create action] Create Plot";
    constructor(bale: PlotBit);
}
export type Actions = InitPlot | UpdatePlot | PushPlot | OpenPlot | ReadPlot | WritePlot | CreatePlot;
