import * as Act from "./time.action";
import { TimeModel } from "./time.model";
import State from "../99.core/state";
export declare function reducer(model: TimeModel, act: Act.Actions, state?: State): TimeModel | Promise<TimeModel>;
