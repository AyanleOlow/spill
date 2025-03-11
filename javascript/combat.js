// player og enemy sin health og mana
const player = {
    health: 10000,
    mana: 10
};

const enemy = {
    health: 10000,
    mana: 10
};

// Update UI
function updateUI() {
    document.getElementById("player-health").innerText = player.health;
    document.getElementById("player-mana").innerText = player.mana;
    document.getElementById("enemy-health").innerText = enemy.health;
    document.getElementById("enemy-mana").innerText = enemy.mana;
}
updateUI();

// hele deck of card med navn, catogory, attack, deffence, mana og bilde
const deck = [
// 🔥 Basic Monsters (10)
{ name: "Shadow Soldier", type: "monster", category: "basic", attack: 600, defence: 400, mana: 3, image: "../images/monster/Shadow Soldier.png" },                                                      
{ name: "Lava Hound", type: "monster", category: "basic", attack: 700, defence: 400, mana: 3, image: "../images/monster/Lava Hound.png" },                                                 
{ name: "Iron Knight", type: "monster", category: "basic", attack: 600, defence: 600, mana: 3, image: "../images/monster/Iron Knight.png" },                                              
{ name: "Stone Golem", type: "monster", category: "basic", attack: 400, defence: 700, mana: 3, image: "../images/monster/Stone Golem.png" },                                                                                        
{ name: "Water Serpent", type: "monster", category: "basic", attack: 600, defence: 300, mana: 2, image: "../images/monster/Water Serpent.png" },                                                    
{ name: "Wind Scout", type: "monster", category: "basic", attack: 500, defence: 500, mana: 2, image: "../images/monster/Wind Scout.png" },                                      
{ name: "Frost Imp", type: "monster", category: "basic", attack: 500, defence: 300, mana: 2, image: "../images/monster/Frost Imp.png" },                                                
{ name: "Mystic Owl", type: "monster", category: "basic", attack: 400, defence: 600, mana: 2, image: "../images/monster/Mystic Owl.png" },                                  
{ name: "Ember Fox", type: "monster", category: "basic", attack: 650, defence: 400, mana: 3, image: "../images/monster/Ember Fox.png" },                                                    
{ name: "Silverback Guardian", type: "monster", category: "basic", attack: 500, defence: 700, mana: 3, image: "../images/monster/Silverback Guardian.png" },                                                                    

// ⚔️ Advanced Monsters (10)
{ name: "Solar Stag", type: "monster", category: "advanced", attack: 850, defence: 700, mana: 4, image: "../images/monster/Solar Stag.png" },                                                                 
{ name: "Molten Colossus", type: "monster", category: "advanced", attack: 1200, defence: 500, mana: 3, image: "../images/monster/Molten Colossus.png" },                                         
{ name: "Phantom Ronin", type: "monster", category: "advanced", attack: 900, defence: 500, mana: 5, image: "../images/monster/Phantom Ronin.png" },                                                                                 
{ name: "Blizzard Fang", type: "monster", category: "advanced", attack: 800, defence: 600, mana: 4, image: "../images/monster/Blizzard Fang.png" },                                         
{ name: "Crimson Scarab", type: "monster", category: "advanced", attack: 950, defence: 500, mana: 4, image: "../images/monster/Crimson Scarab.png" },                                                     
{ name: "Astral Chimera", type: "monster", category: "advanced", attack: 1000, defence: 700, mana: 5, image: "../images/monster/Astral Chimera.png" },                                                       
{ name: "M.ZY", type: "monster", category: "advanced", attack: 700, defence: 1000, mana: 5, image: "../images/monster/M.ZY.png" },                                                                         
{ name: "Thunderborn Striker", type: "monster", category: "advanced", attack: 1100, defence: 500, mana: 5, image: "../images/monster/Thunderborn Striker.png" },                                                                                         
{ name: "Venom Harbinger", type: "monster", category: "advanced", attack: 800, defence: 800, mana: 4, image: "../images/monster/Venom Harbinger.png" },                                                                               
{ name: "Tidal Sentinel", type: "monster", category: "advanced", attack: 750, defence: 900, mana: 5, image: "../images/monster/Tidal Sentinel.png" },                                               

// 🏆 Legendary Monsters (5)
{ name: "Void Reaver", type: "monster", category: "legendary", attack: 1500, defence: 1000, mana: 7, image: "../images/monster/Void Reaver.png" },
{ name: "Celestial Archmage", type: "monster", category: "legendary", attack: 1300, defence: 1100, mana: 7, image: "../images/monster/Celestial Archmage.png" },
{ name: "Abyss Kraken", type: "monster", category: "legendary", attack: 1600, defence: 900, mana: 8, image: "../images/monster/Abyss Kraken.png" },
{ name: "Infernal Cerberus", type: "monster", category: "legendary", attack: 1400, defence: 1100, mana: 7, image: "../images/monster/Infernal Cerberus.png" },
{ name: "Runic Colossus", type: "monster", category: "legendary", attack: 1200, defence: 1400, mana: 7, image: "../images/monster/Runic Colossus.png" },
// 🌀 Spells (15)
{ name: "Solar Flare", type: "spell", image: "../images/spell/Solar Flare.png" },
{ name: "Mystic Resonance", type: "spell", image: "../images/spell/Mystic Resonance.png" },
{ name: "Shadow Curse", type: "spell", image: "../images/spell/Shadow Curse.png" },
{ name: "Aether Shield", type: "spell", image: "../images/spell/Aether Shield.png" },
{ name: "Raging Tempest", type: "spell", image: "../images/spell/Raging Tempest.png" },
{ name: "Reckless Strike", type: "spell", image: "../images/spell/Reckless Strike.png" },
{ name: "Frozen Storm", type: "spell", image: "../images/spell/Frozen Storm.png" },
{ name: "Arcane Vortex", type: "spell", image: "../images/spell/Arcane Vortex.png" },
{ name: "Sacred Restoration", type: "spell", image: "../images/spell/Sacred Restoration.png" },
{ name: "Stormcall Ritual", type: "spell", image: "../images/spell/Stormcall Ritual.png" },
{ name: "Infernal Offering", type: "spell", image: "../images/spell/Infernal Offering.png" },
{ name: "Twilight Shift", type: "spell", image: "../images/spell/Twilight Shift.png" },
{ name: "Venomous Decay", type: "spell", image: "../images/spell/Venomous Decay.png" },
{ name: "Mirage Tactics", type: "spell", image: "../images/spell/Mirage Tactics.png" },
{ name: "Chaotic Gambit", type: "spell", image: "../images/spell/Chaotic Gambit.png" },

// 🛡 Buffs (10)
{ name: "Titan Strength", type: "buff", image: "../images/debuff & buff/Titan Strength.png" },
{ name: "Ironhide Blessing", type: "buff", image: "../images/debuff & buff/Ironhide Blessing.png" },
{ name: "Blazing Fury", type: "buff", image: "../images/debuff & buff/Blazing Fury.png" },
{ name: "Winds of Agility", type: "buff", image: "../images/debuff & buff/Winds of Agility.png" },
{ name: "Aqua Surge", type: "buff", image: "../images/debuff & buff/Aqua Surge.png" },
{ name: "Arcane Infusion", type: "buff", image: "../images/debuff & buff/Arcane Infusion.png" },
{ name: "Berserker Rage", type: "buff", image: "../images/debuff & buff/Berserker Rage.png" },
{ name: "Stonebound Resilience", type: "buff", image: "../images/debuff & buff/Stonebound Resilience.png" },
{ name: "Lightning Charge", type: "buff", image: "../images/debuff & buff/Lightning Charge.png" },
{ name: "Celestial Guardian", type: "buff", image: "../images/debuff & buff/Celestial Guardian.png" },

// ☠️ Debuffs (5)
{ name: "Withering Touch", type: "debuff", image: "../images/debuff & buff/Withering Touch.png" },
{ name: "Petrify", type: "debuff", image: "../images/debuff & buff/Petrify.png" },
{ name: "Mana Drain", type: "debuff", image: "../images/debuff & buff/Mana Drain.png" },
{ name: "Doom Hex", type: "debuff", image: "../images/debuff & buff/Doom Hex.png" },
{ name: "Unstable Mutation", type: "debuff", image: "../images/debuff & buff/Unstable Mutation.png" }


];



