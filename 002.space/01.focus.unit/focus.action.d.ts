import { Action } from "../99.core/interface/action.interface";
import FocusBit from "./fce/focus.bit";
export declare const INIT_FOCUS = "[Focus action] Init Focus";
export declare class InitFocus implements Action {
    bale: FocusBit;
    readonly type = "[Focus action] Init Focus";
    constructor(bale: FocusBit);
}
export declare const AWAKE_FOCUS = "[Focus action] Awake Focus";
export declare class AwakeFocus implements Action {
    bale: FocusBit;
    readonly type = "[Focus action] Awake Focus";
    constructor(bale: FocusBit);
}
export declare const UPDATE_FOCUS = "[Focus action] Update Focus";
export declare class UpdateFocus implements Action {
    bale: FocusBit;
    readonly type = "[Focus action] Update Focus";
    constructor(bale: FocusBit);
}
export declare const OPEN_FOCUS = "[Focus action] Open Focus";
export declare class OpenFocus implements Action {
    bale: FocusBit;
    readonly type = "[Focus action] Open Focus";
    constructor(bale: FocusBit);
}
export declare const CREATE_FOCUS = "[Focus action] Create Focus";
export declare class CreateFocus implements Action {
    bale: FocusBit;
    readonly type = "[Focus action] Create Focus";
    constructor(bale: FocusBit);
}
export declare const READ_FOCUS = "[Read action] Read Focus";
export declare class ReadFocus implements Action {
    bale: FocusBit;
    readonly type = "[Read action] Read Focus";
    constructor(bale: FocusBit);
}
export declare const WRITE_FOCUS = "[Write action] Write Focus";
export declare class WriteFocus implements Action {
    bale: FocusBit;
    readonly type = "[Write action] Write Focus";
    constructor(bale: FocusBit);
}
export declare const REMOVE_FOCUS = "[Remove action] Remove Focus";
export declare class RemoveFocus implements Action {
    bale: FocusBit;
    readonly type = "[Remove action] Remove Focus";
    constructor(bale: FocusBit);
}
export declare const DELETE_FOCUS = "[Delete action] Delete Focus";
export declare class DeleteFocus implements Action {
    bale: FocusBit;
    readonly type = "[Delete action] Delete Focus";
    constructor(bale: FocusBit);
}
export declare const CORNER_FOCUS = "[Corner action] Corner Focus";
export declare class CornerFocus implements Action {
    bale: FocusBit;
    readonly type = "[Corner action] Corner Focus";
    constructor(bale: FocusBit);
}
export declare const LIST_FOCUS = "[List action] List Focus";
export declare class ListFocus implements Action {
    bale: FocusBit;
    readonly type = "[List action] List Focus";
    constructor(bale: FocusBit);
}
export declare const SPIN_RIGHT_FOCUS = "[List action] Spin Left Focus";
export declare class SpinRightFocus implements Action {
    bale: FocusBit;
    readonly type = "[List action] Spin Left Focus";
    constructor(bale: FocusBit);
}
export declare const SPIN_LEFT_FOCUS = "[List action] Spin Right Focus";
export declare class SpinLeftFocus implements Action {
    bale: FocusBit;
    readonly type = "[List action] Spin Right Focus";
    constructor(bale: FocusBit);
}
export declare const FORWARD_FOCUS = "[List action] Forward Focus";
export declare class ForwardFocus implements Action {
    bale: FocusBit;
    readonly type = "[List action] Forward Focus";
    constructor(bale: FocusBit);
}
export declare const BACKWARD_FOCUS = "[List action] Backward Focus";
export declare class BackwardFocus implements Action {
    bale: FocusBit;
    readonly type = "[List action] Backward Focus";
    constructor(bale: FocusBit);
}
export declare const CENTER_FOCUS = "[List action] Center Focus";
export declare class CenterFocus implements Action {
    bale: FocusBit;
    readonly type = "[List action] Center Focus";
    constructor(bale: FocusBit);
}
export declare const BOND_FOCUS = "[Bond action] Bond Focus";
export declare class BondFocus implements Action {
    bale: FocusBit;
    readonly type = "[Bond action] Bond Focus";
    constructor(bale: FocusBit);
}
export declare const LOCATE_FOCUS = "[Locate action] Locate Focus";
export declare class LocateFocus implements Action {
    bale: FocusBit;
    readonly type = "[Locate action] Locate Focus";
    constructor(bale: FocusBit);
}
export declare const VISION_FOCUS = "[Vision action] Vision Focus";
export declare class VisionFocus implements Action {
    bale: FocusBit;
    readonly type = "[Vision action] Vision Focus";
    constructor(bale: FocusBit);
}
export declare const SELECT_FOCUS = "[Select action] Select Focus";
export declare class SelectFocus implements Action {
    bale: FocusBit;
    readonly type = "[Select action] Select Focus";
    constructor(bale: FocusBit);
}
export declare const MODEL_FOCUS = "[Select action] Model Focus";
export declare class ModelFocus implements Action {
    bale: FocusBit;
    readonly type = "[Select action] Model Focus";
    constructor(bale: FocusBit);
}
export type Actions = OpenFocus | InitFocus | UpdateFocus | CreateFocus | ReadFocus | WriteFocus | RemoveFocus | DeleteFocus | CornerFocus | ListFocus | SpinLeftFocus | SpinRightFocus | BackwardFocus | ForwardFocus | CenterFocus | BondFocus | LocateFocus | VisionFocus | SelectFocus | AwakeFocus | ModelFocus;
