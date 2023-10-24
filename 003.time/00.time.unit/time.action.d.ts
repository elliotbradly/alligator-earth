import { Action } from "../99.core/interface/action.interface";
import TimeBit from "./fce/time.bit";
export declare const INIT_TIME = "[Time action] Init Time";
export declare class InitTime implements Action {
    bale: TimeBit;
    readonly type = "[Time action] Init Time";
    constructor(bale: TimeBit);
}
export declare const UPDATE_TIME = "[Time action] Update Time";
export declare class UpdateTime implements Action {
    bale: TimeBit;
    readonly type = "[Time action] Update Time";
    constructor(bale: TimeBit);
}
export declare const OPEN_TIME = "[Open action] Open Time";
export declare class OpenTime implements Action {
    bale: TimeBit;
    readonly type = "[Open action] Open Time";
    constructor(bale: TimeBit);
}
export declare const RUN_TIME = "[Run action] Run Time";
export declare class RunTime implements Action {
    bale: TimeBit;
    readonly type = "[Run action] Run Time";
    constructor(bale: TimeBit);
}
export declare const EDIT_TIME = "[Edit action] Edit Time";
export declare class EditTime implements Action {
    bale: TimeBit;
    readonly type = "[Edit action] Edit Time";
    constructor(bale: TimeBit);
}
export declare const PATCH_TIME = "[Patch action] Patch Time";
export declare class PatchTime implements Action {
    bale: TimeBit;
    readonly type = "[Patch action] Patch Time";
    constructor(bale: TimeBit);
}
export declare const CLOUD_TIME = "[Cloud action] Cloud Time";
export declare class CloudTime implements Action {
    bale: TimeBit;
    readonly type = "[Cloud action] Cloud Time";
    constructor(bale: TimeBit);
}
export type Actions = InitTime | UpdateTime | OpenTime | RunTime | EditTime | PatchTime | CloudTime;
