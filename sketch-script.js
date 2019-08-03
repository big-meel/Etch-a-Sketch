const reset = document.querySelector('#reset');
const container = document.querySelector('#container');
const resetButton =  document.createElement('button');

let gridRange = 16 * 16;

resetButton.textContent = 'New Grid';
resetButton.setAttribute('style', 'border-radius: 12px; padding: 5px; background-color: orange;\
color: darkslategrey')

reset.setAttribute('style', 'display: flex; justify-content: center');

container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, auto);\
border: 5px solid orange; grid-template-rows: repeat(16, auto)');  

//resetButton.addEventListener('click', newGrid());
window.addEventListener('load', createGrid(gridRange));



function createGrid(range){
    reset.appendChild(resetButton);
    for (i = 0; i < range; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.setAttribute('style', 'background-color: lightgrey; padding: 18px;\
        text-align: center; border: 0.5px solid black');
        container.appendChild(square);
    }       
}

function newGrid(){
    let value = prompt('Enter new Grid Range: ', '16');
    createGrid(value*value);
}

const pixels = document.getElementsByClassName('grid-square');

//Darkens grid pixel when pointer moves over it
document.addEventListener('mouseover', function(e){
    if(e.target.classList[0]==='grid-square'){
        e.target.style.backgroundColor = 'dimgrey';
    }
});
