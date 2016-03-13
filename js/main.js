function I(id) {
    return document.getElementById(id);
}

I("header").onclick = function() {
    if(document.title=="CatSquad | Home Page") {
        I("header").onclick = location.href = "#";
    } else {
        I("header").onclick = location.href = "../index.html";
    }
}
