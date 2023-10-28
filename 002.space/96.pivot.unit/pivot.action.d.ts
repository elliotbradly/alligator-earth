import { Action } from "../99.core/interface/action.interface";
import PivotBit from "./fce/pivot.bit";
export declare const INIT_PIVOT = "[Pivot action] Init Pivot";
export declare class InitPivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Init Pivot";
    constructor(bale: PivotBit);
}
export declare const UPDATE_PIVOT = "[Pivot action] Update Pivot";
export declare class UpdatePivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Update Pivot";
    constructor(bale: PivotBit);
}
export declare const OPEN_PIVOT = "[Pivot action] Open Pivot";
export declare class OpenPivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Open Pivot";
    constructor(bale: PivotBit);
}
export declare const RUN_PIVOT = "[Pivot action] Run Pivot";
export declare class RunPivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Run Pivot";
    constructor(bale: PivotBit);
}
export declare const EDIT_PIVOT = "[Pivot action] Edit Pivot";
export declare class EditPivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Edit Pivot";
    constructor(bale: PivotBit);
}
export declare const PATCH_PIVOT = "[Pivot action] Patch Pivot";
export declare class PatchPivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Patch Pivot";
    constructor(bale: PivotBit);
}
export declare const CLOUD_PIVOT = "[Pivot action] Cloud Pivot";
export declare class CloudPivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Cloud Pivot";
    constructor(bale: PivotBit);
}
export type Actions = InitPivot | UpdatePivot | OpenPivot | RunPivot | EditPivot | PatchPivot | CloudPivot;
