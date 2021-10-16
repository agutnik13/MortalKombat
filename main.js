const $arenas = document.querySelector('.arenas'); 
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif' ,
    weapon: [
            'sword'],
    attack: function() {
        console.log(player1.name + '' + 'Fight...');
    }
}

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
            'ice sword'],
    attack: function() {
        console.log(player2.name + '' + 'Fight...');
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
};

function createPlayer (player) {
    const $player = createElement('div', 'player'+player.player);

    const $progressBar = createElement('div', 'progressbar');
    $player.appendChild($progressBar);

    const $character = createElement('div', 'character');
    $player.appendChild($character);

    const $life = createElement('div', 'life');
    $life.style.width = player.hp + '%' ;
    $progressBar.appendChild($life);
    
    const $name = createElement('div', 'name');
    $name.innerText = player.name;
    $progressBar.appendChild($name);

    const $img = createElement('img');
    $img.src = player.img;
    $character.appendChild($img);
 
    return $player;
};

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 10);
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        $playerLife.style.width = '0%';
        $randomButton.disabled = true;
        return true;
    }

    return false;
};

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + ' Wins';

    return $winTitle;
}

$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    const isPlayer1Dead = changeHP(player1);
    const isPlayer2Dead = changeHP(player2);

    if (isPlayer1Dead && isPlayer2Dead) {
        $arenas.appendChild(playerWin('Nobody'));
    } else if (isPlayer1Dead) {
        $arenas.appendChild(playerWin(player2.name));
    } else if(isPlayer2Dead) {
        $arenas.appendChild(playerWin(player1.name));
    }
});


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2)); 
