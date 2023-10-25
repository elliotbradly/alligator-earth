import * as Act from "./risk.action";
import { RiskModel } from "./risk.model";
import State from "../99.core/state";
export declare function reducer(model: RiskModel, act: Act.Actions, state?: State): RiskModel | Promise<RiskModel>;
