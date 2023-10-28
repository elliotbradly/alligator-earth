export declare const initGeojson: (cpy: GeojsonModel, bal: GeojsonBit, ste: State) => GeojsonModel;
export declare const updateGeojson: (cpy: GeojsonModel, bal: GeojsonBit, ste: State) => GeojsonModel;
export declare const loadGeojson: (cpy: GeojsonModel, bal: GeojsonBit, ste: State) => Promise<GeojsonModel>;
export declare const indexGeojson: (cpy: GeojsonModel, bal: GeojsonBit, ste: State) => Promise<GeojsonModel>;
import { GeojsonModel } from "../geojson.model";
import GeojsonBit from "../fce/geojson.bit";
import State from "../../99.core/state";
