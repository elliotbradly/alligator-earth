"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const play_unit_1 = require("./00.play.unit/play.unit");
const show_unit_1 = require("./01.show.unit/show.unit");
const gardenex_unit_1 = require("./02.gardenex.unit/gardenex.unit");
const pivot_unit_1 = require("./96.pivot.unit/pivot.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const play_model_1 = require("./00.play.unit/play.model");
const show_model_1 = require("./01.show.unit/show.model");
const gardenex_model_1 = require("./02.gardenex.unit/gardenex.model");
const pivot_model_1 = require("./96.pivot.unit/pivot.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [play_unit_1.default, show_unit_1.default, gardenex_unit_1.default, pivot_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromPlay = require("./00.play.unit/play.reduce");
const reduceFromShow = require("./01.show.unit/show.reduce");
const reduceFromGardenex = require("./02.gardenex.unit/gardenex.reduce");
const reduceFromPivot = require("./96.pivot.unit/pivot.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    play: reduceFromPlay.reducer,
    show: reduceFromShow.reducer,
    gardenex: reduceFromGardenex.reducer,
    pivot: reduceFromPivot.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.play = new play_model_1.PlayModel();
        this.show = new show_model_1.ShowModel();
        this.gardenex = new gardenex_model_1.GardenexModel();
        this.pivot = new pivot_model_1.PivotModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map