const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("addButton");

window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
});

button.addEventListener('click', () => {
    if(inputBox.value === ''){
        alert('Input cannot be empty!');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

listContainer.addEventListener('click', (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () =>{
    try {
        localStorage.setItem("data", listContainer.innerHTML);
        console.log("Data saved successfully!");
      } catch (error) {
        console.error("Error while saving data:", error);
      }
};


const toggle = document.querySelector(".toggle");
const animatedToggle = document.querySelector(".toggle-button");

animatedToggle.addEventListener('click', () => {
    toggle.classList.toggle("active");
    if(toggle.classList.contains("active")){
        document.querySelector(".switchercontent").innerHTML = "Switch to light mode";
    }else{
        document.querySelector(".switchercontent").innerHTML = "Switch to dark mode";
    }
});
