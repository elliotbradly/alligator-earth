import * as Act from "./geojson.action";
import { GeojsonModel } from "./geojson.model";
import State from "../99.core/state";
export declare function reducer(model: GeojsonModel, act: Act.Actions, state?: State): GeojsonModel | Promise<GeojsonModel>;
