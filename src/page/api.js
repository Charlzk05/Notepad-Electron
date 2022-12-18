window.API.open((event, content) => {
    editor.setValue(content);
});

window.API.saveCall((event, callback) => {
    window.API.save(editor.getValue());
});

window.API.saveAsCall((event, callback) => {
    window.API.saveAs(editor.getValue());
});

window.API.actualSize((event, callback) => {
    fontSize = 14;
    editor.updateOptions({
        fontSize: fontSize
    });
});

window.API.zoomIn((event, callback) => {
    zoomIn();
});

window.API.zoomOut((event, callback) => {
    zoomOut();
});

window.API.openFolderFiles((event, files) => {
    var listbox = explorer.getElementsByTagName("div")[0];

    Array.from(listbox.getElementsByTagName("p")).forEach((item) => {
        listbox.removeChild(item);
    });

    files.forEach((file) => {
        if (file.includes(".")) {
            var item = document.createElement("p");
            item.innerText = file;

            item.addEventListener("click", () => {
                window.API.selectedFile(file);
            });

            listbox.appendChild(item);
        }
    });
});

window.API.selectedFileContent((event, content) => {
    editor.setValue(content);
});

window.API.saveSelectedFileCall((event, callback) => {
    window.API.saveSelectedFile(editor.getValue());
});

window.API.explorer((event, callback) => {
    hideExplorer();
});

window.API.new((event, callback) => {
    editor.setValue("");
});