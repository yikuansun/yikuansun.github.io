function gentable(data) {
    var table = document.createElement("table");
    document.body.appendChild(table);
    table.style.width = "100%";
    var i = 0;
    var row = document.createElement("tr");
    for (var point of data) {
        if (i % 3 == 0) {
            row = document.createElement("tr");
            table.appendChild(row);
        }
        var td = document.createElement("td");
        td.style.position = "relative";
        var divblock = document.createElement("div");
        divblock.style.width = "100%";
        divblock.style.height = "300px";
        divblock.style.backgroundImage = "url('" + point.imageuri + "')";
        divblock.style.backgroundSize = "cover";
        divblock.style.cursor = "pointer";
        divblock.addEventListener("click", new Function("var a = document.createElement('a'); a.href = '{hyperlink}'; a.target = '_blank'; a.click();".replace("{hyperlink}", point.uri)));
        var banner = document.createElement("div");
        banner.style.backgroundColor = "#EEEEEE";
        banner.style.position = "absolute";
        banner.style.width = "100%";
        banner.style.height = "75px";
        banner.style.padding = "15px";
        banner.style.fontSize = "25px";
        banner.style.boxSizing = "border-box";
        banner.style.bottom = 0;
        banner.innerHTML = point.name;
        divblock.appendChild(banner);
        td.appendChild(divblock);
        row.appendChild(td);
        i++;
    }
}

gentable([
    {
        name: "Runtime Speedrun Tools",
        imageuri: "https://github.com/yikuansun/desktopspeedruntools/raw/main/demopic.png",
        uri: "https://github.com/yikuansun/desktopspeedruntools#runtime-speedrun-tools"
    },
    {
        name: "Sci-Fi Flares",
        imageuri: "https://github.com/yikuansun/sci-fi-flares/raw/master/demoflare.png",
        uri: "https://yikuansun.github.io/sci-fi-flares"
    },
]);