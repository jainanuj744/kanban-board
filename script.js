let add_btn = document.querySelector(".add-btn");
let del_btn = document.querySelector(".del-btn");
let lock_btn = document.querySelector(".lock_btn i");
let modal = document.querySelector(".action");
let trash = document.querySelector(".fa-trash");
let priority_color = document.querySelectorAll(".priority-color")
// let lock_logo = lock_btn.querySelector(".fa-lock");
let addModal = true;
let deleteOnn = true;
// let lockFlag = true;

add_btn.addEventListener("click", function () {
    if (addModal) {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
    addModal = !addModal;
})

del_btn.addEventListener("click", function () {
    if (deleteOnn) {
        trash.style.color = "red";
    } else {
        trash.style.color = "black";
    }
    deleteOnn = !deleteOnn;
})

lock_btn.addEventListener("click", function () {
    if (lock_btn.classList.contains("fa-lock")) {
        console.log("btn unlocked");
        lock_btn.classList.remove("fa-lock");
        lock_btn.classList.add("fa-lock-open");
    }
    else {
        console.log("btn locked");
        lock_btn.classList.remove("fa-lock-open");
        lock_btn.classList.add("fa-lock");
    }
})

for (let i = 0; i < priority_color.length; i++) {
    priority_color[i].addEventListener("click", function () {
        for (let i = 0; i < priority_color.length; i++) {
            if (priority_color[i].classList.contains("active")) {
                priority_color[i].classList.remove("active");
            }
        }
        priority_color[i].classList.add("active");
    })
}