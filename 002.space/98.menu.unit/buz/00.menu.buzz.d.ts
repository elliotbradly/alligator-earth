export declare const initMenu: (cpy: MenuModel, bal: MenuBit, ste: State) => Promise<MenuModel>;
export declare const updateMenu: (cpy: MenuModel, bal: MenuBit, ste: State) => Promise<MenuModel>;
export declare const testMenu: (cpy: MenuModel, bal: MenuBit, ste: State) => Promise<MenuModel>;
export declare const closeMenu: (cpy: MenuModel, bal: MenuBit, ste: State) => Promise<MenuModel>;
export declare const createMenu: (cpy: MenuModel, bal: MenuBit, ste: State) => MenuModel;
import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
