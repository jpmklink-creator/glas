window.addEventListener("load", function () {

    let interval = setInterval(function () {

        // pak de kaartcontainer (werkt altijd)
        let mapDiv = document.querySelector("#map");

        if (mapDiv) {
            clearInterval(interval);

            let div = document.createElement("div");
            div.className = "info-panel";

            div.innerHTML =
                '<div class="info-header">ℹ️ Toelichting</div>' +
                '<div class="info-content">Dit is een testtekst.</div>';

            mapDiv.appendChild(div);
        }

    }, 500);
});


// toggle
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("info-header")) {
        const content = e.target.nextElementSibling;
        content.style.display =
            content.style.display === "none" ? "block" : "none";
    }
});
