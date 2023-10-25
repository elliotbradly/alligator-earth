import * as Act from "./weather.action";
import { WeatherModel } from "./weather.model";
import State from "../99.core/state";
export declare function reducer(model: WeatherModel, act: Act.Actions, state?: State): WeatherModel | Promise<void> | Promise<WeatherModel>;
