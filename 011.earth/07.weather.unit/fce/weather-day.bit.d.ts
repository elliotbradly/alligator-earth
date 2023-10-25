import WeatherHourBit from "./weather-hour.bit";
export default interface WeatherDayBit {
    idx: string;
    src: string;
    ico: string;
    wet: string;
    sunrise?: number;
    sunset?: number;
    moon?: number;
    dew?: number;
    lst: WeatherHourBit[];
}
