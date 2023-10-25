import { Action } from "../99.core/interface/action.interface";
import SceneBit from "./fce/scene.bit";
export declare const INIT_SCENE = "[Scene action] Init Scene";
export declare class InitScene implements Action {
    bale: SceneBit;
    readonly type = "[Scene action] Init Scene";
    constructor(bale: SceneBit);
}
export declare const UPDATE_SCENE = "[Scene action] Update Scene";
export declare class UpdateScene implements Action {
    bale: SceneBit;
    readonly type = "[Scene action] Update Scene";
    constructor(bale: SceneBit);
}
export declare const HUNT_SCENE = "[Hunt action] Hunt Scene";
export declare class HuntScene implements Action {
    bale: SceneBit;
    readonly type = "[Hunt action] Hunt Scene";
    constructor(bale: SceneBit);
}
export declare const TITLE_SCENE = "[Title action] Title Scene";
export declare class TitleScene implements Action {
    bale: SceneBit;
    readonly type = "[Title action] Title Scene";
    constructor(bale: SceneBit);
}
export declare const PROLOGUE_SCENE = "[Prologue action] Prologue Scene";
export declare class PrologueScene implements Action {
    bale: SceneBit;
    readonly type = "[Prologue action] Prologue Scene";
    constructor(bale: SceneBit);
}
export declare const SPACE_SCENE = "[Space action] Space Scene";
export declare class SpaceScene implements Action {
    bale: SceneBit;
    readonly type = "[Space action] Space Scene";
    constructor(bale: SceneBit);
}
export type Actions = InitScene | UpdateScene | HuntScene | TitleScene | PrologueScene | SpaceScene;
