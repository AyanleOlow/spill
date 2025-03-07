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

// 🎴 Custom Deck with Stats (Attack, Defense, Mana Cost)
const deck = [
// 🔥 Basic Monsters (10)
{ name: "Shadow Soldier", type: "monster", category: "basic",attack: 600, deffence:400 , mana:3 ,image: "../images/monster/Shadow Soldier.png" },
{ name: "Wolf", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/cards/wolf.png" },
{ name: "Zombie", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/cards/zombie.png" },
{ name: "Slime", type: "monster", category: "basic", attack: 200, deffence:300 , mana:3 ,image: "../images/cards/slime.png" },
{ name: "Bat", type: "monster", category: "basic", attack: 200, deffence:300 , mana:3 ,image: "../images/cards/bat.png" },
{ name: "Skeleton", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/cards/skeleton.png" },
{ name: "Orc", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/cards/orc.png" },
{ name: "Lizardman", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/cards/lizardman.png" },
{ name: "Ghost", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/cards/ghost.png" },
{ name: "Golem", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/cards/golem.png" },

// ⚔️ Advanced Monsters (10)
{ name: "Vampire", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/cards/vampire.png" },
{ name: "Dark Knight", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/cards/dark_knight.png" },
{ name: "Warlock", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/cards/warlock.png" },
{ name: "Necromancer", type: "monster", category: "advanced", attack: 200, deffence:300 , mana:3 ,image: "../images/cards/necromancer.png" },
{ name: "Berserker", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/cards/berserker.png" },
{ name: "Wyvern", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/cards/wyvern.png" },
{ name: "Demon", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/cards/demon.png" },
{ name: "Titan", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/cards/titan.png" },
{ name: "Ice Dragon", type: "monster", category: "advanced", attack: 200, deffence:300 , mana:3 ,image: "../images/cards/ice_dragon.png" },
{ name: "Fire Elemental", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/cards/fire_elemental.png" },

// 🏆 Legendary Monsters (5)
{ name: "Phoenix", type: "monster", category: "legendary",attack: 200, deffence:300 , mana:3 , image: "../images/cards/phoenix.png" },
{ name: "Behemoth", type: "monster", category: "legendary", attack: 200, deffence:300 , mana:3 ,image: "../images/cards/behemoth.png" },
{ name: "Leviathan", type: "monster", category: "legendary",attack: 200, deffence:300 , mana:3 , image: "../images/cards/leviathan.png" },
{ name: "Archangel", type: "monster", category: "legendary",attack: 200, deffence:300 , mana:3 , image: "../images/cards/archangel.png" },
{ name: "Demon Lord", type: "monster", category: "legendary",attack: 200, deffence:300 , mana:3 ,  image: "../images/cards/demon_lord.png" },

// 🌀 Spells (15)
{ name: "Fireball", type: "spell", image: "../images/cards/fireball.png" },
{ name: "Lightning Strike", type: "spell", image: "../images/cards/lightning_strike.png" },
{ name: "Earthquake", type: "spell", image: "../images/cards/earthquake.png" },
{ name: "Ice Storm", type: "spell", image: "../images/cards/ice_storm.png" },
{ name: "Dark Blast", type: "spell", image: "../images/cards/dark_blast.png" },
{ name: "Magic Arrow", type: "spell", image: "../images/cards/magic_arrow.png" },
{ name: "Meteor Shower", type: "spell", image: "../images/cards/meteor_shower.png" },
{ name: "Holy Light", type: "spell", image: "../images/cards/holy_light.png" },
{ name: "Shadow Curse", type: "spell", image: "../images/cards/shadow_curse.png" },
{ name: "Tsunami", type: "spell", image: "../images/cards/tsunami.png" },
{ name: "Time Stop", type: "spell", image: "../images/cards/time_stop.png" },
{ name: "Healing Rain", type: "spell", image: "../images/cards/healing_rain.png" },
{ name: "Thunder Wave", type: "spell", image: "../images/cards/thunder_wave.png" },
{ name: "Blizzard", type: "spell", image: "../images/cards/blizzard.png" },
{ name: "Chaos Storm", type: "spell", image: "../images/cards/chaos_storm.png" },

// 🛡 Buffs (10)
{ name: "Strength Boost", type: "buff", image: "../images/cards/strength_boost.png" },
{ name: "Speed Boost", type: "buff", image: "../images/cards/speed_boost.png" },
{ name: "Mana Regeneration", type: "buff", image: "../images/cards/mana_regeneration.png" },
{ name: "Shield", type: "buff", image: "../images/cards/shield.png" },
{ name: "Health Regen", type: "buff", image: "../images/cards/health_regen.png" },

// ☠️ Debuffs (5)
{ name: "Poison", type: "debuff", image: "../images/cards/poison.png" },
{ name: "Slow", type: "debuff", image: "../images/cards/slow.png" },
{ name: "Weaken", type: "debuff", image: "../images/cards/weaken.png" },
{ name: "Mana Drain", type: "debuff", image: "../images/cards/mana_drain.png" },
{ name: "Cursed Aura", type: "debuff", image: "../images/cards/cursed_aura.png" }
];

// Game elements
const playerHand = document.getElementById("player-hand");
const drawButton = document.getElementById("draw-card");
const gameBoard = document.getElementById("game-board");

// 🎴 Draw a random card
drawButton.addEventListener("click", () => {
    if (playerHand.children.length < 5) {
        const randomCard = deck[Math.floor(Math.random() * deck.length)];
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${randomCard.image}" alt="${randomCard.name}" width="80"><br>
            <b>${randomCard.name}</b><br>
            ${randomCard.type === "monster" ? `ATK: ${randomCard.attack} | DEF: ${randomCard.defense} | Mana: ${randomCard.manaCost}` : ""}
        `;
        card.dataset.name = randomCard.name;
        card.dataset.type = randomCard.type;
        if (randomCard.type === "monster") {
            card.dataset.attack = randomCard.attack;
            card.dataset.defense = randomCard.defense;
            card.dataset.manaCost = randomCard.manaCost;
        }
        card.addEventListener("click", () => selectCard(card));
        playerHand.appendChild(card);
    }
});

// Card selection
let selectedCard = null;

function selectCard(card) {
    selectedCard = card;
}

// 🎯 Grid placement logic (Uses Mana)
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
            player.mana -= manaCost; // Deduct mana
            updateUI();
        }

        placeCard(slot, selectedCard);
        playerHand.removeChild(selectedCard);
        selectedCard = null;

        setTimeout(enemyTurn, 1000);
    }
});

// Place card on the board
function placeCard(slot, card) {
    const placedCard = document.createElement("div");
    placedCard.classList.add("card");
    placedCard.innerHTML = card.innerHTML;
    slot.appendChild(placedCard);
}

// 🤖 Enemy AI turn (Places Monster if it has Enough Mana)
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
            enemy.mana -= enemyCard.manaCost; // AI loses mana
            updateUI();
        }

        const enemySlot = availableSlots[Math.floor(Math.random() * availableSlots.length)];
        const enemyCardElement = document.createElement("div");
        enemyCardElement.classList.add("card");
        enemyCardElement.innerHTML = `
            <img src="${enemyCard.image}" alt="${enemyCard.name}" width="80"><br>
            <b>${enemyCard.name}</b><br>
            ${enemyCard.type === "monster" ? `ATK: ${enemyCard.attack} | DEF: ${enemyCard.defense} | Mana: ${enemyCard.manaCost}` : ""}
        `;
        enemySlot.appendChild(enemyCardElement);
    }
}
