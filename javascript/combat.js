// player og enemy sin health og mana
const player = {
    health: 10000,
    mana: 10
};

const enemy = {
    health: 10000,
    mana: 10
};

// oppdaterer UI hele tiden
function updateUI() {
    document.getElementById("player-health").innerText = player.health;
    document.getElementById("player-mana").innerText = player.mana;
    document.getElementById("enemy-health").innerText = enemy.health;
    document.getElementById("enemy-mana").innerText = enemy.mana;
}
updateUI();

//her så ser man alle kortene som jeg kaller deck . jeg har legge navn, type, catogory, attack, defence, mana og bilde på kortene.
// jeg har også lagt til 3 forskjellige kategorier som er basic, advanced og legendary.
// jeg legge til 10 basic kort, 10 advanced kort, 5 legendary kort, 16 spell card, 10 buff card og 5 debuff card .

const deck = [
    // 🔥 Basic Monsters (10)
    { name: "Shadow Soldier", type: "dark_monster", element: "dark" ,category: "basic", attack: 600, defence: 400, mana: 3, image: "../images/monster/Shadow_Soldier.png" },                                                      
    { name: "Lava Hound", type: "fire_monster", category: "basic",element: "dark" , attack: 700, defence: 400, mana: 3, image: "../images/monster/Lava_Hound.png" },                                                 
    { name: "Iron Knight", type: "steel_monster", category: "basic", element: "dark" ,attack: 600, defence: 600, mana: 3, image: "../images/monster/Iron_Knight.png" },                                              
    { name: "Stone Golem", type: "earth_monster", category: "basic",element: "dark" , attack: 400, defence: 700, mana: 3, image: "../images/monster/Stone_Golem.png" },                                                                                        
    { name: "Water Serpent", type: "water_monster", category: "basic",element: "dark" , attack: 600, defence: 300, mana: 2, image: "../images/monster/Water_Serpent.png" },                                                    
    { name: "Wind Scout", type: "air_monster", category: "basic", element: "dark" ,attack: 500, defence: 500, mana: 2, image: "../images/monster/Wind_Scout.png" },                                      
    { name: "Frost Imp", type: "ice_monster", category: "basic", element: "dark" ,attack: 500, defence: 300, mana: 2, image: "../images/monster/Frost_Imp.png" },                                                
    { name: "Mystic Owl", type: "air_monster", category: "basic", element: "dark" ,attack: 400, defence: 600, mana: 2, image: "../images/monster/Mystic_Owl.png" },                                  
    { name: "Ember Fox", type: "fire_monster", category: "basic", element: "dark" ,attack: 650, defence: 400, mana: 3, image: "../images/monster/Ember_Fox.png" },                                                    
    { name: "Silverback Guardian", type: "earth_monster", category: "basic",element: "dark" , attack: 500, defence: 700, mana: 3, image: "../images/monster/Silverback_Guardian.png" },                                                                    
    
    // ⚔️ Advanced Monsters (10)
    { name: "Solar Stag", type: "light_monster", category: "advanced",element: "dark" , attack: 850, defence: 700, mana: 4, image: "../images/monster/Solar_Stag.png" },                                                                 
    { name: "Molten Colossus", type: "fire_monster", category: "advanced",element: "dark" , attack: 1200, defence: 500, mana: 3, image: "../images/monster/Molten_Colossus.png" },                                         
    { name: "Phantom Ronin", type: "ghost_monster", category: "advanced",element: "dark" , attack: 900, defence: 500, mana: 5, image: "../images/monster/Phantom_Ronin.png" },                                                                                  
    { name: "Blizzard Fang", type: "ice_monster", category: "advanced",element: "dark" , attack: 800, defence: 600, mana: 4, image: "../images/monster/Blizzard_Fang.png" },                                         
    { name: "Crimson Scarab", type: "insect_monster", category: "advanced",element: "dark" , attack: 950, defence: 500, mana: 4, image: "../images/monster/Crimson_Scarab.png" },                                                     
    { name: "Astral Chimera", type: "dark_monster", category: "advanced",element: "dark" , attack: 1000, defence: 700, mana: 5, image: "../images/monster/Astral_Chimera.png" },                                                       
    { name: "M.ZY", type: "steel_monster", category: "advanced",element: "dark" , attack: 700, defence: 1000, mana: 5, image: "../images/monster/M.ZY.png" },                                                                         
    { name: "Thunderborn Striker", type: "lightning_monster", category: "advanced", element: "dark" ,attack: 1100, defence: 500, mana: 5, image: "../images/monster/Thunderborn_Striker.png" },                                                                                         
    { name: "Venom Harbinger", type: "poison_monster", category: "advanced",element: "dark" , attack: 800, defence: 800, mana: 4, image: "../images/monster/Venom_Harbinger.png" },                                                                               
    { name: "Tidal Sentinel", type: "water_monster", category: "advanced",element: "dark" , attack: 750, defence: 900, mana: 5, image: "../images/monster/Tidal_Sentinel.png" },                                               
    
    // 🏆 Legendary Monsters (5)
    { name: "Void Reaver", type: "dark_monster", category: "legendary",element: "dark" , attack: 1500, defence: 1000, mana: 7, image: "../images/monster/Void_Reaver.png" },
    { name: "Celestial Archmage", type: "light_monster", category: "legendary",element: "dark" , attack: 1300, defence: 1100, mana: 7, image: "../images/monster/Celestial_Archmage.png" },
    { name: "Abyss Kraken", type: "water_monster", category: "legendary",element: "dark" , attack: 1600, defence: 900, mana: 8, image: "../images/monster/Abyss_Kraken.png" },
    { name: "Infernal Cerberus", type: "fire_monster", category: "legendary", element: "dark" ,attack: 1400, defence: 1100, mana: 7, image: "../images/monster/Infernal_Cerberus.png" },
    { name: "Runic Colossus", type: "earth_monster", category: "legendary",element: "dark" , attack: 1200, defence: 1400, mana: 7, image: "../images/monster/Runic_Colossus.png" },
    { name: "Runic Colossus", type: "lightning_monster", category: "legendary",element: "dark" , attack: 1200, defence: 1400, mana: 7, image: "../images/monster/mohamuudy.png" },
    // 🌀 Spells (15)
    { name: "Solar Flare", type: "spell",element: "spell" , image: "../images/spell/Solar_Flare.png" },
    { name: "Mystic Resonance", type: "spell",element: "spell" , image: "../images/spell/Mystic_Resonance.png" },
    { name: "Shadow Curse", type: "spell",element: "spell" , image: "../images/spell/Shadow_Curse.png" },
    { name: "Aether Shield", type: "spell",element: "spell" , image: "../images/spell/Aether_Shield.png" },
    { name: "Raging Tempest", type: "spell",element: "spell" , image: "../images/spell/Raging_Tempest.png" },
    { name: "Reckless Strike", type: "spell",element: "spell" , image: "../images/spell/Reckless_Strike.png" },
    { name: "Frozen Storm", type: "spell",element: "spell" , image: "../images/spell/Frozen_Storm.png" },
    { name: "Arcane Vortex", type: "spell",element: "spell" , image: "../images/spell/Arcane_Vortex.png" },
    { name: "Sacred Restoration", type: "spell",element: "spell" , image: "../images/spell/Sacred_Restoration.png" },
    { name: "Stormcall Ritual", type: "spell",element: "spell" , image: "../images/spell/Stormcall_Ritual.png" },
    { name: "Infernal Offering", type: "spell",element: "spell" , image: "../images/spell/Infernal_Offering.png" },
    { name: "Twilight Shift", type: "spell",element: "spell" , image: "../images/spell/Twilight_Shift.png" },
    { name: "Venomous Decay", type: "spell",element: "spell" , image: "../images/spell/Venomous_Decay.png" },
    { name: "Mirage Tactics", type: "spell",element: "spell" , image: "../images/spell/Mirage_Tactics.png" },
    { name: "Chaotic Gambit", type: "spell",element: "dspellark" , image: "../images/spell/Chaotic_Gambit.png" },
    
    // 🛡 Buffs (10)
    { name: "Titan Strength", type: "buff",element: "buff" , image: "../images/debuff&buff/Titan_Strength.png" },
    { name: "Ironhide Blessing", type: "buff",element: "buff" , image: "../images/debuff&buff/Ironhide_Blessing.png" },
    { name: "Blazing Fury", type: "buff",element: "buff" , image: "../images/debuff&buff/Blazing_Fury.png" },
    { name: "Winds of Agility", type: "buff", element: "buff" ,image: "../images/debuff&buff/Winds_of_Agility.png" },
    { name: "Aqua Surge", type: "buff",element: "buff" , image: "../images/debuff&buff/Aqua_Surge.png" },
    { name: "Arcane Infusion", type: "buff",element: "buff" , image: "../images/debuff&buff/Arcane_Infusion.png" },
    { name: "Berserker Rage", type: "buff",element: "buff" , image: "../images/debuff&buff/Berserker_Rage.png" },
    { name: "Stonebound Resilience", type: "buff",element: "buff" , image: "../images/debuff&buff/Stonebound_Resilience.png" },
    { name: "Lightning Charge", type: "buff",element: "buff" , image: "../images/debuff&buff/Lightning_Charge.png" },
    { name: "Celestial Guardian", type: "buff",element: "buff" , image: "../images/debuff&buff/Celestial_Guardian.png" },
    
    // ☠️ Debuffs (5)
    { name: "Withering Touch", type: "debuff",element: "debuff" , image: "../images/debuff&buff/Withering_Touch.png" },
    { name: "Petrify", type: "debuff",element: "debuff" , image: "../images/debuff&buff/Petrify.png" },
    { name: "Mana Drain", type: "debuff",element: "debuff" , image: "../images/debuff&buff/Mana_Drain.png" },
    { name: "Doom Hex", type: "debuff",element: "debuff" , image: "../images/debuff&buff/Doom_Hex.png" },
    { name: "Unstable Mutation", type: "debuff",element: "debuff" , image: "../images/debuff&buff/Unstable_Mutation.png" }
    ];

