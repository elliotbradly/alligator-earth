import { Action } from "../99.core/interface/action.interface";
import ClockBit from "./fce/clock.bit";
export declare const INIT_CLOCK = "[Clock action] Init Clock";
export declare class InitClock implements Action {
    bale: ClockBit;
    readonly type = "[Clock action] Init Clock";
    constructor(bale: ClockBit);
}
export declare const UPDATE_CLOCK = "[Clock action] Update Clock";
export declare class UpdateClock implements Action {
    bale: ClockBit;
    readonly type = "[Clock action] Update Clock";
    constructor(bale: ClockBit);
}
export declare const READ_CLOCK = "[Read action] Read Clock";
export declare class ReadClock implements Action {
    bale: ClockBit;
    readonly type = "[Read action] Read Clock";
    constructor(bale: ClockBit);
}
export declare const WRITE_CLOCK = "[Write action] Write Clock";
export declare class WriteClock implements Action {
    bale: ClockBit;
    readonly type = "[Write action] Write Clock";
    constructor(bale: ClockBit);
}
export declare const REMOVE_CLOCK = "[Remove action] Remove Clock";
export declare class RemoveClock implements Action {
    bale: ClockBit;
    readonly type = "[Remove action] Remove Clock";
    constructor(bale: ClockBit);
}
export declare const CREATE_CLOCK = "[Create action] Create Clock";
export declare class CreateClock implements Action {
    bale: ClockBit;
    readonly type = "[Create action] Create Clock";
    constructor(bale: ClockBit);
}
export declare const DELETE_CLOCK = "[Delete action] Delete Clock";
export declare class DeleteClock implements Action {
    bale: ClockBit;
    readonly type = "[Delete action] Delete Clock";
    constructor(bale: ClockBit);
}
export declare const BLOCK_CLOCK = "[Block action] Block Clock";
export declare class BlockClock implements Action {
    bale: ClockBit;
    readonly type = "[Block action] Block Clock";
    constructor(bale: ClockBit);
}
export declare const LIST_CLOCK = "[List action] List Clock";
export declare class ListClock implements Action {
    bale: ClockBit;
    readonly type = "[List action] List Clock";
    constructor(bale: ClockBit);
}
export type Actions = InitClock | UpdateClock | ReadClock | WriteClock | RemoveClock | CreateClock | DeleteClock | BlockClock | ListClock;
