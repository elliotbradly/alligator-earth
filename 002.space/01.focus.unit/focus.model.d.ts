import Focus from "./fce/focus.interface";
import FocusBit from "./fce/focus.bit";
import SpotBit from "./fce/spot.bit";
export declare class FocusModel implements Focus {
    focusBitList: FocusBit[];
    focusBits: any;
    select: SpotBit;
}
