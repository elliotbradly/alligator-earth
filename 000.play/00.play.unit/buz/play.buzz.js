"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlay = exports.removePlay = exports.writePlay = exports.readPlay = exports.patchPlay = exports.editPlay = exports.runPlay = exports.openPlay = exports.createPlay = exports.updatePlay = exports.startPlay = exports.initPlay = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActCol = require("../../97.collect.unit/collect.action");
const ActPly = require("../play.action");
var bit, val, idx, dex, lst, dat;
var SPACE = global.SPACE;
var SHADE = global.SHADE;
const initPlay = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActPly], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-play" } });
    return cpy;
};
exports.initPlay = initPlay;
const startPlay = async (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ plyBit: { idx: "start-play" } });
    return cpy;
};
exports.startPlay = startPlay;
const updatePlay = async (cpy, bal, ste) => {
    var root = 'https://www.fictiq.com/';
    var url = root + 'black-meat-machine/?idx=update';
    url = encodeURI(url);
    //url = url.substring(0, url.length - 1);
    console.log(url);
    bit = await fetch(url, { method: 'GET' });
    var js = await bit.json();
    console.log("updating.. " + JSON.stringify(js));
    if (bal.slv != null)
        bal.slv({ plyBit: { idx: "update-play", dat: js } });
    return cpy;
};
exports.updatePlay = updatePlay;
const createPlay = async (cpy, bal, ste) => {
    var root = 'https://www.fictiq.com/';
    var url = root + 'black-meat-machine/?idx=open';
    url = encodeURI(url);
    //url = url.substring(0, url.length - 1);
    console.log(url);
    bit = await fetch(url, { method: 'GET' });
    var js = await bit.json();
    console.log(" creating " + JSON.stringify(js));
    //so here we will recieve a list of commands to be performed one after the other
    //you have a source visage
    //now you wish to update a bit of the source visage 
    var dat = { idx: bal.idx, src: bal.src };
    if (dat.edge == null)
        dat.edge = 0;
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    if (bal.slv != null)
        return bal.slv({ plyBit: { idx: "create-play", dat } });
    return cpy;
};
exports.createPlay = createPlay;
const openPlay = async (cpy, bal, ste) => {
    return cpy;
};
exports.openPlay = openPlay;
const runPlay = async (cpy, bal, ste) => {
    return cpy;
};
exports.runPlay = runPlay;
const editPlay = (cpy, bal, ste) => {
    return cpy;
};
exports.editPlay = editPlay;
const patchPlay = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.patchPlay = patchPlay;
const readPlay = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPly.CREATE_PLAY });
    if (slv != null)
        slv({ plyBit: { idx: "read-play", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readPlay = readPlay;
const writePlay = async (cpy, bal, ste) => {
    var clc = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPly.CREATE_PLAY });
    cpy.nextTime;
    var now = Date.now();
    if (now > cpy.nextTime) {
        var bit0 = await ste.hunt(ActPly.UPDATE_PLAY, { idx: bal.idx });
        cpy.nextTime = Date.now() + 10000;
        console.log("next time " + cpy.nextTime);
    }
    if (bal.slv != null)
        bal.slv({ plyBit: { idx: "write-play", dat: clc.clcBit.dat } });
    return cpy;
};
exports.writePlay = writePlay;
const removePlay = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPly.DELETE_PLAY });
    if (bal.slv != null)
        bal.slv({ plyBit: { idx: "remove-play", dat: bit.clcBit } });
    return cpy;
    return cpy;
};
exports.removePlay = removePlay;
const deletePlay = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deletePlay = deletePlay;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const console = require("console");
//# sourceMappingURL=play.buzz.js.map