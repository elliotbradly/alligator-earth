import { Action } from "../99.core/interface/action.interface";
import WeatherPivotBit from "./fce/weather-pivot.bit";
export declare const INIT_WEATHER = "[Weather action] Init Weather";
export declare class InitWeather implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] Init Weather";
    constructor(bale: WeatherPivotBit);
}
export declare const SET_WORKING_WEATHER = "[Weather action] Set Working Weather";
export declare class SetWorkingWeather implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] Set Working Weather";
    constructor(bale: WeatherPivotBit);
}
export declare const UPDATE_WEATHER = "[Weather action] Update Weather";
export declare class UpdateWeather implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] Update Weather";
    constructor(bale: WeatherPivotBit);
}
export declare const PROCESS_WEATHER = "[Weather action] Process Weather";
export declare class ProcessWeather implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] Process Weather";
    constructor(bale: WeatherPivotBit);
}
export declare const PROCESS_WEATHER_BEAM = "[Weather action] Process Weather Beam";
export declare class ProcessWeatherBeam implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] Process Weather Beam";
    constructor(bale: WeatherPivotBit);
}
export declare const PROCESS_WEATHER_DAY = "[Weather action] Process Weather Day";
export declare class ProcessWeatherDay implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] Process Weather Day";
    constructor(bale: WeatherPivotBit);
}
export declare const PROCESS_WEATHER_HOUR = "[Weather action] Process Weather Hour";
export declare class ProcessWeatherHour implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] Process Weather Hour";
    constructor(bale: WeatherPivotBit);
}
export declare const READ_WEATHER = "[Weather action] Read Weather";
export declare class ReadWeather implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] Read Weather";
    constructor(bale: WeatherPivotBit);
}
export declare const LIST_WEATHER = "[Weather action] List Weather";
export declare class ListWeather implements Action {
    bale: WeatherPivotBit;
    readonly type = "[Weather action] List Weather";
    constructor(bale: WeatherPivotBit);
}
export type Actions = SetWorkingWeather | ListWeather | ProcessWeather | ProcessWeatherBeam | ProcessWeatherDay | ProcessWeatherHour | InitWeather | UpdateWeather | ReadWeather;
