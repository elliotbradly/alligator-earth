import { Action } from "../99.core/interface/action.interface";
import HexmapBit from "./fce/hexmap.bit";
export declare const INIT_HEXMAP = "[Hexmap action] Init Hexmap";
export declare class InitHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Hexmap action] Init Hexmap";
    constructor(bale: HexmapBit);
}
export declare const UPDATE_HEXMAP = "[Hexmap action] Update Hexmap";
export declare class UpdateHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Hexmap action] Update Hexmap";
    constructor(bale: HexmapBit);
}
export declare const OPEN_HEXMAP = "[Hexmap action] Open Hexmap";
export declare class OpenHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Hexmap action] Open Hexmap";
    constructor(bale: HexmapBit);
}
export declare const READ_HEXMAP = "[Read action] Read Hexmap";
export declare class ReadHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Read action] Read Hexmap";
    constructor(bale: HexmapBit);
}
export declare const WRITE_HEXMAP = "[Write action] Write Hexmap";
export declare class WriteHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Write action] Write Hexmap";
    constructor(bale: HexmapBit);
}
export declare const CREATE_HEXMAP = "[Create action] Create Hexmap";
export declare class CreateHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Create action] Create Hexmap";
    constructor(bale: HexmapBit);
}
export declare const COPY_HEXMAP = "[Copy action] Copy Hexmap";
export declare class CopyHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Copy action] Copy Hexmap";
    constructor(bale: HexmapBit);
}
export declare const ATLAS_HEXMAP = "[Atlas action] Atlas Hexmap";
export declare class AtlasHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Atlas action] Atlas Hexmap";
    constructor(bale: HexmapBit);
}
export declare const GEOJSON_HEXMAP = "[Geojson action] Geojson Hexmap";
export declare class GeojsonHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Geojson action] Geojson Hexmap";
    constructor(bale: HexmapBit);
}
export declare const TOOL_HEXMAP = "[Tool action] Tool Hexmap";
export declare class ToolHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Tool action] Tool Hexmap";
    constructor(bale: HexmapBit);
}
export declare const SAVE_HEXMAP = "[Save action] Save Hexmap";
export declare class SaveHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Save action] Save Hexmap";
    constructor(bale: HexmapBit);
}
export declare const STORE_HEXMAP = "[Store action] Store Hexmap";
export declare class StoreHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Store action] Store Hexmap";
    constructor(bale: HexmapBit);
}
export declare const SHAPE_HEXMAP = "[Shape action] Shape Hexmap";
export declare class ShapeHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Shape action] Shape Hexmap";
    constructor(bale: HexmapBit);
}
export declare const LOAD_HEXMAP = "[Load action] Load Hexmap";
export declare class LoadHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Load action] Load Hexmap";
    constructor(bale: HexmapBit);
}
export declare const LIST_HEXMAP = "[List action] List Hexmap";
export declare class ListHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[List action] List Hexmap";
    constructor(bale: HexmapBit);
}
export declare const REPLACE_HEXMAP = "[Replace action] Replace Hexmap";
export declare class ReplaceHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Replace action] Replace Hexmap";
    constructor(bale: HexmapBit);
}
export declare const NAME_HEXMAP = "[Name action] Name Hexmap";
export declare class NameHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Name action] Name Hexmap";
    constructor(bale: HexmapBit);
}
export declare const SEEK_HEXMAP = "[Seek action] Seek Hexmap";
export declare class SeekHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Seek action] Seek Hexmap";
    constructor(bale: HexmapBit);
}
export declare const FOCUSING_HEXMAP = "[Focusing action] Focusing Hexmap";
export declare class FocusingHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Focusing action] Focusing Hexmap";
    constructor(bale: HexmapBit);
}
export declare const DEFOCUS_HEXMAP = "[Defocus action] Defocus Hexmap";
export declare class DefocusHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Defocus action] Defocus Hexmap";
    constructor(bale: HexmapBit);
}
export declare const SELECT_HEXMAP = "[Select action] Select Hexmap";
export declare class SelectHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Select action] Select Hexmap";
    constructor(bale: HexmapBit);
}
export declare const ADD_HEXMAP = "[Select action] Add Hexmap";
export declare class AddHexmap implements Action {
    bale: HexmapBit;
    readonly type = "[Select action] Add Hexmap";
    constructor(bale: HexmapBit);
}
export type Actions = OpenHexmap | InitHexmap | UpdateHexmap | ReadHexmap | WriteHexmap | CreateHexmap | CopyHexmap | AtlasHexmap | GeojsonHexmap | ToolHexmap | SaveHexmap | StoreHexmap | ShapeHexmap | ShapeHexmap | LoadHexmap | ListHexmap | ReplaceHexmap | NameHexmap | SeekHexmap | FocusingHexmap | DefocusHexmap | SelectHexmap | AddHexmap;
