function gensoftwaregallery(data) {
    var table = document.createElement("table");
    document.querySelector("#softwaregallery").appendChild(table);
    table.style.width = "100%";
    table.style.borderSpacing = "10px";
    var i = 0;
    var row = document.createElement("tr");
    for (var point of data) {
        if (i % Math.ceil(window.innerWidth / 500) == 0) {
            row = document.createElement("tr");
            table.appendChild(row);
        }
        var td = document.createElement("td");
        td.style.position = "relative";
        td.style.border = "1px solid grey";
        var divblock = document.createElement("a");
        divblock.style.display = "block";
        divblock.style.width = "100%";
        divblock.style.height = "300px";
        divblock.style.backgroundImage = "url('" + point.imageuri + "')";
        divblock.style.backgroundSize = "cover";
        divblock.style.backgroundPosition = "center";
        divblock.href = point.uri;
        divblock.target = "_blank";
        var banner = document.createElement("div");
        banner.style.backgroundColor = "#EEEEEE";
        banner.style.position = "absolute";
        banner.style.width = "100%";
        banner.style.minHeight = "75px";
        banner.style.padding = "15px";
        banner.style.fontSize = "25px";
        banner.style.boxSizing = "border-box";
        banner.style.bottom = 0;
        banner.innerHTML = point.name;
        var desc = document.createElement("div");
        desc.style.fontSize = "15px";
        desc.innerText = point.desc;
        desc.style.color = "black";
        banner.appendChild(desc);
        divblock.appendChild(banner);
        td.appendChild(divblock);
        row.appendChild(td);
        i++;
    }
}

gensoftwaregallery([
    {
        name: "Legend",
        imageuri: "https://bit.ly/rahavi",
        uri: "https://legendvc.netlify.app/",
        desc: "Virtual game console"
    },
    {
        name: "progen flares",
        imageuri: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/504/634/datas/gallery.jpg",
        uri: "https://yikuansun.github.io/progenflares",
        desc: "Procedurally generated lens flare overlays"
    },
    {
        name: "Runtime Speedrun Tools",
        imageuri: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/434/486/datas/medium.png",
        uri: "https://github.com/yikuansun/desktopspeedruntools#runtime-speedrun-tools",
        desc: "Speedrun stopwatch and input display"
    },
]);