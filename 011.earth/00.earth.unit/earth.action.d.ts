import { Action } from "../99.core/interface/action.interface";
import EarthBit from "./fce/earth.bit";
export declare const INIT_EARTH = "[Earth action] Init Earth";
export declare class InitEarth implements Action {
    bale: EarthBit;
    readonly type = "[Earth action] Init Earth";
    constructor(bale: EarthBit);
}
export declare const UPDATE_EARTH = "[Earth action] Update Earth";
export declare class UpdateEarth implements Action {
    bale: EarthBit;
    readonly type = "[Earth action] Update Earth";
    constructor(bale: EarthBit);
}
export declare const OPEN_EARTH = "[Open action] Open Earth";
export declare class OpenEarth implements Action {
    bale: EarthBit;
    readonly type = "[Open action] Open Earth";
    constructor(bale: EarthBit);
}
export declare const READ_EARTH = "[Read action] Read Earth";
export declare class ReadEarth implements Action {
    bale: EarthBit;
    readonly type = "[Read action] Read Earth";
    constructor(bale: EarthBit);
}
export declare const WRITE_EARTH = "[Write action] Write Earth";
export declare class WriteEarth implements Action {
    bale: EarthBit;
    readonly type = "[Write action] Write Earth";
    constructor(bale: EarthBit);
}
export declare const CREATE_EARTH = "[Create action] Create Earth";
export declare class CreateEarth implements Action {
    bale: EarthBit;
    readonly type = "[Create action] Create Earth";
    constructor(bale: EarthBit);
}
export declare const PUSH_EARTH = "[Progress action] Push Earth";
export declare class PushEarth implements Action {
    bale: EarthBit;
    readonly type = "[Progress action] Push Earth";
    constructor(bale: EarthBit);
}
export declare const AUTO_EARTH = "[Run action] Auto Earth";
export declare class AutoEarth implements Action {
    bale: EarthBit;
    readonly type = "[Run action] Auto Earth";
    constructor(bale: EarthBit);
}
export type Actions = InitEarth | UpdateEarth | OpenEarth | ReadEarth | WriteEarth | CreateEarth | PushEarth | AutoEarth;
