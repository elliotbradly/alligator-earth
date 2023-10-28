import { Action } from "../99.core/interface/action.interface";
import MenuBit from "./fce/menu.bit";
export declare const INIT_MENU = "[Menu action] Init Menu";
export declare class InitMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Init Menu";
    constructor(bale: MenuBit);
}
export declare const UPDATE_MENU = "[Menu action] Update Menu";
export declare class UpdateMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Update Menu";
    constructor(bale: MenuBit);
}
export declare const TEST_MENU = "[Menu action] Test Menu";
export declare class TestMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Test Menu";
    constructor(bale: MenuBit);
}
export declare const CLOSE_MENU = "[Menu action] Close Menu";
export declare class CloseMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Close Menu";
    constructor(bale: MenuBit);
}
export declare const TIME_MENU = "[Time action] Time Menu";
export declare class TimeMenu implements Action {
    bale: MenuBit;
    readonly type = "[Time action] Time Menu";
    constructor(bale: MenuBit);
}
export declare const FOCUS_MENU = "[Focus action] Focus Menu";
export declare class FocusMenu implements Action {
    bale: MenuBit;
    readonly type = "[Focus action] Focus Menu";
    constructor(bale: MenuBit);
}
export declare const FOCUS_PLAY_MENU = "[Focus action] Focus Play Menu";
export declare class FocusPlayMenu implements Action {
    bale: MenuBit;
    readonly type = "[Focus action] Focus Play Menu";
    constructor(bale: MenuBit);
}
export declare const CREATE_MENU = "[Create action] Create Menu";
export declare class CreateMenu implements Action {
    bale: MenuBit;
    readonly type = "[Create action] Create Menu";
    constructor(bale: MenuBit);
}
export declare const HEXMAP_MENU = "[Hexmap action] Hexmap Menu";
export declare class HexmapMenu implements Action {
    bale: MenuBit;
    readonly type = "[Hexmap action] Hexmap Menu";
    constructor(bale: MenuBit);
}
export declare const CREATE_HEXMAP_MENU = "[Hexmap action] Create Hexmap Menu";
export declare class CreateHexmapMenu implements Action {
    bale: MenuBit;
    readonly type = "[Hexmap action] Create Hexmap Menu";
    constructor(bale: MenuBit);
}
export declare const RENDER_MENU = "[Render action] Render Menu";
export declare class RenderMenu implements Action {
    bale: MenuBit;
    readonly type = "[Render action] Render Menu";
    constructor(bale: MenuBit);
}
export declare const YIELD_MENU = "[Render action] Yield Menu";
export declare class YieldMenu implements Action {
    bale: MenuBit;
    readonly type = "[Render action] Yield Menu";
    constructor(bale: MenuBit);
}
export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu | TimeMenu | FocusMenu | CreateMenu | HexmapMenu | RenderMenu | CreateHexmapMenu | YieldMenu | FocusPlayMenu;
