// The .attacked() method will subtract 20 from the health property value. 
// When the health property reaches zero, let the user know the character has died.
//The .levelUp() method will add 1 to the level property value.

const characterInfo = {
    characters: [
        {characterNumber: 1, characterPhoto: 'images/snortleblat.webp', characterName: 'Snortleblat', characterClass: 'Swamp Beast Diplomat', baseLevel: 8, baseHealth: 100},
        {characterNumber: 2, characterPhoto: 'images/imageUrlHere.jpg', characterName: 'ExampleName', characterClass: 'desert war machine', baseLevel: 10, baseHealth: 100}
    ], 
    // attacking
    attacked(character) {
    character.baseHealth -= 20;
    if (character.baseHealth <= 0) {
      character.baseHealth = 0;
      alert("Character has Died");
    }
    renderCharacter(character);
  },


  // leveling up
  levelUp(character) {
    character.baseLevel += 1;
    renderCharacter(character);
  }
};

const imglnk = document.querySelector('.image');
const nameVar = document.querySelector('.name');
const classVar = document.querySelector('.class');
const levelVar= document.querySelector('.level');
const healthVar = document.querySelector('.health');


function createCharacterCard(characterNumber) {
    return `
         <img class="image" src="${charcterPhoto}">
            <h2 class="name">${characterName}</h2>
            <ul class="stats">
                <p class="class">Class:${characterClass}</p>
                <p class="level">Level:${level}</p>
                <p class="health">Health:${health}</p>
            </ul>
        `
};

let currentCharacter = characterInfo.characters[0];

function renderCharacter(character) {
  imglnk.src = character.characterPhoto;
  nameVar.textContent = character.characterName;
  classVar.textContent = `Class: ${character.characterClass}`;
  levelVar.textContent = `Level: ${character.baseLevel}`;
  healthVar.textContent = `Health: ${character.baseHealth}`;
}

document.querySelector("#attackButton").addEventListener("click", ()=> {
    characterInfo.attacked(currentCharacter);
});

document.querySelector("#levelUpButton").addEventListener("click", ()=> {
    characterInfo.levelUp(currentCharacter);
});

renderCharacter(currentCharacter);