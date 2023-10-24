"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushClock = exports.deleteClock = exports.createClock = exports.removeClock = exports.writeClock = exports.readClock = exports.updateClock = exports.initClock = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActClk = require("../../01.clock.unit/clock.action");
var bit, val, idx, dex, lst, dat;
const initClock = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initClock = initClock;
const updateClock = async (cpy, bal, ste) => {
    return cpy;
};
exports.updateClock = updateClock;
const readClock = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "hex00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActClk.READ_CLOCK });
    if (slv != null)
        slv({ fcgBit: { idx: "read-focigon", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readClock = readClock;
const writeClock = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClk.CREATE_CLOCK });
    ste.hunt(ActClk.UPDATE_CLOCK, { idx: bal.idx, dat: bal.dat.dat });
    if (bal.slv != null)
        bal.slv({ fcgBit: { idx: "write-focigon", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeClock = writeClock;
const removeClock = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClk.DELETE_CLOCK });
    if (bal.slv != null)
        bal.slv({ fcgBit: { idx: "remove-focigon", dat: bit.clcBit } });
    return cpy;
};
exports.removeClock = removeClock;
const createClock = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    for (var key in bal.dat) {
        if (key == 'dat')
            continue;
        dat[key] = bal.dat[key];
    }
    if (dat.idx == null)
        dat.idx = bal.idx;
    if (dat.src == null)
        dat.src = "clk-bit";
    if (dat.val == null)
        dat.val = 0;
    if (dat.pst == null)
        dat.pst = 0;
    if (dat.qtr == null)
        dat.qtr = 0;
    if (dat.yrs == null)
        dat.yrs = 3210;
    if (dat.mth == null)
        dat.mth = 3;
    if (dat.wek == null)
        dat.wek = 3;
    if (dat.day == null)
        dat.day = 3;
    if (dat.hrs == null)
        dat.hrs = 3;
    if (dat.min == null)
        dat.min = 3;
    if (dat.sec == null)
        dat.sec = 3;
    var date = luxon_1.DateTime.local(dat.yrs, dat.mth, dat.day, dat.hrs, dat.min, dat.sec);
    dat.yrs = date.year;
    dat.mth = date.month;
    dat.day = date.day;
    dat.hrs = date.hour;
    dat.min = date.minute;
    dat.sec = date.second;
    dat.cnt = Math.floor(date.diff(luxon_1.DateTime.local(dat.yrs, 1, 1), "days").days);
    dat.wek = date.weekNumber;
    dat.qtr = date.quarter;
    dat.src = date.toFormat("MM-dd-yyyy, hh:mm:ss a");
    dat.now = date.valueOf();
    bal.slv({ clkBit: { idx: "create-clock", dat: dat } });
    return cpy;
};
exports.createClock = createClock;
const deleteClock = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteClock = deleteClock;
//adds a tic bit of material to clock and return new tic bit of result
const pushClock = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActClk.READ_CLOCK, { idx: bal.idx });
    var dat = bit.clkBit.dat;
    var date = luxon_1.DateTime.local(dat.yrs, dat.mth, dat.day, dat.hrs, dat.min, dat.sec);
    var upd = bal.dat;
    return cpy;
};
exports.pushClock = pushClock;
const luxon_1 = require("luxon");
//# sourceMappingURL=clock.buzz.js.map