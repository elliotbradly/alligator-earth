import { Action } from "../99.core/interface/action.interface";
import BeingBit from "./fce/being-pivot.bit";
export declare const INIT_BEING = "[Being action] Init Being";
export declare class InitBeing implements Action {
    bale: BeingBit;
    readonly type = "[Being action] Init Being";
    constructor(bale: BeingBit);
}
export declare const UPDATE_BEING = "[Being action] Update Being";
export declare class UpdateBeing implements Action {
    bale: BeingBit;
    readonly type = "[Being action] Update Being";
    constructor(bale: BeingBit);
}
export declare const OPEN_BEING = "[Open action] Open Being";
export declare class OpenBeing implements Action {
    bale: BeingBit;
    readonly type = "[Open action] Open Being";
    constructor(bale: BeingBit);
}
export declare const CREATE_BEING = "[Create action] Create Being";
export declare class CreateBeing implements Action {
    bale: BeingBit;
    readonly type = "[Create action] Create Being";
    constructor(bale: BeingBit);
}
export declare const ACCESS_BEING = "[Access action] Access Being";
export declare class AccessBeing implements Action {
    bale: BeingBit;
    readonly type = "[Access action] Access Being";
    constructor(bale: BeingBit);
}
export declare const WRITE_BEING = "[Write action] Write Being";
export declare class WriteBeing implements Action {
    bale: BeingBit;
    readonly type = "[Write action] Write Being";
    constructor(bale: BeingBit);
}
export declare const READ_BEING = "[Read action] Read Being";
export declare class ReadBeing implements Action {
    bale: BeingBit;
    readonly type = "[Read action] Read Being";
    constructor(bale: BeingBit);
}
export declare const AGE_BEING = "[Age action] Age Being";
export declare class AgeBeing implements Action {
    bale: BeingBit;
    readonly type = "[Age action] Age Being";
    constructor(bale: BeingBit);
}
export declare const ADVANCE_BEING = "[Advance action] Advance Being";
export declare class AdvanceBeing implements Action {
    bale: BeingBit;
    readonly type = "[Advance action] Advance Being";
    constructor(bale: BeingBit);
}
export declare const LOAD_BEING = "[Load action] Load Being";
export declare class LoadBeing implements Action {
    bale: BeingBit;
    readonly type = "[Load action] Load Being";
    constructor(bale: BeingBit);
}
export type Actions = InitBeing | UpdateBeing | OpenBeing | CreateBeing | AccessBeing | WriteBeing | ReadBeing | AgeBeing | AdvanceBeing | LoadBeing;
