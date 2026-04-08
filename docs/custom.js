// ---------- 🔗 URL parameters ----------
function getParam(name) {
    let url = new URL(window.location.href);
    return url.searchParams.get(name);
}


// ---------- 🚀 hoofd ----------
window.addEventListener("load", function () {

    let mapDiv = document.getElementById("map");
    if (!mapDiv) return;

    // ---------- 📦 infoblok ----------
    if (!document.querySelector(".info-panel")) {

        let div = document.createElement("div");
        div.className = "info-panel";

        div.innerHTML = `
            <div class="info-header">▼ Over deze kaart</div>
            <div class="info-content" style="display:block;">
                <div>Zoek op plaats:</div>
                <input type="text" id="searchBox" placeholder="Zoek plaats..." />
                
                <button id="copyLinkBtn" style="margin-top:8px;">
                    📋 Deel huidige kaart
                </button>

                <div style="margin-top:8px;">
                    Klik op een marker voor info.
                </div>
            </div>
        `;

        mapDiv.appendChild(div);
    }


    // ---------- 🔍 zoekfunctie ----------
    document.getElementById("searchBox").addEventListener("keydown", function(e) {

        if (e.key === "Enter") {

            let query = this.value;

            fetch("https://nominatim.openstreetmap.org/search?format=json&q=" + query + ", Netherlands")
                .then(r => r.json())
                .then(data => {

                    if (data.length > 0) {

                        let lat = parseFloat(data[0].lat);
                        let lon = parseFloat(data[0].lon);

                        map.getView().setCenter(ol.proj.fromLonLat([lon, lat]));
                        map.getView().setZoom(13);

                    } else {
                        alert("Plaats niet gevonden");
                    }
                });
        }
    });


    // ---------- 🔗 deel-knop ----------
    document.getElementById("copyLinkBtn").addEventListener("click", function() {

        let center = ol.proj.toLonLat(map.getView().getCenter());
        let zoom = map.getView().getZoom();

        let url = window.location.origin + window.location.pathname +
            "?lat=" + center[1].toFixed(5) +
            "&lon=" + center[0].toFixed(5) +
            "&zoom=" + Math.round(zoom);

        navigator.clipboard.writeText(url);

        alert("Link gekopieerd!");
    });


    // ---------- 📍 openen via link ----------
    let lat = getParam("lat");
    let lon = getParam("lon");
    let zoom = getParam("zoom");

    if (lat && lon) {

        let coord = ol.proj.fromLonLat([parseFloat(lon), parseFloat(lat)]);

        map.getView().setCenter(coord);
        map.getView().setZoom(zoom ? parseInt(zoom) : 15);

        // ---------- ⭐ highlight marker ----------
        let highlight = new ol.Feature({
            geometry: new ol.geom.Point(coord)
        });

        highlight.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({color: 'rgba(255,0,0,0.4)'}),
                stroke: new ol.style.Stroke({color: '#ff0000', width: 2})
            })
        }));

        let vectorLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [highlight]
            })
        });

        map.addLayer(vectorLayer);
    }
});


// ---------- 🔽 inklappen ----------
document.addEventListener("click", function(e) {

    let header = e.target.closest(".info-header");

    if (header) {
        let content = header.nextElementSibling;

        let open = content.style.display === "block";

        content.style.display = open ? "none" : "block";

        header.innerHTML = (open ? "▶ " : "▼ ") + "Over deze kaart";
    }
});
