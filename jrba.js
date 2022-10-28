let para= document.querySelector('#jer');
para.addEventListener('click' ,updateName);
function updateName(){
    let name = prompt (' Enter a ne name');
    para.textContent=' Player 1 :' + name;
}