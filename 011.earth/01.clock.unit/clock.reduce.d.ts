import * as Act from "./clock.action";
import { ClockModel } from "./clock.model";
import State from "../99.core/state";
export declare function reducer(model: ClockModel, act: Act.Actions, state?: State): ClockModel | Promise<ClockModel>;
