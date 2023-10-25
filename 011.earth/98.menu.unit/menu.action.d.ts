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
export declare const EARTH_MENU = "[Earth action] Earth Menu";
export declare class EarthMenu implements Action {
    bale: MenuBit;
    readonly type = "[Earth action] Earth Menu";
    constructor(bale: MenuBit);
}
export declare const COLOR_MENU = "[Color action] Color Menu";
export declare class ColorMenu implements Action {
    bale: MenuBit;
    readonly type = "[Color action] Color Menu";
    constructor(bale: MenuBit);
}
export declare const CLOCK_MENU = "[Clock action] Clock Menu";
export declare class ClockMenu implements Action {
    bale: MenuBit;
    readonly type = "[Clock action] Clock Menu";
    constructor(bale: MenuBit);
}
export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu | EarthMenu | ColorMenu | ClockMenu;
