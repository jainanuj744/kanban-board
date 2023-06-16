let add_btn = document.querySelector(".add-btn");
let del_btn = document.querySelector(".del-btn");
let modal = document.querySelector(".action");

let addModal = true;

add_btn.addEventListener("click",function(){
    if(addModal){
        modal.style.display = "flex";
    }else{
        modal.style.display = "none";
    }
    addModal = !addModal;
})

del_btn.addEventListener("click",function(){
    console.log("Delete btn is clicked");
})