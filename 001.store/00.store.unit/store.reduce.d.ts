import * as Act from "./store.action";
import { StoreModel } from "./store.model";
import State from "../99.core/state";
export declare function reducer(model: StoreModel, act: Act.Actions, state?: State): StoreModel | Promise<StoreModel>;
