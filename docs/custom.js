window.addEventListener("load", function () {

    setTimeout(function () {

        // kaart centreren
        map.getView().setCenter(ol.proj.fromLonLat([5.4, 52.15]));
        map.getView().setZoom(8);

        // infoblok
        let div = document.createElement("div");
        div.className = "info-panel";
        div.style.position = "absolute";
        div.style.top = "10px";
        div.style.left = "10px";
        div.style.zIndex = "9999";
        div.style.background = "white";
        div.style.padding = "10px";

        div.innerHTML = `
            monumentaal glas op de kaart<br><br>
            <button onclick="alert('werkt')">Test knop</button>
        `;

        document.getElementById("map").appendChild(div);

    }, 1000);

});
