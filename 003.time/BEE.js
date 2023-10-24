"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;

const time_unit_1 = require("./00.time.unit/time.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");

const time_model_1 = require("./00.time.unit/time.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
exports.list = [time_unit_1.default, collect_unit_1.default];

const reduceFromTime = require("./00.time.unit/time.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");

exports.reducer = {
    time: reduceFromTime.reducer,
    collect: reduceFromCollect.reducer,
};
class UnitData {
    constructor() {
        this.time = new time_model_1.TimeModel();
        this.collect = new collect_model_1.CollectModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map
