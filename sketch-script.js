const reset = document.querySelector('#reset');
const container = document.querySelector('#container');
const resetButton =  document.createElement('button');

let gridRange = 16;

resetButton.textContent = 'New Grid';
resetButton.setAttribute('style', 'border-radius: 12px; padding: 5px; background-color: orange;\
color: darkslategrey');
resetButton.setAttribute('id', 'btn');

reset.setAttribute('style', 'display: flex; justify-content: center');
reset.appendChild(resetButton);

container.setAttribute('style', `display: grid; grid-template-columns: repeat(${gridRange}, auto);\
border: 5px solid orange; grid-template-rows: repeat(${gridRange}, auto)`);  

window.addEventListener('load', createGrid(gridRange*gridRange));

resetButton.addEventListener('click', function (e){
    gridRange = prompt('Enter new Grid Range: ', '16');
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${gridRange}, auto);\
    border: 5px solid orange; grid-template-rows: repeat(${gridRange}, auto)`);  
    
    createGrid(gridRange*gridRange);
});

function createGrid(range){
    for (i = 0; i < range; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.setAttribute('style', 'background-color: lightgrey; padding: 18px;\
        text-align: center; border: 0.5px solid black');
        container.appendChild(square);
    }       
}


const pixels = document.getElementsByClassName('grid-square');

//Darkens grid pixel when pointer moves over it
document.addEventListener('mouseover', function(e){
    if(e.target.classList[0]==='grid-square'){
        e.target.style.backgroundColor = 'dimgrey';
    }
});
