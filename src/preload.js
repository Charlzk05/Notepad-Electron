const { contextBridge, ipcRenderer } = require("electron");

const API = {
    open: (data) => ipcRenderer.on("open", data),
    saveCall: (callback) => ipcRenderer.on("saveCall", callback),
    save: (value) => ipcRenderer.send("save", value),
    saveAsCall: (callback) => ipcRenderer.on("saveAsCall", callback),
    saveAs: (value) => ipcRenderer.send("saveAs", value),
    actualSize: (callback) => ipcRenderer.on("actualSize", callback),
    zoomIn: (callback) => ipcRenderer.on("zoomIn", callback),
    zoomOut: (callback) => ipcRenderer.on("zoomOut", callback),
    openFolderFiles: (files) => ipcRenderer.on("openFolderFiles", files),
    selectedFile: (file) => ipcRenderer.send("selectedFile", file),
    selectedFileContent: (content) => ipcRenderer.on("selectedFileContent", content),
    saveSelectedFileCall: (callback) => ipcRenderer.on("saveSelectedFileCall", callback),
    saveSelectedFile: (content) => ipcRenderer.send("saveSelectedFile", content),
    explorer: (callback) => ipcRenderer.on("explorer", callback),
    new: (callback) => ipcRenderer.on("new", callback),

    plainText: (callback) => ipcRenderer.on("plainText", callback),
    abap: (callback) => ipcRenderer.on('abap', callback),
    apex: (callback) => ipcRenderer.on('apex', callback),
    azcli: (callback) => ipcRenderer.on('azcli', callback),
    bat: (callback) => ipcRenderer.on('bat', callback),
    bicep: (callback) => ipcRenderer.on('bicep', callback),
    cameligo: (callback) => ipcRenderer.on('cameligo', callback),
    clojure: (callback) => ipcRenderer.on('clojure', callback),
    coffee: (callback) => ipcRenderer.on('coffee', callback),
    cpp: (callback) => ipcRenderer.on('cpp', callback),
    csharp: (callback) => ipcRenderer.on('csharp', callback),
    csp: (callback) => ipcRenderer.on('csp', callback),
    css: (callback) => ipcRenderer.on('css', callback),
    cypher: (callback) => ipcRenderer.on('cypher', callback),
    dart: (callback) => ipcRenderer.on('dart', callback),
    dockerfile: (callback) => ipcRenderer.on('dockerfile', callback),
    ecl: (callback) => ipcRenderer.on('ecl', callback),
    elixir: (callback) => ipcRenderer.on('elixir', callback),
    flow9: (callback) => ipcRenderer.on('flow9', callback),
    freemarker2: (callback) => ipcRenderer.on('freemarker2', callback),
    fsharp: (callback) => ipcRenderer.on('fsharp', callback),
    go: (callback) => ipcRenderer.on('go', callback),
    graphql: (callback) => ipcRenderer.on('graphql', callback),
    handlebars: (callback) => ipcRenderer.on('handlebars', callback),
    hcl: (callback) => ipcRenderer.on('hcl', callback),
    html: (callback) => ipcRenderer.on('html', callback),
    ini: (callback) => ipcRenderer.on('ini', callback),
    java: (callback) => ipcRenderer.on('java', callback),
    javascript: (callback) => ipcRenderer.on('javascript', callback),
    julia: (callback) => ipcRenderer.on('julia', callback),
    kotlin: (callback) => ipcRenderer.on('kotlin', callback),
    less: (callback) => ipcRenderer.on('less', callback),
    lexon: (callback) => ipcRenderer.on('lexon', callback),
    liquid: (callback) => ipcRenderer.on('liquid', callback),
    lua: (callback) => ipcRenderer.on('lua', callback),
    m3: (callback) => ipcRenderer.on('m3', callback),
    markdown: (callback) => ipcRenderer.on('markdown', callback),
    mips: (callback) => ipcRenderer.on('mips', callback),
    msdax: (callback) => ipcRenderer.on('msdax', callback),
    mysql: (callback) => ipcRenderer.on('mysql', callback),
    objectivec: (callback) => ipcRenderer.on('objectivec', callback),
    pascal: (callback) => ipcRenderer.on('pascal', callback),
    pascaligo: (callback) => ipcRenderer.on('pascaligo', callback),
    perl: (callback) => ipcRenderer.on('perl', callback),
    pgsql: (callback) => ipcRenderer.on('pgsql', callback),
    php: (callback) => ipcRenderer.on('php', callback),
    pla: (callback) => ipcRenderer.on('pla', callback),
    postiats: (callback) => ipcRenderer.on('postiats', callback),
    powerquery: (callback) => ipcRenderer.on('powerquery', callback),
    powershell: (callback) => ipcRenderer.on('powershell', callback),
    protobuf: (callback) => ipcRenderer.on('protobuf', callback),
    pug: (callback) => ipcRenderer.on('pug', callback),
    python: (callback) => ipcRenderer.on('python', callback),
    qsharp: (callback) => ipcRenderer.on('qsharp', callback),
    r: (callback) => ipcRenderer.on('r', callback),
    razor: (callback) => ipcRenderer.on('razor', callback),
    redis: (callback) => ipcRenderer.on('redis', callback),
    redshift: (callback) => ipcRenderer.on('redshift', callback),
    restructuredtext: (callback) => ipcRenderer.on('restructuredtext', callback),
    ruby: (callback) => ipcRenderer.on('ruby', callback),
    rust: (callback) => ipcRenderer.on('rust', callback),
    sb: (callback) => ipcRenderer.on('sb', callback),
    scala: (callback) => ipcRenderer.on('scala', callback),
    scheme: (callback) => ipcRenderer.on('scheme', callback),
    scss: (callback) => ipcRenderer.on('scss', callback),
    shell: (callback) => ipcRenderer.on('shell', callback),
    solidity: (callback) => ipcRenderer.on('solidity', callback),
    sophia: (callback) => ipcRenderer.on('sophia', callback),
    sparql: (callback) => ipcRenderer.on('sparql', callback),
    sql: (callback) => ipcRenderer.on('sql', callback),
    st: (callback) => ipcRenderer.on('st', callback),
    swift: (callback) => ipcRenderer.on('swift', callback),
    systemverilog: (callback) => ipcRenderer.on('systemverilog', callback),
    tcl: (callback) => ipcRenderer.on('tcl', callback),
    twig: (callback) => ipcRenderer.on('twig', callback),
    typescript: (callback) => ipcRenderer.on('typescript', callback),
    vb: (callback) => ipcRenderer.on('vb', callback),
    xml: (callback) => ipcRenderer.on('xml', callback),
    yaml: (callback) => ipcRenderer.on('yaml', callback),
}

contextBridge.exposeInMainWorld("API", API);