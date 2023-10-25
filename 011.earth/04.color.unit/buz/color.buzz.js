"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listColor = exports.fetchColor = exports.selectColor = exports.degreeColor = exports.matchColor = exports.readColor = exports.updateColor = exports.initColor = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActClr = require("../../04.color.unit/color.action");
const ActSpk = require("../../05.spectrum.unit/spectrum.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActDsk = require("../../act/disk.action");
const ActFte = require("../../act/fate.action");
var bit, lst;
const initColor = async (cpy, bal, ste) => {
    var bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, src: bal.src, lst: [ActClr, ActSpk], dat: bal.dat });
    //if (g.TERMINAL != null) var bit = await g.TERMINAL.initTerminal();
    cpy.clrLst = bal.lst;
    cpy.clrHexLst = bal.bit.hex;
    cpy.clrSrtLst = bal.bit.srt;
    if (cpy.clrLst == null)
        cpy.clrLst = ["light", "blood"];
    if (bal.val == 1)
        bit = await ste.hunt(ActMnu.INIT_MENU);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-color" } });
    return cpy;
};
exports.initColor = initColor;
const updateColor = (cpy, bal, ste) => {
    return cpy;
};
exports.updateColor = updateColor;
const readColor = (cpy, bal, ste) => {
    var src, val;
    val = bal.val;
    if (bal.val != null)
        src = cpy.clrLst[bal.val];
    if (bal.idx != null) {
        cpy.clrLst.forEach((a, b) => {
            if (a.includes(bal.idx) == false)
                return;
            val = b;
        });
        src = bal.idx;
    }
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "read-color", src, val } });
};
exports.readColor = readColor;
const matchColor = async (cpy, bal, ste) => {
    var val = 0;
    cpy.clrLst.forEach((a, b) => {
        if (a.includes(bal.idx) == false)
            return;
        val = b;
    });
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "match-color", val } });
};
exports.matchColor = matchColor;
//the heart can go places the mind can not go 
//art as a balancing force 
const degreeColor = async (cpy, bal, ste) => {
    //if (bal.slv != null) bal.slv({ clrBit: { idx: "degree-color", dat: bit } });
    //stress
    bit = await ste.hunt(ActClr.READ_COLOR, { idx: bal.idx });
    var val2 = bit.clrBit.val;
    //gift
    bit = await ste.hunt(ActClr.READ_COLOR, { idx: bal.src });
    var val0 = bit.clrBit.val;
    //moment
    if (bal.val == null)
        bal.val = 0;
    var src;
    for (var key in COSMOS) {
        var itm = COSMOS[key];
        if (bal.val == itm.val)
            src = itm.idx;
    }
    bit = await ste.hunt(ActClr.LIST_COLOR, { idx: src });
    var clrLst = bit.clrBit.lst;
    var mirroredDex = clrLst.length - 1;
    clrLst.forEach((a, b) => {
        if (a.includes('achromatic') == false)
            return;
        if (b > mirroredDex)
            return;
        mirroredDex = b;
    });
    mirroredDex;
    bit = await ste.hunt(ActClr.FETCH_COLOR, { val: 1, src, lst: clrLst });
    bit = await ste.hunt(ActClr.READ_COLOR, { idx: bit.clrBit.lst[0] });
    var val1 = bit.clrBit.val;
    var under = val1 - val0;
    var score = val2 - under + mirroredDex - 1;
    var degree = clrLst[score];
    bit = await ste.hunt(ActClr.READ_COLOR, { idx: degree });
    degree;
    var bale = { idx: "degree-color", src: bit.clrBit.src, val: bit.clrBit.val };
    if (bal.slv != null)
        bal.slv({ clrBit: bale });
    //var bitDegree = await ste.hunt(ActClr.READ_COLOR, { val: score})
    //var degree = bitDegree.clrBit.src;
    // debugger
    //where would you begin 
    //the number over one 
    //the number give is how many under
    //var score = 0
    //if (val1 >= val2) score += val1 - val2
    //else score -= val2 - val1
    //var dex = val0 + score;
    //debugger
    //the moment is 
    //bit = await ste.hunt(ActClr.READ_COLOR, { val: dex })
    //debugger;
    //let us print it out
    //if (bal.log == true) {
    //  var itm = {idx:bal.idx, src:bal.src, dat:now, }
    //  itm.idx = bal.idx;
    //  itm.src = bal.src;
    //itm.idx = 'select-color'
    //  var src = cpy.degreeClrLog + '-' + bal.val + '.txt';
    //  bit = await ste.hunt( ActDsk.UPDATE_DISK, { idx:'degree-color', dat: JSON.stringify(itm) }  )
    // }
};
exports.degreeColor = degreeColor;
const selectColor = async (cpy, bal, ste) => {
    var bit, lst, itm;
    bit = await ste.hunt(ActClr.READ_COLOR, { idx: bal.src });
    var val0 = bit.clrBit.val;
    bit = await ste.hunt(ActClr.FETCH_COLOR, { val: bal.val });
    var val1 = bit.clrBit.val;
    var src1 = bit.clrBit.src;
    var dex = val0 - val1;
    var fin = val0 - dex;
    bit = await ste.hunt(ActClr.READ_COLOR, { val: fin });
    itm = bit.clrBit;
    //debugger;
    //let us print it out
    if (bal.log == true) {
        itm.idx = bal.src;
        //itm.idx = 'select-color'
        var src = cpy.selectClrLog + '-' + bal.val + '.txt';
        bit = await ste.hunt(ActDsk.UPDATE_DISK, { src, dat: JSON.stringify(itm) });
    }
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "select-color", bit } });
    //if (bal.src == null) bit = await cpy.port.matchColor({ idx: bal.src });
    var dex = 0;
};
exports.selectColor = selectColor;
const fetchColor = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActClr.LIST_COLOR, { idx: bal.idx });
    lst = bit.clrBit.lst;
    bit = await ste.hunt(ActFte.INTEGER_FATE, { lst: [0, lst.length - 1] });
    var now = lst[bit.fteBit.val];
    var opt = cpy.clrSrtLst[now];
    bit = await ste.hunt(ActFte.INTEGER_FATE, { lst: [0, opt.length - 1] });
    var pow = opt[bit.fteBit.val];
    var fin = cpy.clrHexLst[pow];
    var out = { idx: pow, src: now, dat: fin };
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "fetch-color", dat: out } });
    //cpy.clrSrc
    //if ( bal.val == null) bal.val = 1;
    //if ( bal.lst == null ) bal.lst = ['black', 'white']
    //lst = []
    //for (var i = 0; i < bal.val; i++) {
    //  var listing = bal.lst;
    //  var itm = listing[bit.fteBit.val];
    //  bit = await ste.hunt(ActClr.READ_COLOR, { idx: itm })
    //  var src = bit.clrBit.src;
    //  lst.push(src)
    //}
    //debugger
    //val would be the mid point 
};
exports.fetchColor = fetchColor;
const listColor = (cpy, bal, ste) => {
    var check = [];
    if (bal.idx == null)
        check = cpy.clrLst;
    if (bal.idx == COSMOS.SUPERNAL.idx)
        check = cpy.clrLst.slice(0, 6);
    if (bal.idx == COSMOS.BLESSED.idx)
        check = cpy.clrLst.slice(2, 13);
    if (bal.idx == COSMOS.CLOCKWISE.idx)
        check = cpy.clrLst.slice(6, 20);
    if (bal.idx == COSMOS.BOUNDED.idx)
        check = cpy.clrLst.slice(9, 27);
    if (bal.idx == COSMOS.COUNTER_CLOCKWISE.idx)
        check = cpy.clrLst.slice(10, 41);
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "list-color", lst: check } });
    return cpy;
};
exports.listColor = listColor;
const COSMOS = require("../../val/cosmos");
//# sourceMappingURL=color.buzz.js.map