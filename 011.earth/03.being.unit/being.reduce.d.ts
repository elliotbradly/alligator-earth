import * as Act from "./being.action";
import { BeingModel } from "./being.model";
import State from "../99.core/state";
export declare function reducer(model: BeingModel, act: Act.Actions, state?: State): BeingModel | Promise<BeingModel>;
