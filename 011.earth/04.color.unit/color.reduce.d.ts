import * as Act from "./color.action";
import { ColorModel } from "./color.model";
import State from "../99.core/state";
export declare function reducer(model: ColorModel, act: Act.Actions, state?: State): void | ColorModel | Promise<void> | Promise<ColorModel>;
