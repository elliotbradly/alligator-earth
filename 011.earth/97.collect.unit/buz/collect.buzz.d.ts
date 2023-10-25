export declare const initCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
export declare const updateCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
export declare const fetchCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
export declare const readCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => Promise<CollectModel>;
export declare const writeCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => Promise<CollectModel>;
export declare const createCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
export declare const removeCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => Promise<any>;
export declare const putCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
export declare const getCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
export declare const modelCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
export declare const deleteCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
export declare const emptyCollect: (cpy: CollectModel, bal: CollectBit, ste: State) => CollectModel;
import { CollectModel } from "../collect.model";
import CollectBit from "../fce/collect.bit";
import State from "../../99.core/state";