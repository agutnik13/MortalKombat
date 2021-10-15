const player1 = {
    name: 'SCORPION',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif' ,
    weapon: [
            'sword'],
    attack: function() {
        console.log(player1.name + 'Fight...');
    }
}

const player2 = {
    name: 'SUB-ZERO',
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
            'ice sword'],
    attack: function() {
        console.log(player2.name + 'Fight...');
    }
}

function createPlayer (playerClass, player) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);


    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');
    $player.appendChild($progressBar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player.hp + "%" ;
    $progressBar.appendChild($life);
    
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;
    $progressBar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = player.img;
    $character.appendChild($img);
 
    return $player;
};

const $arenas = document.querySelector('.arenas');

const $player1 = createPlayer('player1', player1);
const $player2 = createPlayer('player2', player2);

$arenas.appendChild($player1);
$arenas.appendChild($player2);