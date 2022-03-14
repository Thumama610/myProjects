let player = 1;
let box1 = document.getElementById('1');
let box2 = document.getElementById('2');
let box3 = document.getElementById('3');
let box4 = document.getElementById('4');
let box5 = document.getElementById('5');
let box6 = document.getElementById('6');
let box7 = document.getElementById('7');
let box8 = document.getElementById('8');
let box9 = document.getElementById('9');
let h4 = document.getElementById('info');

box1.addEventListener('click', checkBox);
box2.addEventListener('click', checkBox);
box3.addEventListener('click', checkBox);
box4.addEventListener('click', checkBox);
box5.addEventListener('click', checkBox);
box6.addEventListener('click', checkBox);
box7.addEventListener('click', checkBox);
box8.addEventListener('click', checkBox);
box9.addEventListener('click', checkBox);


function clearBoxes(){
    box1.innerHTML = '';
    box2.innerHTML = '';
    box3.innerHTML = '';
    box4.innerHTML = '';
    box5.innerHTML = '';
    box6.innerHTML = '';
    box7.innerHTML = '';
    box8.innerHTML = '';
    box9.innerHTML = '';
    player = 1;
    h4.innerHTML = `PLAYER:<span>1</span>`;
}

function Draw(){
    if (box1.innerHTML != '' && box2.innerHTML != '' && box3.innerHTML != '' && box4.innerHTML != '' && box5.innerHTML != '' && box6.innerHTML != '' && box7.innerHTML != '' && box8.innerHTML != '' && box9.innerHTML != ''){
        h4.innerHTML = 'Draw!';
        setTimeout(()=>{clearBoxes()},1000)
    }
}

function checkWin(){
    //x
    if(box1.innerHTML ==='x' && box2.innerHTML ==='x' && box3.innerHTML ==='x'){
        h4.innerHTML = 'Player 1 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box4.innerHTML ==='x' && box5.innerHTML ==='x' && box6.innerHTML ==='x'){
        h4.innerHTML = 'Player 1 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box7.innerHTML ==='x' && box8.innerHTML ==='x' && box9.innerHTML ==='x'){
        h4.innerHTML = 'Player 1 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box1.innerHTML ==='x' && box4.innerHTML ==='x' && box7.innerHTML ==='x'){
        h4.innerHTML = 'Player 1 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box2.innerHTML ==='x' && box5.innerHTML ==='x' && box8.innerHTML ==='x'){
        h4.innerHTML = 'Player 1 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box3.innerHTML ==='x' && box6.innerHTML ==='x' && box9.innerHTML ==='x'){
        h4.innerHTML = 'Player 1 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box1.innerHTML ==='x' && box5.innerHTML ==='x' && box9.innerHTML ==='x'){
        h4.innerHTML = 'Player 1 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box3.innerHTML ==='x' && box5.innerHTML ==='x' && box7.innerHTML ==='x'){
        h4.innerHTML = 'Player 1 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    //o
    else if(box1.innerHTML ==='o' && box2.innerHTML ==='o' && box3.innerHTML ==='o'){
        h4.innerHTML = 'Player 2 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box4.innerHTML ==='o' && box5.innerHTML ==='o' && box6.innerHTML ==='o'){
        h4.innerHTML = 'Player 2 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box7.innerHTML ==='o' && box8.innerHTML ==='o' && box9.innerHTML ==='o'){
        h4.innerHTML = 'Player 2 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box1.innerHTML ==='o' && box4.innerHTML ==='o' && box7.innerHTML ==='o'){
        h4.innerHTML = 'Player 2 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box2.innerHTML ==='o' && box5.innerHTML ==='o' && box8.innerHTML ==='o'){
        h4.innerHTML = 'Player 2 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box3.innerHTML ==='o' && box6.innerHTML ==='o' && box9.innerHTML ==='o'){
        h4.innerHTML = 'Player 2 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box1.innerHTML ==='o' && box5.innerHTML ==='o' && box9.innerHTML ==='o'){
        h4.innerHTML = 'Player 2 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else if(box3.innerHTML ==='o' && box5.innerHTML ==='o' && box7.innerHTML ==='o'){
        h4.innerHTML = 'Player 2 wins!';
        setTimeout(()=>{clearBoxes()},1000)
    }
    else{Draw();}
}

function checkBox(){
    if(this.innerHTML == 'x'){
        alert('already used')
    }
    else if (this.innerHTML == 'o'){
        alert('already used')
    }
    else{
        if (player == 2){
            this.innerHTML = 'o'
            player = 1;
            h4.innerHTML = 'PLAYER:<span>1</span>';
        }
        else {
            this.innerHTML = 'x'
            player = 2;
            h4.innerHTML = 'PLAYER:<span>2</span>';
        }
    }
    checkWin();
}