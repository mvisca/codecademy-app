const { app, BrowserWindow, Menu } = require('electron');
// const fs = require('fs');
// var path = require('path');

let win;

let menuTemplate = [
  {
    label: 'Session',
    submenu: [
      {
        label: 'Login',
        click() {
          win.loadURL(
            https://www.codecademy.com/login)
        }
      },
      { type: 'separator' },
      {
        label: 'Logout',
        click() {
          win.loadURL(
            https://www.codecademy.com/sign_out)
        }
      },
      { type: 'separator' },
      {
        label: 'Exit',
        click() {
          app.quit()
        }
      }
    ]
  }
];

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 750
  });
  win.loadURL('https://www.codecademy.com/login');
  win.on('closed', () => { win = null });
  // Avoid new windows from _blak or other...
  win.webContents.setWindowOpenHandler('new-window', (event, url) => {
    event.preventDefault();
    win.loadURL(url);
  })
  // Build menu
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);


// Based on the guide https://www.geeksforgeeks.org/create-a-geeksforgeeks-wrapper-application-using-electron/
