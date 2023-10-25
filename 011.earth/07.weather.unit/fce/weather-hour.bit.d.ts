export default interface WeatherHourBit {
    idx: string;
    src: string;
    temp: number;
    windSpeed: number;
    windGust: number;
    windBear: number;
    water?: string;
    waterVal?: number;
    cloud: number;
}
