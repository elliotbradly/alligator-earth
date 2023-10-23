'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.reducer = exports.list = void 0;

const store_unit_1 = require('./00.store.unit/store.unit');
const store_model_1 = require('./00.store.unit/store.model');

exports.list = [store_unit_1.default];

const reduceFromStore = require('./00.store.unit/store.reduce');

exports.reducer = {
  store: reduceFromStore.reducer,
};
class UnitData {
  constructor() {
    this.store = new store_model_1.StoreModel();
  }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map
