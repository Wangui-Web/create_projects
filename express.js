let visibilityStatus = false;

function toggle() {

    let menuContent = document.querySelector(".menu-content");
    let getMenuContentUl = document.querySelector(".menu-content ul");
    let getMenuContentLinks = document.querySelectorAll(".menu-content ul li a")

    if (visibilityStatus === false) {
        menuContent.style.width = "200px";

        visibilityStatus = true;
    } else {
        menuContent.style.width = "0px";

        visibilityStatus = false;
    }
}