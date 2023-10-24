import { Action } from "../99.core/interface/action.interface";
import GeojsonBit from "./fce/geojson.bit";
export declare const INIT_GEOJSON = "[Geojson action] Init Geojson";
export declare class InitGeojson implements Action {
    bale: GeojsonBit;
    readonly type = "[Geojson action] Init Geojson";
    constructor(bale: GeojsonBit);
}
export declare const UPDATE_GEOJSON = "[Geojson action] Update Geojson";
export declare class UpdateGeojson implements Action {
    bale: GeojsonBit;
    readonly type = "[Geojson action] Update Geojson";
    constructor(bale: GeojsonBit);
}
export declare const LOAD_GEOJSON = "[Load action] Load Geojson";
export declare class LoadGeojson implements Action {
    bale: GeojsonBit;
    readonly type = "[Load action] Load Geojson";
    constructor(bale: GeojsonBit);
}
export declare const INDEX_GEOJSON = "[Index action] Index Geojson";
export declare class IndexGeojson implements Action {
    bale: GeojsonBit;
    readonly type = "[Index action] Index Geojson";
    constructor(bale: GeojsonBit);
}
export type Actions = InitGeojson | UpdateGeojson | LoadGeojson | IndexGeojson;
