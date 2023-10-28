import { app, ipcMain, dialog, BrowserWindow } from 'electron'
import path from 'path'
import os from 'os'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

let mainWindow

const MQTT = require('async-mqtt');

const GAME = require('../000.game/index.js')
const ActGme = require('../000.game/00.game.unit/game.action')

const STORE = require('../001.store/index.js')
const ActStr = require('../001.store/00.store.unit/store.action')

const SPACE = require('../002.space/index.js')
const ActSpc = require('../002.space/00.space.unit/space.action')

const EARTH = require('../011.earth/index.js')
const ActErt = require('../011.earth/00.earth.unit/earth.action')

const aedes = require("aedes")();
const server = require("net").createServer(aedes.handle);
const port = 9011;

server.listen(port, async () => {
  console.log("server started and listening on port ", port);
  //open(port)

  const local = 'mqtt://localhost:' + port;
  const localBit = { idx: 'local', src: local };

  var bit = await STORE.hunt(ActStr.INIT_STORE, { val: 0, dat: MQTT, src: local })
  console.log(JSON.stringify(bit))

  var bit = await SPACE.hunt(ActSpc.INIT_SPACE, { val: 0, dat: MQTT, src: local })
  console.log(JSON.stringify(bit))

  var bit = await EARTH.hunt(ActErt.INIT_EARTH, { val: 0, dat: MQTT, src: local })
  console.log(JSON.stringify(bit))

  var bit = await GAME.hunt(ActGme.INIT_GAME, { val: 0, dat: MQTT, src: local });
  console.log(JSON.stringify(bit))

});


async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({})
  if (!canceled) {
    return filePaths[0]
  }
}

async function openGame() {



  var bit = await GAME.hunt(ActGme.OPEN_GAME, { val: 0 })
  return bit
}

async function createWindow() {

  ipcMain.handle('dialog:openFile', handleFileOpen)
  ipcMain.handle('game:openGame', openGame)

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1600,
    height: 900,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.setPosition(-600, 1800);
  mainWindow.maximize();

  console.log("in the beginning...")

  // IPC listener
  ipcMain.on('electron-store-get', async (event, val) => {

    bit = await TIME.hunt(ActTme.INIT_TIME, { val: 0 })
    event.returnValue = JSON.stringify(bit);

  });
  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set('alligator', 0);
  });


  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
