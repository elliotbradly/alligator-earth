import { Action } from "../99.core/interface/action.interface";
import SpaceBit from "./fce/space.bit";
export declare const INIT_SPACE = "[Space action] Init Space";
export declare class InitSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Space action] Init Space";
    constructor(bale: SpaceBit);
}
export declare const UPDATE_SPACE = "[Space action] Update Space";
export declare class UpdateSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Space action] Update Space";
    constructor(bale: SpaceBit);
}
export declare const READY_SPACE = "[Ready action] Ready Space";
export declare class ReadySpace implements Action {
    bale: SpaceBit;
    readonly type = "[Ready action] Ready Space";
    constructor(bale: SpaceBit);
}
export declare const EDIT_SPACE = "[Edit action] Edit Space";
export declare class EditSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Edit action] Edit Space";
    constructor(bale: SpaceBit);
}
export declare const OPEN_SPACE = "[Open action] Open Space";
export declare class OpenSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Open action] Open Space";
    constructor(bale: SpaceBit);
}
export declare const RUN_SPACE = "[Run action] Run Space";
export declare class RunSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Run action] Run Space";
    constructor(bale: SpaceBit);
}
export declare const PATCH_SPACE = "[Patch action] Patch Space";
export declare class PatchSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Patch action] Patch Space";
    constructor(bale: SpaceBit);
}
export declare const MERGE_SPACE = "[Merge action] Merge Space";
export declare class MergeSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Merge action] Merge Space";
    constructor(bale: SpaceBit);
}
export declare const TEST_SPACE = "[Test action] Test Space";
export declare class TestSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Test action] Test Space";
    constructor(bale: SpaceBit);
}
export declare const CLOUD_SPACE = "[Cloud action] Cloud Space";
export declare class CloudSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Cloud action] Cloud Space";
    constructor(bale: SpaceBit);
}
export declare const BATCH_SPACE = "[Cloud action] Batch Space";
export declare class BatchSpace implements Action {
    bale: SpaceBit;
    readonly type = "[Cloud action] Batch Space";
    constructor(bale: SpaceBit);
}
export type Actions = InitSpace | UpdateSpace | ReadySpace | EditSpace | OpenSpace | RunSpace | PatchSpace | MergeSpace | TestSpace | CloudSpace | BatchSpace;
