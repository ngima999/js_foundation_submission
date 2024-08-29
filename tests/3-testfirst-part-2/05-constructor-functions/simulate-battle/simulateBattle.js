/* eslint-disable no-unused-vars, no-throw-literal*/

function Pokemon(name, health, attackBonus){
    this.name = name,
    this.health = health,
    this.attackBonus = attackBonus

}

Pokemon.prototype.biteAttack = function(){
    return this.attackBonus + 2;
}


Pokemon.prototype.isDefeated = function() {
    return this.health <= 0;
}








function simulateBattle(Pokemon1, Pokemon2, firstAttackerName){
    let attacker = Pokemon1.name === firstAttackerName ? Pokemon1: Pokemon2;
    let defender = Pokemon1.name === firstAttackerName ? Pokemon2: Pokemon1;

    while(Pokemon1.health > 0 && Pokemon2.health>0){
        defender.health-= attacker.biteAttack();
        [attacker, defender] = [defender, attacker];
    }
const winner = Pokemon1.health > 0 ? Pokemon1.name: Pokemon2.name;
return `${winner} Wins!`;

}