//your JS code here. If required.
let input = document.getElementById("input-id");
let color = document.getElementById("color-id");
let btn = document.querySelector("button");


let gridElements = document.querySelectorAll(".box");





btn.addEventListener("click",function updateGrid(e){
    e.preventDefault();
    let inputValue = input.value;
    let colorValue = color.value;

    gridElements.forEach(element => {
        if(element.id !== inputValue){
            element.style.backgroundColor ="white";
        }
        else{
            element.style.backgroundColor =`${colorValue}`;
        }
    });
    
   
    

});