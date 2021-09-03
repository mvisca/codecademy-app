
const { app, BrowserWindow } = require('electron')

// Global variable that holds the app window
let win

function createWindow() {

  // Creating the browser window
  win = new BrowserWindow({
    width: 600,
    height: 750,
  })

  // Load a redirecting url from
  // login to the feed
  win.loadURL(
    'https://www.codecademy.com/login')

  win.on('closed', () => {
    win = null
  })

  // Prevent from spawning new windows
  win.webContents.on('new-window', (event, url) => {

    event.preventDefault()
    win.loadURL(url)
  })
}

// Executing the createWindow function
// when the app is ready
app.on('ready', createWindow)

// Based on the guide https://www.geeksforgeeks.org/create-a-geeksforgeeks-wrapper-application-using-electron/
