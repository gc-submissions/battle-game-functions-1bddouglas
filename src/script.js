"use strict";

// TODO - write your code here.
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
// console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  if (randNum === 0) {
    return opt1;
  } else {
    return opt2;
  }
};

const attackPlayer = function (health) {
  const remainder = health - randomDamage();
  return remainder;
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, looser) => {
  console.log(`${winner} defeated ${looser}`);
};

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Brandon", "Josh", 100, 100);

// it seems as though player1 always wins, not sure why
