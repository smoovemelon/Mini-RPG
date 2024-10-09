const name = prompt('What is the honored ones name?')

console.log(`Welcome to Mini-RPG, ${name}!
You will embark on a journey full of foes.
Use the tools at your disposal to take them out
in order to move to the next level. Good luck!`)

let message = prompt("Next? Y/N")
if (message === 'Y') {
    console.log(`Here are the basic rules!
    1. Goblins get burned to ash with Fireball.
    2. Knights get electricuted with Lightning Strikes.
    3. Skeletons get dismanted with Clubs.`)
}