// her så henter den id fra html til javascript for å vise kortene i player hand og draw button

const playerHand = document.getElementById("player-hand");
const drawButton = document.getElementById("draw-card");
const gameBoard = document.getElementById("game-board");

// her så tar den en random kort når spillern klicker på draw button og legger det til i player hand 
// zog det er maxisum 5 kort man kan beholde hele tiden

drawButton.addEventListener("click", () => {
    if (playerHand.children.length < 5) {
        const randomCard = deck[Math.floor(Math.random() * deck.length)];
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `<img src="${randomCard.image}" alt="${randomCard.name}" width="80">`;

        card.dataset.name = randomCard.name;
        card.dataset.type = randomCard.type;
        card.dataset.image = randomCard.image;
        card.dataset.attack = randomCard.attack || 0; // Default to 0 if not a monster
        card.dataset.defence = randomCard.defence || 0; // Default to 0 if not a monster
        card.dataset.owner = "player"; // Mark as a player's card
        card.addEventListener("click", () => selectCard(card));

        playerHand.appendChild(card);
    }
});

let selectedCard = null;

function selectCard(card) {
    selectedCard = card;
}

//her så lager den en restriction for spillerene og enemy for hvor de kan legge kortene sine.
// spillerene kan legge kortene sine i slot 12-17 og enemy kan legge kortene sine i slot 0-5 og 6-11

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

