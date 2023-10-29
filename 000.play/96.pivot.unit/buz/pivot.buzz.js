"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudPivot = exports.patchPivot = exports.editPivot = exports.runPivot = exports.openPivot = exports.updatePivot = exports.initPivot = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActPly = require("../../00.play.unit/play.action");
const ActPvt = require("../../96.pivot.unit/pivot.action");
const ActVrt = require("../../act/vurt.action");
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat;
const initPivot = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActPly], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-machine" } });
    return cpy;
};
exports.initPivot = initPivot;
const updatePivot = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    exec('tsc -b 000.play', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "000.play" });
        process.chdir("../000.play");
        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/000.play.js' });
        var play = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../../gillisse/public/jsx/000.play.js', dat: play });
        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' });
        var html = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' });
        var index = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../../gillisse/public/jsx/index.js', dat: index });
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../../gillisse/index.html', dat: html });
        bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../../gillisse/src' });
        setTimeout(() => {
            if (bal.slv != null)
                bal.slv({ pvtBit: { idx: "update-pivot" } });
        }, 3);
    });
    return cpy;
};
exports.updatePivot = updatePivot;
const openPivot = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../../gillisse/src' });
    bit = await ste.hunt(ActPvt.RUN_PIVOT, {});
    const open = require('open');
    var loc = './vrt.opn.bat';
    bit = await open(loc);
    const { exec } = require('child_process');
    //process.chdir("../../deploy/fictiq.com");
    //exec('vrt.dev.bat', async (err, stdout, stderr) => {
    //   if (err) {
    //       console.error(`exec error: ${err}`);
    //   }
    //   process.chdir("../../packages/000.play");
    if (bal.slv != null)
        bal.slv({ pvtBit: { idx: "open-pivot" } });
    //});
    return cpy;
};
exports.openPivot = openPivot;
const runPivot = async (cpy, bal, ste) => {
    const open = require('open');
    var loc = './vrt.gil.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ pvtBit: { idx: "run-pivot" } });
    });
    return cpy;
};
exports.runPivot = runPivot;
const editPivot = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir("../../studio/");
    exec('start Code.exe ../gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir("../packages/000.play");
        if (bal.slv != null)
            bal.slv({ pvtBit: { idx: "edit-pivot", dat: {} } });
    });
    return cpy;
};
exports.editPivot = editPivot;
const patchPivot = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.patchPivot = patchPivot;
const cloudPivot = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './cloud', idx: '../../deploy/fictiq.com' });
    if (bal.slv != null)
        bal.slv({ pvtBit: { idx: "cloud-pivot", dat: {} } });
    return cpy;
};
exports.cloudPivot = cloudPivot;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=pivot.buzz.js.map