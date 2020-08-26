let count = 1;


function render() {
    let pokemon = document.getElementById('pokemon')
pokemon.innerHTML = `<img class= "poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`

}

let prev = document.getElementById("prev-button");


prev.onclick = function() {
    if (count >1) {
        count --;
        render()
    }
}

let next = document.getElementById("next-button");

next.onclick = function() {
    if (count < 650) {
        count ++;
        render()
    }
}

render()