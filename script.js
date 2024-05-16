function makeGrids(size){
    let screen = document.querySelector(".sketch-screen");
    for (let i = 0; i < size; i++)
    {
        let column = document.createElement("div");
        column.classList.add("column");
        for(let j = 1; j <= size; j++){
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "2px solid black";
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}
function changeColor(){
    let squares = document.querySelectorAll(".row");
    
    squares.forEach((div) => {
        div.addEventListener("mouseover", (event) =>{
            event.target.style.background = "#" + randomColor();
            for(let i = 0; i < 10; i++){
            event.target.style.opacity = (i/10);
            if(i === 10){
                let i = 0;
            }
            }
        
    });
});
}

function randomColor(){
    let randomBgColor = 
        Math.floor(Math.random()*16777215).toString(16);
        return randomBgColor;

}
function makeNewGrid(){
    let input = prompt("Enter how many squares per side")
    const rows = document.querySelectorAll(".row");
    const columns = document.querySelectorAll(".column");
    if(input < 100){
        
        // console.log(input)
        rows.forEach((div) =>
            div.remove());
        columns.forEach((div) =>
        div.remove());
        makeGrids(input);
        changeColor();
       
    }
    else{
        alert("Error: Too many squares inputted!")
    }
}
makeGrids(16);
changeColor();
const startOverButton = document.querySelector("#start-new");
startOverButton.addEventListener("click", makeNewGrid);
