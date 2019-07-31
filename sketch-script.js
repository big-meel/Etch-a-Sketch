const container = document.querySelector('#container');
container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, auto);\
 border: 2px solid blue; ');


function createGrid(){
    for (i = 0; i < (16*16); i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.textContent = i;
        square.setAttribute('style', 'background-color: skyblue; padding: 20px;\
         text-align: center; border: 1px solid lightgrey');
        container.appendChild(square);
    }       
}

window.addEventListener('load', createGrid());
