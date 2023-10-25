export declare const initFate: (cpy: FateModel, bal: FateBit, ste: State) => Promise<FateModel>;
export declare const updateFate: (cpy: FateModel, bal: FateBit, ste: State) => FateModel;
export declare const integerFate: (cpy: FateModel, bal: FateBit, ste: State) => FateModel;
export declare const appleFate: (cpy: FateModel, bal: FateBit, ste: State) => FateModel;
import { FateModel } from "../fate.model";
import FateBit from "../fce/fate.bit";
import State from "../../99.core/state";
