let horas = new Date();
let hora = (horas.getHours());
let cont = 0
const pokemonName = document.querySelector('.pokemonName');
const pokemonNumber = document.querySelector('.pokemonNumber');
const pokemonImage = document.querySelector('.pokemonImage');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

console.log(cont)
document.write(hora)
if (hora < 10) {
    document.body.style.backgroundImage = "url('imgs/bg1.jpg')";
}
else if (hora < 17) {
    document.body.style.backgroundImage = "url('imgs/bg2.jpg')";
}
else {
    document.body.style.backgroundImage = "url('imgs/bg3.jpg'";
}
const tela = document.querySelector('#mudar');
const button = document.querySelector('#ligar');

button.addEventListener('click', () => {
    cont++
    switch (cont) {
        case 1:
            tela.src = 'imgs/ligado.png'
            let searchPokemon = 1;

            const indexpoke = async (pokemon) => {
                const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

                if (APIResponse.status === 200) {
                    const data = await APIResponse.json();
                    return data;
                }
            }

            const render = async (pokemon) => {

                pokemonName.innerHTML = 'Carregando...';
                pokemonNumber.innerHTML = '';

                const data = await indexpoke(pokemon);

                if (data) {
                    pokemonImage.style.display = 'block';
                    pokemonName.innerHTML = data.name;
                    pokemonNumber.innerHTML = data.id;
                    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
                    input.value = '';
                    searchPokemon = data.id;
                } else {
                    pokemonImage.src = "imgs/missingno.png";
                    pokemonName.innerHTML = 'MissingNo';
                    pokemonNumber.innerHTML = '??';
                }
            }

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                render(input.value.toLowerCase());
            });

            buttonPrev.addEventListener('click', () => {
                if (searchPokemon > 1) {
                    searchPokemon -= 1;
                    render(searchPokemon);
                }
            });

            buttonNext.addEventListener('click', () => {
                searchPokemon += 1;
                render(searchPokemon);
            });

            render(searchPokemon);
            break

        case 2:
            tela.src = 'imgs/desligado.png'
            pokemonImage.style.display = 'none';
            pokemonName.innerHTML = '';
            pokemonNumber.innerHTML = '';

            break
    }
    if (cont == 2) {
        cont = 0
    }
})

