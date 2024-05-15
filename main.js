const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true
        },
        autoHideMenuBar: true // Hide the menu bar
    });

    // Set icon explicitly
    win.setIcon(path.join(__dirname, 'logo.ico'));

    win.loadFile('index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
