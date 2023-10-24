import Hexmap from "./fce/hexmap.interface";
import HexmapBit from "./fce/hexmap.bit";
import HoneycombCollection from "./fce/honeycomb-collection.bit";
import MapBit from "./fce/map.bit";
export declare class HexmapModel implements Hexmap {
    select: MapBit;
    geoJsonNow: any;
    atlasNow: any;
    sizeNow: any;
    mapNomNow: string;
    platBits: any;
    hexmapLoc: string;
    hexmapBitList: HexmapBit[];
    hexmapBits: any;
    hc: HoneycombCollection;
    dex: number;
    count: number;
}
