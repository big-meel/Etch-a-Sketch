const container = document.querySelector('#container');
container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, auto);\
 border: 5px solid orange; grid-template-rows: repeat(16, auto)');



function createGrid(){
    for (i = 0; i < (16*16); i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.setAttribute('style', 'background-color: lightgrey; padding: 18px;\
        text-align: center; border: 0.5px solid black');
        container.appendChild(square);
    }       
}


window.addEventListener('load', () => {
    createGrid();
});

const pixels = document.getElementsByClassName('grid-square');

//Darkens grid pixel when pointer moves over it
document.addEventListener('mouseover', function(e){
    if(e.target.classList[0]==='grid-square'){
        e.target.style.backgroundColor = 'dimgrey';
    }
});
