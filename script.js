//your JS code here. If required.
let input = document.getElementById("block-id");
let color = document.getElementById("colour-id");
let changeBtn = document.querySelector("#change_button");
let resetBtn = document.querySelector("#reset_button");

let gridElements = document.querySelectorAll(".box");

resetBtn.addEventListener("click" , function resetGrid(e){
	e.preventDefault();
	gridElements.forEach(element => {
		element.style.backgroundColor="white";
	})
});




changeBtn.addEventListener("click",function updateGrid(e){
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