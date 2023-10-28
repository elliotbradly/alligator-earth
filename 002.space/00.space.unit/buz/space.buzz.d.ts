export declare const initSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const openSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const runSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const updateSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const editSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => SpaceModel;
export declare const readySpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const patchSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const mergeSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const testSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const cloudSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
export declare const batchSpace: (cpy: SpaceModel, bal: SpaceBit, ste: State) => Promise<SpaceModel>;
import { SpaceModel } from "../space.model";
import SpaceBit from "../fce/space.bit";
import State from "../../99.core/state";