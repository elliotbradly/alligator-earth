'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.patchStore = exports.editStore = exports.runStore = exports.openStore = exports.updateStore = exports.initStore = void 0;

//const ActMnu = require('../../98.menu.unit/menu.action');
//const ActBus = require('../../99.bus.unit/bus.action');
const ActStr = require('../store.action');
var bit, val, idx, dex, lst, dat;

const initStore = async (cpy, bal, ste) => {

  //if (bal.dat != null)
  //bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActStr], dat: bal.dat, src: bal.src });

  //if (bal.val == 1)
  //patch(ste, ActMnu.INIT_MENU, bal);
  const Store = require('electron-store');
  const store = new Store();

  //if (bal.slv != null)
  bal.slv({ intBit: { idx: 'init-store' } });

  return cpy;
};
exports.initStore = initStore;

const updateStore = (cpy, bal, ste) => {
  return cpy;
};
exports.updateStore = updateStore;

const openStore = async (cpy, bal, ste) => {


  return cpy;
};
exports.openStore = openStore;

const runStore = async (cpy, bal, ste) => {
  const open = require('open');
  var loc = './vrt.gil.bat';
  bit = await open(loc);
  setTimeout(() => {
    if (bal.slv != null)
      bal.slv({ strBit: { idx: 'run-store' } });
  });
  return cpy;
};
exports.runStore = runStore;

const editStore = (cpy, bal, ste) => {
  const { exec } = require('child_process');
  process.chdir('../../studio/');
  exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }
    process.chdir('../packages/001.store');
    if (bal.slv != null)
      bal.slv({ strBit: { idx: 'edit-store', dat: {} } });
  });
  return cpy;
};
exports.editStore = editStore;

const readStore = (cpy, bal, ste) => {

  bal.slv({ strBit: { idx: 'read-store', val:0 } });
  return cpy;
};
exports.readStore = readStore;

const writeStore = (cpy, bal, ste) => {

  bal.slv({ strBit: { idx: 'write-store' } });
  return cpy;
};
exports.writeStore = writeStore;

var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const patchStore = (cpy, bal, ste) => {
  debugger;
  return cpy;
};
exports.patchStore = patchStore;
//# sourceMappingURL=store.buzz.js.map
