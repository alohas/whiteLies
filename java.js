function showHide() {
    var navList = document.getElementById("nav-lists");

    if (navList.className == 'menus') {
        navList.classList.add("menus-show");
    } else {
        navList.classList.remove("menus-show");
    }
}



modal = document.querySelector("template").content;
body = document.querySelector("main");


function loadJSON() {
    fetch(link).then(e => e.json()).then(data => data.feed.entry.forEach(displayMilkData));
}

const link = "https://spreadsheets.google.com/feeds/list/1ZwjqC6by7V-rsZfSiTJZVL1lJ-ovxtQtLW5fA3syAZo/od6/public/values?alt=json";



function displayMilkData(item) {
    clone = modal.cloneNode("true");
    console.log(item);

    clone.querySelector(".bg-modal").id = item.gsx$title.$t;;
    clone.querySelector(".modal-name").textContent = item.gsx$title.$t;
    clone.querySelector(".modal-protein").textContent = item.gsx$protein.$t;
    clone.querySelector(".modal-calories").textContent = item.gsx$calories.$t;
    clone.querySelector(".modal-fat").textContent = item.gsx$fat.$t;
    clone.querySelector(".modal-satfat").textContent = item.gsx$saturatedfat.$t;
    clone.querySelector(".modal-calcium").textContent = item.gsx$calcium.$t;
    clone.querySelector(".modal-vitd").textContent = item.gsx$vitamind.$t;
    clone.querySelector(".modal-ch").textContent = item.gsx$carbohydrates.$t;
    clone.querySelector(".modal-sugar").textContent = item.gsx$sugar.$t;
    clone.querySelector(".modal-de").textContent = item.gsx$shortdescription.$t;


    body.appendChild(clone);
}

loadJSON(link);

function openModal(clicked_id) {
    console.log(clicked_id);
    const modal = document.querySelector("div.bg-modal#"+clicked_id);
    modal.classList.remove("hide");

}
