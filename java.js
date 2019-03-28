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


    clone.querySelector(".bg-modal").id = item.gsx$title.$t;
    clone.querySelector(".modal-name").textContent = item.gsx$title.$t + " MILK";



    if (item.gsx$protein.$t) {
        clone.querySelector(".modal-protein").textContent = "Protein: " + item.gsx$protein.$t + "g";
    } else {
        clone.querySelector(".modal-protein").textContent = "Protein: NONE";
    }


    if (item.gsx$calories.$t) {
        clone.querySelector(".modal-calories").textContent = "Calories: " + item.gsx$calories.$t;
    } else {
        clone.querySelector(".modal-calories").textContent = "Calories: NONE";
    }


    if (item.gsx$fat.$t) {
        clone.querySelector(".modal-fat").textContent = "Fat: " + item.gsx$fat.$t + "g";
    } else {
        clone.querySelector(".modal-fat").textContent = "Fat: NONE";
    }


    if (item.gsx$saturatedfat.$t) {
        clone.querySelector(".modal-satfat").textContent = "Saturated fat: " + item.gsx$saturatedfat.$t + "g";
    } else {
        clone.querySelector(".modal-satfat").textContent = "Saturated fat: NONE";
    }


    if (item.gsx$calcium.$t) {
        clone.querySelector(".modal-calcium").textContent = "Calcium: " + item.gsx$calcium.$t + "% of Daily Dose";
    } else {
        clone.querySelector(".modal-calcium").textContent = "Calcium: NONE";
    }

    if (item.gsx$vitamind.$t) {
        clone.querySelector(".modal-vitd").textContent = "Vitamin D: " + item.gsx$vitamind.$t + "% of Daily Dose";
    } else {
        clone.querySelector(".modal-vitd").textContent = "Vitamin D: NONE";
    }

    if (item.gsx$carbohydrates.$t) {
        clone.querySelector(".modal-ch").textContent = "Carbohydrates: " + item.gsx$carbohydrates.$t + "g";
    } else {
        clone.querySelector(".modal-ch").textContent = "Carbohydrates: NONE";
    }


    if (item.gsx$sugar.$t) {
        clone.querySelector(".modal-sugar").textContent = "Sugar: " + item.gsx$sugar.$t + "g";
    } else {
        clone.querySelector(".modal-sugar").textContent = "Sugar: NONE";
    }







    clone.querySelector(".modal-de").textContent = item.gsx$shortdescription.$t;
    clone.querySelector("button").classList.add(item.gsx$title.$t);


    body.appendChild(clone);
}

loadJSON(link);

function openModal(clicked_id) {
    console.log(clicked_id);
    const modal = document.querySelector("div.bg-modal#" + clicked_id);
    modal.classList.remove("hide");

}

function hide(classe) {
    console.log(classe);
    const modal = document.querySelector("div.bg-modal#" + classe);
    modal.classList.add("hide");
}
