window.chrome = opener.window.chrome;
chrome.bookmarks.getTree(tree => {
    function processNode(node) {
        node.forEach(elem => {
            if (!elem.unmodifiable) {
                if (elem.children) {
                    processNode(elem.children);
                } else if (elem.url && (typeof elem.id != "undefined") && (new URLSearchParams(elem.url).get("restore"))) {
                    chrome.bookmarks.update(elem.id, {url: (new URLSearchParams(elem.url)).get("restore")});
                }
            }
        })
    }
    processNode(tree);
    alert("The deed is undone.");
});