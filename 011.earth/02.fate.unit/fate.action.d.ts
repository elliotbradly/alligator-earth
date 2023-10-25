import { Action } from "../99.core/interface/action.interface";
import FateBit from "./fce/fate.bit";
export declare const INIT_FATE = "[Fate action] Init Fate";
export declare class InitFate implements Action {
    bale: FateBit;
    readonly type = "[Fate action] Init Fate";
    constructor(bale: FateBit);
}
export declare const UPDATE_FATE = "[Fate action] Update Fate";
export declare class UpdateFate implements Action {
    bale: FateBit;
    readonly type = "[Fate action] Update Fate";
    constructor(bale: FateBit);
}
export declare const INTEGER_FATE = "[Integer action] Integer Fate";
export declare class IntegerFate implements Action {
    bale: FateBit;
    readonly type = "[Integer action] Integer Fate";
    constructor(bale: FateBit);
}
export declare const APPLE_FATE = "[Apple action] Apple Fate";
export declare class AppleFate implements Action {
    bale: FateBit;
    readonly type = "[Apple action] Apple Fate";
    constructor(bale: FateBit);
}
export type Actions = InitFate | UpdateFate | IntegerFate | AppleFate;
