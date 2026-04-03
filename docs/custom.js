window.addEventListener("load", function () {

    let mapDiv = document.getElementById("map");

    if (!mapDiv) {
        alert("map niet gevonden");
        return;
    }

    let div = document.createElement("div");
    div.className = "info-panel";

    div.innerHTML =
        '<div class="info-header">ℹ️ Toelichting</div>' +
        '<div class="info-content">Dit is een testtekst.</div>';

    mapDiv.appendChild(div);
});


// toggle
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("info-header")) {
        const content = e.target.nextElementSibling;
        content.style.display =
            content.style.display === "none" ? "block" : "none";
    }
});
