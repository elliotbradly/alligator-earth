"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const earth_unit_1 = require("./00.earth.unit/earth.unit");
const clock_unit_1 = require("./01.clock.unit/clock.unit");
const fate_unit_1 = require("./02.fate.unit/fate.unit");
const being_unit_1 = require("./03.being.unit/being.unit");
const color_unit_1 = require("./04.color.unit/color.unit");
const spectrum_unit_1 = require("./05.spectrum.unit/spectrum.unit");
const risk_unit_1 = require("./06.risk.unit/risk.unit");
const weather_unit_1 = require("./07.weather.unit/weather.unit");
const plot_unit_1 = require("./08.plot.unit/plot.unit");
const pivot_unit_1 = require("./96.pivot.unit/pivot.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const earth_model_1 = require("./00.earth.unit/earth.model");
const clock_model_1 = require("./01.clock.unit/clock.model");
const fate_model_1 = require("./02.fate.unit/fate.model");
const being_model_1 = require("./03.being.unit/being.model");
const color_model_1 = require("./04.color.unit/color.model");
const spectrum_model_1 = require("./05.spectrum.unit/spectrum.model");
const risk_model_1 = require("./06.risk.unit/risk.model");
const weather_model_1 = require("./07.weather.unit/weather.model");
const plot_model_1 = require("./08.plot.unit/plot.model");
const pivot_model_1 = require("./96.pivot.unit/pivot.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [earth_unit_1.default, clock_unit_1.default, fate_unit_1.default, being_unit_1.default, color_unit_1.default, spectrum_unit_1.default, risk_unit_1.default, weather_unit_1.default, plot_unit_1.default, pivot_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromEarth = require("./00.earth.unit/earth.reduce");
const reduceFromClock = require("./01.clock.unit/clock.reduce");
const reduceFromFate = require("./02.fate.unit/fate.reduce");
const reduceFromBeing = require("./03.being.unit/being.reduce");
const reduceFromColor = require("./04.color.unit/color.reduce");
const reduceFromSpectrum = require("./05.spectrum.unit/spectrum.reduce");
const reduceFromRisk = require("./06.risk.unit/risk.reduce");
const reduceFromWeather = require("./07.weather.unit/weather.reduce");
const reduceFromPlot = require("./08.plot.unit/plot.reduce");
const reduceFromPivot = require("./96.pivot.unit/pivot.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    earth: reduceFromEarth.reducer,
    clock: reduceFromClock.reducer,
    fate: reduceFromFate.reducer,
    being: reduceFromBeing.reducer,
    color: reduceFromColor.reducer,
    spectrum: reduceFromSpectrum.reducer,
    risk: reduceFromRisk.reducer,
    weather: reduceFromWeather.reducer,
    plot: reduceFromPlot.reducer,
    pivot: reduceFromPivot.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.earth = new earth_model_1.EarthModel();
        this.clock = new clock_model_1.ClockModel();
        this.fate = new fate_model_1.FateModel();
        this.being = new being_model_1.BeingModel();
        this.color = new color_model_1.ColorModel();
        this.spectrum = new spectrum_model_1.SpectrumModel();
        this.risk = new risk_model_1.RiskModel();
        this.weather = new weather_model_1.WeatherModel();
        this.plot = new plot_model_1.PlotModel();
        this.pivot = new pivot_model_1.PivotModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map