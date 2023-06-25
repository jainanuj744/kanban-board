let add_btn = document.querySelector(".add-btn");
let del_btn = document.querySelector(".del-btn");
// let lock_btn = document.querySelector(".lock_btn i");
let modal = document.querySelector(".action");
let trash = document.querySelector(".fa-trash");
let priority_color = document.querySelectorAll(".priority-color")
let textarea = document.querySelector(".textarea");
let card_container = document.querySelector(".card_container");

// let lock_logo = lock_btn.querySelector(".fa-lock");
let addModal = true;
let deleteOnn = false;
let cardColor = "black";
// let lockFlag = true;

var uid = new ShortUniqueId();

add_btn.addEventListener("click", function () {
    if (addModal) {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
    addModal = !addModal;
})

del_btn.addEventListener("click", function () {
    if (deleteOnn) {
        trash.style.color = "black";
    } else {
        trash.style.color = "red";
    }
    deleteOnn = !deleteOnn;
})

// lock_btn.addEventListener("click", function () {
//     if (lock_btn.classList.contains("fa-lock")) {
//         console.log("btn unlocked");
//         lock_btn.classList.remove("fa-lock");
//         lock_btn.classList.add("fa-lock-open");
//     }
//     else {
//         console.log("btn locked");
//         lock_btn.classList.remove("fa-lock-open");
//         lock_btn.classList.add("fa-lock");
//     }
// })

for (let i = 0; i < priority_color.length; i++) {
    priority_color[i].addEventListener("click", function (e) {
        for (let i = 0; i < priority_color.length; i++) {
            if (priority_color[i].classList.contains("active")) {
                priority_color[i].classList.remove("active");
            }
        }
        priority_color[i].classList.add("active");
        cardColor = priority_color[i].classList[1];
    })
}

textarea.addEventListener("keydown", function (e) {
    if(e.key == "Enter") {
        let card_desc = textarea.value;
        createCard(card_desc);
        textarea.value = "";
        modal.style.display = "none";
        addModal = !addModal;
    }
})

function createCard(card_desc) {
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class","card");
    cardContainer.innerHTML =`<div class="card-color ${cardColor}"></div>
                              <div class="card_id">#${uid()}</div>
                              <div class="card_area">${card_desc}</div>
                              <div class="lock_btn"><i class="fa-solid fa-lock"></i></div>`
    card_container.appendChild(cardContainer);
}