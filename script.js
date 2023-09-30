let inputtask=document.getElementById("input-box");
let tasklist=document.querySelector(".task-list");

function addtask() {
    if (inputtask.value === '') {
        alert("You must write something")
    } 
    else{
        let Li=document.createElement("li");
        Li.classList.add("mainli");
        Li.innerHTML=inputtask.value;
        tasklist.appendChild(Li);
        
        let settings=`<div class="settings">
        <span>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </span>
        <div class="task-edit">
          <span class="edit"><ion-icon name="create-outline"></ion-icon></span>
          <span class="delete"><ion-icon name="trash-outline"></ion-icon></span>
        </div>
      </div>`;
      Li.insertAdjacentHTML("beforeend",settings);
    }
    inputtask.value='';
}


tasklist.addEventListener("click",function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.className === "delete") {
        e.target.parentNode.parentNode.parentNode.remove();
    }
    else if(e.target.className === "edit"){
        e.target.parentNode.parentNode.parentNode.remove();
        inputtask.value=e.target.parentElement.parentElement.parentElement.innerText;
    }
},false);