import { Action } from "../99.core/interface/action.interface";
import SpectrumBit from "./fce/spectrum.bit";
export declare const INIT_SPECTRUM = "[Spectrum action] Init Spectrum";
export declare class InitSpectrum implements Action {
    bale: SpectrumBit;
    readonly type = "[Spectrum action] Init Spectrum";
    constructor(bale: SpectrumBit);
}
export declare const UPDATE_SPECTRUM = "[Spectrum action] Update Spectrum";
export declare class UpdateSpectrum implements Action {
    bale: SpectrumBit;
    readonly type = "[Spectrum action] Update Spectrum";
    constructor(bale: SpectrumBit);
}
export declare const MIN_SPECTRUM = "[Min action] Min Spectrum";
export declare class MinSpectrum implements Action {
    bale: SpectrumBit;
    readonly type = "[Min action] Min Spectrum";
    constructor(bale: SpectrumBit);
}
export type Actions = InitSpectrum | UpdateSpectrum | MinSpectrum;
