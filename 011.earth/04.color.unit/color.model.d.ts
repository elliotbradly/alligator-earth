import ColorHexBit from "./fce/color-hext.bit";
import Color from "./fce/color.interface";
export declare class ColorModel implements Color {
    idx: string;
    seed: number;
    clrLst: string[];
    clrHexLst: ColorHexBit[];
    clrSrtLst: any;
    clrSrc: string;
    clrDat: string;
    clrDatNom: string;
    rskDat: string;
    clrRoot: string;
    clrRootMax: string;
    degreeClrLog: string;
    selectClrLog: string;
}
