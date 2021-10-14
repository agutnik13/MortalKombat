const player1 = {
    name: 'SCORPION',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif' ,
    weapon: [
            'sword'
  ],
    attack: function() {
        console.log(player1.name + ' ' + 'Fight...');
    }
}

const player2 = {
    name: 'SUB-ZERO',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
            'ice sword'
    ],
    attack: function() {
        console.log(player2.name + ' ' +'Fight...');
    }
}

function createPleer (player1) {
    const $root = document.querySelector('.root');


    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

const $character = document.createElement('div');
$character.classList.add('character');

const $

}
