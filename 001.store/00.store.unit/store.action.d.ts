import { Action } from "../99.core/interface/action.interface";
import StoreBit from "./fce/store.bit";
export declare const INIT_STORE = "[Store action] Init Store";
export declare class InitStore implements Action {
    bale: StoreBit;
    readonly type = "[Store action] Init Store";
    constructor(bale: StoreBit);
}
export declare const UPDATE_STORE = "[Store action] Update Store";
export declare class UpdateStore implements Action {
    bale: StoreBit;
    readonly type = "[Store action] Update Store";
    constructor(bale: StoreBit);
}
export declare const OPEN_STORE = "[Open action] Open Store";
export declare class OpenStore implements Action {
    bale: StoreBit;
    readonly type = "[Open action] Open Store";
    constructor(bale: StoreBit);
}
export declare const RUN_STORE = "[Run action] Run Store";
export declare class RunStore implements Action {
    bale: StoreBit;
    readonly type = "[Run action] Run Store";
    constructor(bale: StoreBit);
}
export declare const EDIT_STORE = "[Edit action] Edit Store";
export declare class EditStore implements Action {
    bale: StoreBit;
    readonly type = "[Edit action] Edit Store";
    constructor(bale: StoreBit);
}
export declare const PATCH_STORE = "[Patch action] Patch Store";
export declare class PatchStore implements Action {
    bale: StoreBit;
    readonly type = "[Patch action] Patch Store";
    constructor(bale: StoreBit);
}
export type Actions = InitStore | UpdateStore | OpenStore | RunStore | EditStore | PatchStore;