let selectedGridCard = null;

// Function to handle card clicks on the grid
gameBoard.addEventListener("click", (event) => {
    const slot = event.target.closest(".grid-slot");
    if (!slot || !slot.children.length) return; // Ensure the slot contains a card

    const cardElement = slot.querySelector(".card");

    // If a player's card is selected, attack an enemy card
    if (selectedGridCard && selectedGridCard.dataset.owner === "player" && cardElement.dataset.owner === "enemy") {
        const playerAttack = parseInt(selectedGridCard.dataset.attack);
        const enemyDefence = parseInt(cardElement.dataset.defence);
        const damage = Math.max(playerAttack - enemyDefence, 0);

        // Update enemy health
        enemy.health -= damage;
        updateUI();

        alert(`Player attacked! Damage dealt: ${damage}`);

        // Reset selection
        selectedGridCard = null;
        return;
    }

    // If an enemy card is selected, attack a player's card
    if (selectedGridCard && selectedGridCard.dataset.owner === "enemy" && cardElement.dataset.owner === "player") {
        const enemyAttack = parseInt(selectedGridCard.dataset.attack);
        const playerDefence = parseInt(cardElement.dataset.defence);
        const damage = Math.max(enemyAttack - playerDefence, 0);

        // Update player health
        player.health -= damage;
        updateUI();

        alert(`Enemy attacked! Damage dealt: ${damage}`);

        // Reset selection
        selectedGridCard = null;
        return;
    }       

    // Select a card for attack
    selectedGridCard = cardElement;
    alert(`Selected card: ${cardElement.dataset.name} (Owner: ${cardElement.dataset.owner})`);
});

// Function to place a card on the grid
function placeCard(slot, card) {
    const placedCard = document.createElement("div");
    placedCard.classList.add("card");

    // Add attack, defence, and owner data to the placed card
    placedCard.dataset.name = card.dataset.name;
    placedCard.dataset.attack = card.dataset.attack;
    placedCard.dataset.defence = card.dataset.defence;
    placedCard.dataset.owner = card.dataset.owner; // "player" or "enemy"
    placedCard.innerHTML = `<img src="${card.dataset.image}" alt="${card.dataset.name}">`;

    slot.appendChild(placedCard);
}

// Enemy turn logic to place cards and attack
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
        }

        const enemySlot = availableSlots[Math.floor(Math.random() * availableSlots.length)];
        const enemyCardElement = document.createElement("div");
        enemyCardElement.classList.add("card");

        // Add attack, defence, and owner data to the enemy card
        enemyCardElement.dataset.name = enemyCard.name;
        enemyCardElement.dataset.attack = enemyCard.attack || 0;
        enemyCardElement.dataset.defence = enemyCard.defence || 0;
        enemyCardElement.dataset.owner = "enemy"; // Mark as an enemy's card
        enemyCardElement.innerHTML = `<img src="${enemyCard.image}" alt="${enemyCard.name}" width="80">`;

        enemySlot.appendChild(enemyCardElement);
    }
}

