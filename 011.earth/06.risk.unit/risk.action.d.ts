import { Action } from "../99.core/interface/action.interface";
import RiskBit from "./fce/risk.bit";
export declare const INIT_RISK = "[Risk action] Init Risk";
export declare class InitRisk implements Action {
    bale: RiskBit;
    readonly type = "[Risk action] Init Risk";
    constructor(bale: RiskBit);
}
export declare const ARTICULATE_RISK = "[Risk action] Articulate Risk";
export declare class ArticulateRisk implements Action {
    bale: RiskBit;
    readonly type = "[Risk action] Articulate Risk";
    constructor(bale: RiskBit);
}
export declare const FASHION_RISK = "[Risk action] Fashion Risk";
export declare class FashionRisk implements Action {
    bale: RiskBit;
    readonly type = "[Risk action] Fashion Risk";
    constructor(bale: RiskBit);
}
export declare const UPDATE_RISK = "[Risk action] Update Risk";
export declare class UpdateRisk implements Action {
    bale: RiskBit;
    readonly type = "[Risk action] Update Risk";
    constructor(bale: RiskBit);
}
export declare const VERIFY_RISK = "[Verify action] Verify Risk";
export declare class VerifyRisk implements Action {
    bale: RiskBit;
    readonly type = "[Verify action] Verify Risk";
    constructor(bale: RiskBit);
}
export declare const OPEN_RISK = "[Open action] Open Risk";
export declare class OpenRisk implements Action {
    bale: RiskBit;
    readonly type = "[Open action] Open Risk";
    constructor(bale: RiskBit);
}
export declare const LIST_RISK = "[List action] List Risk";
export declare class ListRisk implements Action {
    bale: RiskBit;
    readonly type = "[List action] List Risk";
    constructor(bale: RiskBit);
}
export declare const LOAD_RISK = "[Load action] Load Risk";
export declare class LoadRisk implements Action {
    bale: RiskBit;
    readonly type = "[Load action] Load Risk";
    constructor(bale: RiskBit);
}
export declare const CREATE_RISK = "[Create action] Create Risk";
export declare class CreateRisk implements Action {
    bale: RiskBit;
    readonly type = "[Create action] Create Risk";
    constructor(bale: RiskBit);
}
export declare const WRITE_RISK = "[Write action] Write Risk";
export declare class WriteRisk implements Action {
    bale: RiskBit;
    readonly type = "[Write action] Write Risk";
    constructor(bale: RiskBit);
}
export declare const READ_RISK = "[Read action] Read Risk";
export declare class ReadRisk implements Action {
    bale: RiskBit;
    readonly type = "[Read action] Read Risk";
    constructor(bale: RiskBit);
}
export type Actions = InitRisk | UpdateRisk | FashionRisk | ArticulateRisk | VerifyRisk | OpenRisk | ListRisk | LoadRisk | CreateRisk | WriteRisk | ReadRisk;
