"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const space_unit_1 = require("./00.space.unit/space.unit");
const focus_unit_1 = require("./01.focus.unit/focus.unit");
const geojson_unit_1 = require("./02.geojson.unit/geojson.unit");
const hexmap_unit_1 = require("./03.hexmap.unit/hexmap.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const space_model_1 = require("./00.space.unit/space.model");
const focus_model_1 = require("./01.focus.unit/focus.model");
const geojson_model_1 = require("./02.geojson.unit/geojson.model");
const hexmap_model_1 = require("./03.hexmap.unit/hexmap.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
exports.list = [space_unit_1.default, focus_unit_1.default, geojson_unit_1.default, hexmap_unit_1.default, collect_unit_1.default];

const reduceFromSpace = require("./00.space.unit/space.reduce");
const reduceFromFocus = require("./01.focus.unit/focus.reduce");
const reduceFromGeojson = require("./02.geojson.unit/geojson.reduce");
const reduceFromHexmap = require("./03.hexmap.unit/hexmap.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");

exports.reducer = {
    space: reduceFromSpace.reducer,
    focus: reduceFromFocus.reducer,
    geojson: reduceFromGeojson.reducer,
    hexmap: reduceFromHexmap.reducer,
    collect: reduceFromCollect.reducer,
};
class UnitData {
    constructor() {
        this.space = new space_model_1.SpaceModel();
        this.focus = new focus_model_1.FocusModel();
        this.geojson = new geojson_model_1.GeojsonModel();
        this.hexmap = new hexmap_model_1.HexmapModel();
        this.collect = new collect_model_1.CollectModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map
