import * as Act from "./focus.action";
import { FocusModel } from "./focus.model";
import State from "../99.core/state";
export declare function reducer(model: FocusModel, act: Act.Actions, state?: State): FocusModel | Promise<FocusModel> | Promise<void>;
