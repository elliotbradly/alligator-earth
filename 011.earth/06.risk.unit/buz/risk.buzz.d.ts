export declare const initRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => RiskModel;
export declare const verifyRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => Promise<RiskModel>;
export declare const updateRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => RiskModel;
export declare const fashionRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => Promise<RiskModel>;
export declare const articulateRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => Promise<RiskModel>;
export declare const openRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => Promise<RiskModel>;
export declare const listRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => RiskModel;
export declare const loadRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => RiskModel;
export declare const readRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => Promise<RiskModel>;
export declare const writeRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => Promise<RiskModel>;
export declare const createRisk: (cpy: RiskModel, bal: RiskBit, ste: State) => Promise<RiskModel>;
import { RiskModel } from "../risk.model";
import RiskBit from "../fce/risk.bit";
import State from "../../99.core/state";