import { Action } from "../99.core/interface/action.interface";
import GameBit from "./fce/game.bit";
export declare const INIT_GAME = "[Game action] Init Game";
export declare class InitGame implements Action {
    bale: GameBit;
    readonly type = "[Game action] Init Game";
    constructor(bale: GameBit);
}
export declare const UPDATE_GAME = "[Game action] Update Game";
export declare class UpdateGame implements Action {
    bale: GameBit;
    readonly type = "[Game action] Update Game";
    constructor(bale: GameBit);
}
export declare const OPEN_GAME = "[Open action] Open Game";
export declare class OpenGame implements Action {
    bale: GameBit;
    readonly type = "[Open action] Open Game";
    constructor(bale: GameBit);
}
export declare const RUN_GAME = "[Run action] Run Game";
export declare class RunGame implements Action {
    bale: GameBit;
    readonly type = "[Run action] Run Game";
    constructor(bale: GameBit);
}
export declare const EDIT_GAME = "[Edit action] Edit Game";
export declare class EditGame implements Action {
    bale: GameBit;
    readonly type = "[Edit action] Edit Game";
    constructor(bale: GameBit);
}
export declare const PATCH_GAME = "[Patch action] Patch Game";
export declare class PatchGame implements Action {
    bale: GameBit;
    readonly type = "[Patch action] Patch Game";
    constructor(bale: GameBit);
}
export type Actions = InitGame | UpdateGame | OpenGame | RunGame | EditGame | PatchGame;
