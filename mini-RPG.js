console.log("Welcome to Mini-RPG Adventure!");

const getUserName = function() {
    let userName = prompt("What is your name traveler?");
    return userName;
}

const name = getUserName();

const pauseToContinue = function() {
    let message = prompt("Are you ready to continue? (yes/no)");
    let validResponses = ['yes', 'Yes', 'y', 'Y'];
    if (validResponses.includes(message)) {
        return;
    } else {
        console.log("You chose not to continue. The adventure comes to a bitter end!");
    }
}

console.log(`This will be a perilous journey ${name}, so you must be ready!
You will face enemies such as Goblins, Knights, and Skeletons, each
having their own weaknesses.

1. Goblins get burned to ash with Fireball.
2. Knights get electricuted with Lightning Strikes.
3. Skeletons get dismanted with Clubs.
4. Finally, you can high-tail and run away!`);

pauseToContinue();

console.log(`So, there are a total of 4 actions:

1. 'Fireball'
2. 'Lightning Strike'
3. 'Club'
4. 'Run'`);

pauseToContinue();

console.log(`Level 1:

A Goblin steps out from a bush,
glaring at you with its sharp teeth,
it raises its battered sword.`);

const getUserAction = function() {
    let message = prompt(`Choose an action:
1. 'Fireball'
2. 'Lightning Strike'
3. 'Club'
4. 'Run'`)
    return message;
}

const fireballVariations = ["Fireball", "fireball", "FIREBALL"];
const lightningVariations = ["Lightning Strike", "lightning strike", "LIGHTNING STRIKE"];
const clubVariations = ["Club", "club", "CLUB"];
const runVariations = ["Run", "run", "RUN"];

const fightEnemy = function(enemyName, weakness) {
    let action = getUserAction();
    if (weakness.includes(action)) {
        console.log(`You defeated the ${enemyName}!`);
    } else {
        console.log(`The ${enemyName} defeated you! You blacked out!`);
    }
} 

fightEnemy("Goblin", fireballVariations);

pauseToContinue();
