const explorer = document.getElementById("explorer");
const container = document.getElementById("editor");

function zoomIn() {
    if (fontSize >= 26) {
        console.log("Maximum font size is 26");
    } else {
        fontSize += 2;
        editor.updateOptions({ 
            fontSize: fontSize 
        });
    }
}

function zoomOut() {
    if (fontSize <= 4) {
        console.log("Minimum font size is 4");
    } else {
        fontSize -= 2;
        editor.updateOptions({ 
            fontSize: fontSize 
        });
    }
}

var isExplorerHidden = true;
function hideExplorer() {
    if (isExplorerHidden == false) {
        isExplorerHidden = true;
        container.setAttribute("class", "editorMini")
        explorer.setAttribute("class", "explorerShow");
    } else {
        isExplorerHidden = false;
        container.setAttribute("class", "editorFull")
        explorer.setAttribute("class", "explorerHidden");
    }
}