const playerHand = document.getElementById("player-hand");
const drawButton = document.getElementById("draw-card");
const gameBoard = document.getElementById("game-board");

drawButton.addEventListener("click", () => {
    if (playerHand.children.length < 5) {
        const randomCard = deck[Math.floor(Math.random() * deck.length)];
        const card = document.createElement("div");
        card.classList.add("card");

        // Card now only displays the image
        card.innerHTML = `<img src="${randomCard.image}" alt="${randomCard.name}" width="80">`;

        card.dataset.name = randomCard.name;
        card.dataset.type = randomCard.type;
        card.dataset.image = randomCard.image;
        card.addEventListener("click", () => selectCard(card));

        playerHand.appendChild(card);
    }
});

let selectedCard = null;

function selectCard(card) {
    selectedCard = card;
}

gameBoard.addEventListener("click", (event) => {
    const slot = event.target;
    if (!selectedCard || !slot.classList.contains("grid-slot") || slot.children.length > 0) return;

    const slotIndex = parseInt(slot.getAttribute("data-index"));

    if ((slotIndex >= 12 && slotIndex <= 17) || (slotIndex >= 6 && slotIndex <= 11)) {
        if (selectedCard.dataset.type === "monster") {
            const manaCost = parseInt(selectedCard.dataset.manaCost);
            if (player.mana < manaCost) {
                alert("Not enough mana to place this monster!");
                return;
            }
            player.mana -= manaCost;
            updateUI();
        }

        placeCard(slot, selectedCard);
        playerHand.removeChild(selectedCard);
        selectedCard = null;

        setTimeout(enemyTurn, 1000);
    }
});
function placeCard(slot, card) {
    const placedCard = document.createElement("div");
    placedCard.classList.add("card");

    // Ensure image fills the entire slot
    placedCard.innerHTML = `<img src="${card.dataset.image}" alt="${card.dataset.name}">`;

    slot.appendChild(placedCard);
}


function enemyTurn() {
    const availableSlots = Array.from(document.querySelectorAll(".grid-slot"))
        .filter(slot => slot.children.length === 0)
        .filter(slot => {
            const index = parseInt(slot.getAttribute("data-index"));
            return index <= 5 || (index >= 6 && index <= 11);
        });

    if (availableSlots.length > 0) {
        let enemyCard;
        do {
            enemyCard = deck[Math.floor(Math.random() * deck.length)];
        } while (enemyCard.type === "monster" && enemy.mana < enemyCard.manaCost);

        if (enemyCard.type === "monster") {
            enemy.mana -= enemyCard.manaCost;
            updateUI();

            if (enemyCard.type === "monster") {
                enemy.health -= player.health;
                updateUI();
            }
        }

        const enemySlot = availableSlots[Math.floor(Math.random() * availableSlots.length)];
        const enemyCardElement = document.createElement("div");
        enemyCardElement.classList.add("card");

        // Enemy card now only displays the image
        enemyCardElement.innerHTML = `<img src="${enemyCard.image}" alt="${enemyCard.name}" width="80">`;
        
        enemySlot.appendChild(enemyCardElement);
    }
}




