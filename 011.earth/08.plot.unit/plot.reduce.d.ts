import * as Act from "./plot.action";
import { PlotModel } from "./plot.model";
import State from "../99.core/state";
export declare function reducer(model: PlotModel, act: Act.Actions, state?: State): PlotModel | Promise<PlotModel>;
