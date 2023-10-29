"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShow = exports.createShow = exports.removeShow = exports.writeShow = exports.readShow = exports.updateShow = exports.initShow = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActShw = require("../show.action");
var bit, val, idx, dex, lst, dat;
const initShow = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initShow = initShow;
const updateShow = (cpy, bal, ste) => {
    return cpy;
};
exports.updateShow = updateShow;
const readShow = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActShw.CREATE_SHOW });
    if (slv != null)
        slv({ shwBit: { idx: "read-show", dat: bit.clcBit.dat } });
    return cpy;
    return cpy;
};
exports.readShow = readShow;
const writeShow = async (cpy, bal, ste) => {
    var clc = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActShw.CREATE_SHOW });
    if (bal.slv != null)
        bal.slv({ shwBit: { idx: "write-show", dat: clc.clcBit.dat } });
    return cpy;
    return cpy;
};
exports.writeShow = writeShow;
const removeShow = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActShw.DELETE_SHOW });
    if (bal.slv != null)
        bal.slv({ shwBit: { idx: "remove-show", dat: bit.clcBit } });
    return cpy;
    return cpy;
};
exports.removeShow = removeShow;
const createShow = async (cpy, bal, ste) => {
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
        return bal.slv({ shwBit: { idx: "create-show", dat } });
    return cpy;
};
exports.createShow = createShow;
const deleteShow = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteShow = deleteShow;
//# sourceMappingURL=show.buzz.js.map