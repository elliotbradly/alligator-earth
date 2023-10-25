"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchGame = exports.editGame = exports.runGame = exports.updateGame = exports.closeGame = exports.openGame = exports.initGame = void 0;
const ActScn = require("../../01.scene.unit/scene.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActGam = require("../game.action");

var bit, val, idx, dex, lst, dat;

const initGame = async (cpy, bal, ste) => {
  console.log("live alligators 00013");

  //if (bal.dat != null)
  //  bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActGam], dat: bal.dat, src: bal.src });
  //if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
  //(0, exports.openGame)(cpy, bal, ste);

  if (bal.slv != null)
    bal.slv({ intBit: { idx: "init-game" } });

    return cpy;
};
exports.initGame = initGame;
const openGame = async (cpy, bal, ste) => {
  bit = await ste.hunt(ActScn.SPACE_SCENE, {});
  if (bal.slv != null)
    bal.slv({ aaaBit: { idx: "open-Game" } });
  return cpy;
};
exports.openGame = openGame;
const closeGame = async (cpy, bal, ste) => {
  console.log("closing Game");
  //bit = await ste.hunt( ActScn.TITLE_SCENE, {} );
  if (bal.slv != null)
    bal.slv({ aaaBit: { idx: "close-Game" } });
  return cpy;
};
exports.closeGame = closeGame;
const updateGame = (cpy, bal, ste) => {
  if (bal.slv != null)
    bal.slv({ aaaBit: { idx: "update-Game" } });
  return cpy;
};
exports.updateGame = updateGame;
const runGame = async (cpy, bal, ste) => {
  if (bal.slv != null)
    bal.slv({ aaaBit: { idx: "run-Game" } });
  return cpy;
};
exports.runGame = runGame;
const editGame = (cpy, bal, ste) => {
  if (bal.slv != null)
    bal.slv({ aaaBit: { idx: "edit-Game", dat: {} } });
  return cpy;
};
exports.editGame = editGame;
const patchGame = (cpy, bal, ste) => {
  debugger;
  return cpy;
};
exports.patchGame = patchGame;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=game.buzz.js.map
