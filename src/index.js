const { app, BrowserWindow, Menu, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        title: "Notepad Electron",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile(path.join(__dirname, "page", "index.html"));

    var filePath = "";
    var folderPath = "";
    var selectedfile = "";
    const menu = [
        {
            label: "File",
            submenu: [
                {
                    label: "New",
                    accelerator: "CommandOrControl+N",
                    click: async () => {
                        await win.webContents.send("new");
                        win.title = "Notepad Electron";
                        filePath = "";
                        folderPath = "";
                        selectedfile = "";
                    }
                },
                {
                    label: "Open...",
                    accelerator: "CommandOrControl+O",
                    click: async () => {
                        await dialog.showOpenDialog({
                            filters: [
                                { name: "Txt Files", extensions: ["txt"] },
                                { name: "All Files", extensions: ["*"] }
                            ]
                        }).then(async (result) => {
                            if (result.canceled == false) {
                                filePath = result.filePaths.toString();
                                win.title = filePath;
                                await fs.readFile(filePath, "utf-8", async (err, data) => {
                                    if (err) {
                                        return dialog.showErrorBox(err);
                                    }

                                    await win.webContents.send("open", data);
                                });
                            }
                        });
                    }
                },
                {
                    label: "Save",
                    accelerator: "CommandOrControl+S",
                    click: async () => {
                        if (filePath != "") {
                            await win.webContents.send("saveCall");
                        }
                    }
                },
                {
                    label: "Save As...",
                    accelerator: "CommandOrControl+Shift+S",
                    click: async () => {
                        await win.webContents.send("saveAsCall");
                    }
                },
                {
                    type: "separator"
                },
                {
                    label: "Open Folder...",
                    accelerator: "CommandOrControl+Alt+K",
                    click: async () => {
                        await dialog.showOpenDialog({
                            properties: [
                                "openDirectory"
                            ]
                        }).then(async (result) => {
                            folderPath = result.filePaths.toString();
                            if (result.canceled == false) {
                                await fs.readdir(folderPath, async (err, files) => {
                                    if (err) {
                                        return console.log(err);
                                    }

                                    await win.webContents.send("openFolderFiles", files);
                                    win.title = folderPath;
                                });
                            }
                        });
                    }
                },
                {
                    label: "Save Selected File...",
                    accelerator: "CommandOrControl+Shift+Alt+S",
                    click: async () => {
                        await win.webContents.send("saveSelectedFileCall");
                    }
                },
                {
                    type: "separator"
                },
                {
                    label: "Exit"
                },
            ]
        },
        {
            role: "editMenu"
        },
        {
            label: "Language",
            submenu: [
                {
                    label: "plain text",
                    click: async () => { await win.webContents.send("plainText"); }
                },
                {
                    label: "html",
                    click: async () => { await win.webContents.send('html') }
                },
                {
                    label: "css",
                    click: async () => { await win.webContents.send('css') }
                },
                {
                    label: "javascript",
                    click: async () => { await win.webContents.send('javascript') }
                },
                {
                    type: "separator"
                },
                {
                    label: "abap",
                    click: async () => { await win.webContents.send('abap') }
                },
                {
                    label: "apex",
                    click: async () => { await win.webContents.send('apex') }
                },
                {
                    label: "azcli",
                    click: async () => { await win.webContents.send('azcli') }
                },
                {
                    label: "bat",
                    click: async () => { await win.webContents.send('bat') }
                },
                {
                    label: "bicep",
                    click: async () => { await win.webContents.send('bicep') }
                },
                {
                    label: "cameligo",
                    click: async () => { await win.webContents.send('cameligo') }
                },
                {
                    label: "clojure",
                    click: async () => { await win.webContents.send('clojure') }
                },
                {
                    label: "coffee",
                    click: async () => { await win.webContents.send('coffee') }
                },
                {
                    label: "cpp",
                    click: async () => { await win.webContents.send('cpp') }
                },
                {
                    label: "csharp",
                    click: async () => { await win.webContents.send('csharp') }
                },
                {
                    label: "csp",
                    click: async () => { await win.webContents.send('csp') }
                },
                {
                    label: "cypher",
                    click: async () => { await win.webContents.send('cypher') }
                },
                {
                    label: "dart",
                    click: async () => { await win.webContents.send('dart') }
                },
                {
                    label: "dockerfile",
                    click: async () => { await win.webContents.send('dockerfile') }
                },
                {
                    label: "ecl",
                    click: async () => { await win.webContents.send('ecl') }
                },
                {
                    label: "elixir",
                    click: async () => { await win.webContents.send('elixir') }
                },
                {
                    label: "flow9",
                    click: async () => { await win.webContents.send('flow9') }
                },
                {
                    label: "freemarker2",
                    click: async () => { await win.webContents.send('freemarker2') }
                },
                {
                    label: "fsharp",
                    click: async () => { await win.webContents.send('fsharp') }
                },
                {
                    label: "go",
                    click: async () => { await win.webContents.send('go') }
                },
                {
                    label: "graphql",
                    click: async () => { await win.webContents.send('graphql') }
                },
                {
                    label: "handlebars",
                    click: async () => { await win.webContents.send('handlebars') }
                },
                {
                    label: "hcl",
                    click: async () => { await win.webContents.send('hcl') }
                },
                {
                    label: "ini",
                    click: async () => { await win.webContents.send('ini') }
                },
                {
                    label: "java",
                    click: async () => { await win.webContents.send('java') }
                },
                {
                    label: "julia",
                    click: async () => { await win.webContents.send('julia') }
                },
                {
                    label: "kotlin",
                    click: async () => { await win.webContents.send('kotlin') }
                },
                {
                    label: "less",
                    click: async () => { await win.webContents.send('less') }
                },
                {
                    label: "lexon",
                    click: async () => { await win.webContents.send('lexon') }
                },
                {
                    label: "liquid",
                    click: async () => { await win.webContents.send('liquid') }
                },
                {
                    label: "lua",
                    click: async () => { await win.webContents.send('lua') }
                },
                {
                    label: "m3",
                    click: async () => { await win.webContents.send('m3') }
                },
                {
                    label: "markdown",
                    click: async () => { await win.webContents.send('markdown') }
                },
                {
                    label: "mips",
                    click: async () => { await win.webContents.send('mips') }
                },
                {
                    label: "msdax",
                    click: async () => { await win.webContents.send('msdax') }
                },
                {
                    label: "mysql",
                    click: async () => { await win.webContents.send('mysql') }
                },
                {
                    label: "objective-c",
                    click: async () => { await win.webContents.send('objectivec') }
                },
                {
                    label: "pascal",
                    click: async () => { await win.webContents.send('pascal') }
                },
                {
                    label: "pascaligo",
                    click: async () => { await win.webContents.send('pascaligo') }
                },
                {
                    label: "perl",
                    click: async () => { await win.webContents.send('perl') }
                },
                {
                    label: "pgsql",
                    click: async () => { await win.webContents.send('pgsql') }
                },
                {
                    label: "php",
                    click: async () => { await win.webContents.send('php') }
                },
                {
                    label: "pla",
                    click: async () => { await win.webContents.send('pla') }
                },
                {
                    label: "postiats",
                    click: async () => { await win.webContents.send('postiats') }
                },
                {
                    label: "powerquery",
                    click: async () => { await win.webContents.send('powerquery') }
                },
                {
                    label: "powershell",
                    click: async () => { await win.webContents.send('powershell') }
                },
                {
                    label: "protobuf",
                    click: async () => { await win.webContents.send('protobuf') }
                },
                {
                    label: "pug",
                    click: async () => { await win.webContents.send('pug') }
                },
                {
                    label: "python",
                    click: async () => { await win.webContents.send('python') }
                },
                {
                    label: "qsharp",
                    click: async () => { await win.webContents.send('qsharp') }
                },
                {
                    label: "r",
                    click: async () => { await win.webContents.send('r') }
                },
                {
                    label: "razor",
                    click: async () => { await win.webContents.send('razor') }
                },
                {
                    label: "redis",
                    click: async () => { await win.webContents.send('redis') }
                },
                {
                    label: "redshift",
                    click: async () => { await win.webContents.send('redshift') }
                },
                {
                    label: "restructuredtext",
                    click: async () => { await win.webContents.send('restructuredtext') }
                },
                {
                    label: "ruby",
                    click: async () => { await win.webContents.send('ruby') }
                },
                {
                    label: "rust",
                    click: async () => { await win.webContents.send('rust') }
                },
                {
                    label: "sb",
                    click: async () => { await win.webContents.send('sb') }
                },
                {
                    label: "scala",
                    click: async () => { await win.webContents.send('scala') }
                },
                {
                    label: "scheme",
                    click: async () => { await win.webContents.send('scheme') }
                },
                {
                    label: "scss",
                    click: async () => { await win.webContents.send('scss') }
                },
                {
                    label: "shell",
                    click: async () => { await win.webContents.send('shell') }
                },
                {
                    label: "solidity",
                    click: async () => { await win.webContents.send('solidity') }
                },
                {
                    label: "sophia",
                    click: async () => { await win.webContents.send('sophia') }
                },
                {
                    label: "sparql",
                    click: async () => { await win.webContents.send('sparql') }
                },
                {
                    label: "sql",
                    click: async () => { await win.webContents.send('sql') }
                },
                {
                    label: "st",
                    click: async () => { await win.webContents.send('st') }
                },
                {
                    label: "swift",
                    click: async () => { await win.webContents.send('swift') }
                },
                {
                    label: "systemverilog",
                    click: async () => { await win.webContents.send('systemverilog') }
                },
                {
                    label: "tcl",
                    click: async () => { await win.webContents.send('tcl') }
                },
                {
                    label: "twig",
                    click: async () => { await win.webContents.send('twig') }
                },
                {
                    label: "typescript",
                    click: async () => { await win.webContents.send('typescript') }
                },
                {
                    label: "vb",
                    click: async () => { await win.webContents.send('vb') }
                },
                {
                    label: "xml",
                    click: async () => { await win.webContents.send('xml') }
                },
                {
                    label: "yaml",
                    click: async () => { await win.webContents.send('yaml') }
                }
            ]
        },
        {
            label: "View",
            submenu: [
                {
                    label: "Reload",
                    accelerator: "CommandOrControl+R",
                    click: async () => {
                        await win.webContents.reload();
                    }
                },
                {
                    label: "Force Reload",
                    accelerator: "CommandOrControl+Shift+R",
                    click: async () => {
                        await win.webContents.reloadIgnoringCache();
                    }
                },
                {
                    label: "Inspect Element",
                    accelerator: "CommandOrControl+Shift+I",
                    click: async () => {
                        await win.webContents.openDevTools();
                    }
                },
                {
                    type: "separator"
                },
                {
                    type: "separator"
                },
                {
                    label: "Explorer",
                    accelerator: "CommandOrControl+Shift+E",
                    click: async () => {
                        await win.webContents.send("explorer");
                    }
                }
            ]
        },
        {
            label: "Zoom In",
            click: async () => {
                await win.webContents.send("zoomIn");
            }
        },
        {
            label: "Zoom Out",
            click: async () => {
                await win.webContents.send("zoomOut");
            }
        },
        {
            label: "Actual Size",
            click: async () => {
                await win.webContents.send("actualSize");
            }
        },
    ]

    Menu.setApplicationMenu(Menu.buildFromTemplate(menu));

    ipcMain.on("save", async (event, value) => {
        await fs.writeFile(filePath, value, (err) => {
            if (err) {
                return console.log(err);
            }

            win.title = filePath + " (Saved!)";
            setTimeout(() => {
                win.title = filePath;
            }, 1000);
        });
    });

    ipcMain.on("saveAs", async (event, value) => {
        await dialog.showSaveDialog({
            filters: [
                { name: "Txt Files", extensions: ["txt"] },
                { name: "Custom File Types", extensions: ["as"] },
                { name: "All Files", extensions: ["*"] }
            ]
        }).then(async (result) => {
            if (result.canceled == false) {
                filePath = result.filePath;
                await fs.writeFile(filePath, value, "utf-8", (err) => {
                    if (err) {
                        return console.log(err);
                    }

                    win.title = filePath;
                });
            }
        });
    });

    ipcMain.on("selectedFile", async (event, file) => {
        selectedfile = path.join(folderPath, file);
        await fs.readFile(selectedfile, "utf-8", async (err, data) => {
            if (err) {
                return console.log(err);
            }

            await win.webContents.send("selectedFileContent", data);
            win.title = selectedfile;
            filePath = "";
        });
    });

    ipcMain.on("saveSelectedFile", async (event, content) => {
        await fs.writeFile(selectedfile, content, "utf-8", (err, data) => {
            if (err) {
                return console.log(err);
            }

            win.title = selectedfile + " (Saved!)"
            setTimeout(() => {
                win.title = selectedfile;
            }, 1000);
        });
    });
}

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});