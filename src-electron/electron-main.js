import { app, ipcMain, BrowserWindow } from 'electron'
import path from 'path'
import os from 'os'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

let mainWindow

async function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 600,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  //mainWindow.setPosition(-600, 1800);

  console.log("beginning...")

  const STORE = require('../001.store/index.js')
  const ActStr = require('../001.store/00.store.unit/store.action')

  var bit = await STORE.hunt(ActStr.INIT_STORE, { val: 0 })
  console.log(JSON.stringify(bit))

  bit = await STORE.hunt(ActStr.WRITE_STORE, { val: 0 })
  console.log(JSON.stringify(bit))

  bit = await STORE.hunt(ActStr.READ_STORE, { val: 0 })
  console.log(JSON.stringify(bit))

  const SPACE = require('../002.space/index.js')
  const ActSpc = require('../002.space/00.space.unit/space.action')

  bit = await SPACE.hunt(ActSpc.INIT_SPACE, { val: 0 })
  console.log(JSON.stringify(bit))


  const TIME = require('../003.time/index.js')
  const ActTme = require('../003.time/00.time.unit/time.action')

  bit = await TIME.hunt(ActTme.INIT_TIME, { val: 0 })
  console.log(JSON.stringify(bit))

  // IPC listener
  ipcMain.on('electron-store-get', async (event, val) => {

    bit = await TIME.hunt( ActTme.INIT_TIME, { val: 0 })
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
