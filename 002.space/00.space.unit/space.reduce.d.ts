import * as Act from "./space.action";
import { SpaceModel } from "./space.model";
import State from "../99.core/state";
export declare function reducer(model: SpaceModel, act: Act.Actions, state?: State): SpaceModel | Promise<SpaceModel>;
