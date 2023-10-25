import { Action } from "../99.core/interface/action.interface";
import ColorBit from "./fce/color.bit";
export declare const INIT_COLOR = "[Color action] Init Color";
export declare class InitColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Init Color";
    constructor(bale: ColorBit);
}
export declare const UPDATE_COLOR = "[Color action] Update Color";
export declare class UpdateColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Update Color";
    constructor(bale: ColorBit);
}
export declare const FETCH_COLOR = "[Color action] Fetch Color";
export declare class FetchColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Fetch Color";
    constructor(bale: ColorBit);
}
export declare const SELECT_COLOR = "[Color action] Select Color";
export declare class SelectColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Select Color";
    constructor(bale: ColorBit);
}
export declare const MATCH_COLOR = "[Color action] Match Color";
export declare class MatchColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Match Color";
    constructor(bale: ColorBit);
}
export declare const DEGREE_COLOR = "[Color action] Degree Color";
export declare class DegreeColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Degree Color";
    constructor(bale: ColorBit);
}
export declare const READ_COLOR = "[Color action] Read Color";
export declare class ReadColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Read Color";
    constructor(bale: ColorBit);
}
export declare const LIST_COLOR = "[List action] List Color";
export declare class ListColor implements Action {
    bale: ColorBit;
    readonly type = "[List action] List Color";
    constructor(bale: ColorBit);
}
export type Actions = InitColor | DegreeColor | ReadColor | MatchColor | SelectColor | FetchColor | UpdateColor | ListColor;
