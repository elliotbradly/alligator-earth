import Risk from "./fce/risk.interface";
import RiskBit from "./fce/risk.bit";
import PoolBit from "./fce/pool.bit";
export declare class RiskModel implements Risk {
    riskBitList: RiskBit[];
    poolBitList: PoolBit[];
    poolBits: any;
    readPoolBit: PoolBit;
    riskDir: string;
}
