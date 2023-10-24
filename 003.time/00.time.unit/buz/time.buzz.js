"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudTime = exports.patchTime = exports.editTime = exports.runTime = exports.openTime = exports.updateTime = exports.initTime = void 0;

const ActTme = require("../time.action");

var bit, val, idx, dex, lst, dat;

const initTime = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, {
            idx: cpy.idx,
            lst: [ActTme],
            dat: bal.dat,
            src: bal.src,
        });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: 'init-time' } });
    return cpy;
};
exports.initTime = initTime;
const updateTime = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    exec('tsc -b 001.time', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir('../999.vurt');
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: '001.time' });
        process.chdir('../001.time');
        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/001.time.js' });
        var time = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, {
            src: '../gillisse/public/jsx/001.time.js',
            dat: time,
        });
        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' });
        var html = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' });
        var index = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, {
            src: '../gillisse/public/jsx/index.js',
            dat: index,
        });
        bit = await ste.bus(ActDsk.WRITE_DISK, {
            src: '../gillisse/index.html',
            dat: html,
        });
        setTimeout(() => {
            if (bal.slv != null)
                bal.slv({ tmeBit: { idx: 'update-time' } });
        }, 3);
    });
    return cpy;
};
exports.updateTime = updateTime;
const openTime = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.COPY_DISK, {
        src: './source',
        idx: '../gillisse/vue',
    });
    bit = await ste.hunt(ActTme.RUN_TIME, {});
    const open = require('open');
    var loc = './vrt.opn.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ tmeBit: { idx: 'open-time' } });
    }, 33);
    return cpy;
};
exports.openTime = openTime;
const runTime = async (cpy, bal, ste) => {
    const open = require('open');
    var loc = './vrt.gil.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ tmeBit: { idx: 'run-time' } });
    });
    return cpy;
};
exports.runTime = runTime;
const editTime = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir('../../studio/');
    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir('../packages/001.time');
        if (bal.slv != null)
            bal.slv({ tmeBit: { idx: 'edit-time', dat: {} } });
    });
    return cpy;
};
exports.editTime = editTime;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const patchTime = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.patchTime = patchTime;
const cloudTime = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.cloudTime = cloudTime;
//# sourceMappingURL=time.buzz.js.map
