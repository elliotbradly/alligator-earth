import AvasBit from "./fce/avas.bit";
import Being from "./fce/being.interface";
export declare class BeingModel implements Being {
    idx: string;
    avasBitList: AvasBit[];
    avasBits: any;
    nowDex: number;
    readAvasBit: AvasBit;
}
