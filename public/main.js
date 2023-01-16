function toggleActive(e) {
    e.target.id = e.target.id === "active-project" ? "" : "active-project";
    console.log(e.target.id);
    history.pushState(null, "TestFillIn", url);
}
window.onload = function() {
    document.querySelectorAll(".project-card").forEach(function(div) {
        div.addEventListener("click", toggleActive);
    });
}
  