import * as Act from "./fate.action";
import { FateModel } from "./fate.model";
import State from "../99.core/state";
export declare function reducer(model: FateModel, act: Act.Actions, state?: State): FateModel | Promise<FateModel>;
