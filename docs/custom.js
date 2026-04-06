// wacht tot alles geladen is
window.addEventListener("load", function () {

    let mapDiv = document.getElementById("map");
    if (!mapDiv) return;

    // voorkom dubbel toevoegen
    if (document.querySelector(".info-panel")) return;

    let div = document.createElement("div");
    div.className = "info-panel";

    div.innerHTML = `
        <div class="info-header">▶ Over deze kaart</div>
        <div class="info-content">
            <div>Zoek op plaats:</div>
            <input type="text" id="searchBox" placeholder="Zoek plaats..." />
            
            <div style="margin-top:8px;">
                Klik op een marker, dan verschijnt een popup met een link naar informatie.
            </div>
        </div>
    `;

    mapDiv.appendChild(div);
});


// 🔥 BETROUWBARE klik-handler (dit was je probleem)
document.addEventListener("click", function(e) {

    let header = e.target.closest(".info-header");

    if (header) {
        let content = header.nextElementSibling;

        let open = content.style.display === "block";

        content.style.display = open ? "none" : "block";

        header.innerHTML = (open ? "▶ " : "▼ ") + "Over deze kaart";
    }
});
