import * as Act from "./earth.action";
import { EarthModel } from "./earth.model";
import State from "../99.core/state";
export declare function reducer(model: EarthModel, act: Act.Actions, state?: State): EarthModel | Promise<EarthModel>;
