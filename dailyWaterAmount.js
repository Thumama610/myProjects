let small1 = document.getElementById('1');
let small2 = document.getElementById('2');
let small3 = document.getElementById('3');
let small4 = document.getElementById('4');
let small5 = document.getElementById('5');
let small6 = document.getElementById('6');
let small7 = document.getElementById('7');
let small8 = document.getElementById('8');
let allSmalls = document.getElementsByClassName('small-container');
let main = document.getElementById('main');

small1.addEventListener('click',changeColor1);
small2.addEventListener('click',changeColor2);
small3.addEventListener('click',changeColor3);
small4.addEventListener('click',changeColor4);
small5.addEventListener('click',changeColor5);
small6.addEventListener('click',changeColor6);
small7.addEventListener('click',changeColor7);
small8.addEventListener('click',changeColor8);

function clearMain(){
    main.classList.remove('full')
    main.classList.remove('three-quarter-and-a-half-quarter')
    main.classList.remove('three-quarter')
    main.classList.remove('half-and-a-half-quarter')
    main.classList.remove('half')
    main.classList.remove('quarter-and-a-half')
    main.classList.remove('quarter')
    main.classList.remove('half-quarter')
    main.classList.remove('empty')
}

function loopMe(){
for (let i = 0; i < allSmalls.length; i++) {
    allSmalls.item(i).classList.remove('full');}
}
function changeColor1(){
    loopMe();
    small1.classList.add('full');
    clearMain();
    main.classList.add('half-quarter');
    main.innerHTML = `<h1>87.5%</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1>12.5%</h1>`
}
function changeColor2(){
    loopMe();
    small1.classList.add('full');
    small2.classList.add('full');
    clearMain();
    main.classList.add('quarter');
    main.innerHTML = `<h1>75%</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1>25%</h1>`
}
function changeColor3(){
    loopMe();
    small1.classList.add('full');
    small2.classList.add('full');
    small3.classList.add('full');
    clearMain();
    main.classList.add('quarter-and-a-half');
    main.innerHTML = `<h1>62.5%</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1>37.5%</h1>`
}
function changeColor4(){
    loopMe();
    small1.classList.add('full');
    small2.classList.add('full');
    small3.classList.add('full');
    small4.classList.add('full');
    clearMain();
    main.classList.add('half');
    main.innerHTML = `<h1>50%</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1>50%</h1>`

}
function changeColor5(){
    loopMe();
    small1.classList.add('full');
    small2.classList.add('full');
    small3.classList.add('full');
    small4.classList.add('full');
    small5.classList.add('full');
    clearMain();
    main.classList.add('half-and-a-half-quarter');
    main.innerHTML = `<h1>37.5%</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1>62.5%</h1>`
}
function changeColor6(){
    loopMe();
    small1.classList.add('full');
    small2.classList.add('full');
    small3.classList.add('full');
    small4.classList.add('full');
    small5.classList.add('full');
    small6.classList.add('full');
    clearMain();
    main.classList.add('three-quarter');
    main.innerHTML = `<h1>25%</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1>75%</h1>`
}
function changeColor7(){
    loopMe();
    small1.classList.add('full');
    small2.classList.add('full');
    small3.classList.add('full');
    small4.classList.add('full');
    small5.classList.add('full');
    small6.classList.add('full');
    small7.classList.add('full');
    clearMain();
    main.classList.add('three-quarter-and-a-half-quarter');
    main.innerHTML = `<h1>12.5%</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1>87.5%</h1>`
}
function changeColor8(){
    loopMe();
    small1.classList.add('full');
    small2.classList.add('full');
    small3.classList.add('full');
    small4.classList.add('full');
    small5.classList.add('full');
    small6.classList.add('full');
    small7.classList.add('full');
    small8.classList.add('full');
    clearMain();
    main.classList.add('full');
    main.innerHTML = `<h1>100%</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1 style = "display:none">0%</h1>`
}