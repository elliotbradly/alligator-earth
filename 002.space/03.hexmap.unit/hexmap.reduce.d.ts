import * as Act from "./hexmap.action";
import { HexmapModel } from "./hexmap.model";
import State from "../99.core/state";
export declare function reducer(model: HexmapModel, act: Act.Actions, state?: State): HexmapModel | Promise<any>;
