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
{ name: "Shadow Soldier", type: "monster", category: "basic",attack: 600, deffence:400 , mana:3 ,image: "../images/monster/Shadow Soldier.png" },
{ name: "Lava Hound ", type: "monster", category: "basic",attack: 700, deffence:400 , mana:3 , image: "../images/monster/Lava Hound.png" },
{ name: " Iron Knight", type: "monster", category: "basic",attack: 600, deffence:600 , mana:3 , image: "../images/monster/ Iron Knight.png" },
{ name: "Stone Golem", type: "monster", category: "basic", attack: 400, deffence:700 , mana:3 ,image: "../images/monster/Stone Golem.png" },
{ name: "Water Serpent", type: "monster", category: "basic", attack: 200, deffence:300 , mana:3 ,image: "../images/monster/Water Serpent.png" },
{ name: "Wind Scout", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/monster/Wind Scout.png" },
{ name: "Frost Imp", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/monster/Frost Imp.png" },
{ name: "Mystic Owl", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/monster/Mystic Owl.png" },
{ name: "Ember fox", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/monster/Ember fox.png" },
{ name: "Silverback Guardian", type: "monster", category: "basic",attack: 200, deffence:300 , mana:3 , image: "../images/monster/Silverback Guardian.png" },

// ⚔️ Advanced Monsters (10)
{ name: "Vampire", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/monster/vampire.png" },
{ name: "Dark Knight", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/monster/dark_knight.png" },
{ name: "Warlock", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/monster/warlock.png" },
{ name: "Necromancer", type: "monster", category: "advanced", attack: 200, deffence:300 , mana:3 ,image: "../images/monster/necromancer.png" },
{ name: "Berserker", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/monster/berserker.png" },
{ name: "Wyvern", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/monster/wyvern.png" },
{ name: "Demon", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/monster/demon.png" },
{ name: "Titan", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/monster/titan.png" },
{ name: "Ice Dragon", type: "monster", category: "advanced", attack: 200, deffence:300 , mana:3 ,image: "../images/monster/ice_dragon.png" },
{ name: "Fire Elemental", type: "monster", category: "advanced",attack: 200, deffence:300 , mana:3 , image: "../images/monster/fire_elemental.png" },

// 🏆 Legendary Monsters (5)
{ name: "Phoenix", type: "monster", category: "legendary",attack: 200, deffence:300 , mana:3 , image: "../images/monster/phoenix.png" },
{ name: "Behemoth", type: "monster", category: "legendary", attack: 200, deffence:300 , mana:3 ,image: "../images/monster/behemoth.png" },
{ name: "Leviathan", type: "monster", category: "legendary",attack: 200, deffence:300 , mana:3 , image: "../images/monster/leviathan.png" },
{ name: "Archangel", type: "monster", category: "legendary",attack: 200, deffence:300 , mana:3 , image: "../images/monster/archangel.png" },
{ name: "Demon Lord", type: "monster", category: "legendary",attack: 200, deffence:300 , mana:3 ,  image: "../images/monster/demon_lord.png" },

// 🌀 Spells (15)
{ name: "Fireball", type: "spell", image: "../images/spell/fireball.png" },
{ name: "Lightning Strike", type: "spell", image: "../spell/cards/lightning_strike.png" },
{ name: "Earthquake", type: "spell", image: "../images/spell/earthquake.png" },
{ name: "Ice Storm", type: "spell", image: "../images/spell/ice_storm.png" },
{ name: "Dark Blast", type: "spell", image: "../images/spell/dark_blast.png" },
{ name: "Magic Arrow", type: "spell", image: "../images/spell/magic_arrow.png" },
{ name: "Meteor Shower", type: "spell", image: "../images/spell/meteor_shower.png" },
{ name: "Holy Light", type: "spell", image: "../images/spell/holy_light.png" },
{ name: "Shadow Curse", type: "spell", image: "../images/spell/shadow_curse.png" },
{ name: "Tsunami", type: "spell", image: "../images/spell/tsunami.png" },
{ name: "Time Stop", type: "spell", image: "../images/spell/time_stop.png" },
{ name: "Healing Rain", type: "spell", image: "../images/spell/healing_rain.png" },
{ name: "Thunder Wave", type: "spell", image: "../images/spell/thunder_wave.png" },
{ name: "Blizzard", type: "spell", image: "../images/spell/blizzard.png" },
{ name: "Chaos Storm", type: "spell", image: "../images/spell/chaos_storm.png" },

// 🛡 Buffs (10)
{ name: "Strength Boost", type: "buff", image: "../images/debuff & buff/strength_boost.png" },
{ name: "Speed Boost", type: "buff", image: "../images/debuff & buff/speed_boost.png" },
{ name: "Mana Regeneration", type: "buff", image: "../images/debuff & buff/mana_regeneration.png" },
{ name: "Shield", type: "buff", image: "../images/debuff & buff/shield.png" },
{ name: "Health Regen", type: "buff", image: "../images/debuff & buff/health_regen.png" },

// ☠️ Debuffs (5)
{ name: "Poison", type: "debuff", image: "../images/debuff & buff/poison.png" },
{ name: "Slow", type: "debuff", image: "../images/debuff & buff/slow.png" },
{ name: "Weaken", type: "debuff", image: "../images/debuff & buff/weaken.png" },
{ name: "Mana Drain", type: "debuff", image: "../images/debuff & buff/mana_drain.png" },
{ name: "Cursed Aura", type: "debuff", image: "../images/debuff & buff/cursed_aura.png" }
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

    // Only show the image on board
    placedCard.innerHTML = `<img src="${card.dataset.image}" alt="${card.dataset.name}" width="80">`;
    
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
        }

        const enemySlot = availableSlots[Math.floor(Math.random() * availableSlots.length)];
        const enemyCardElement = document.createElement("div");
        enemyCardElement.classList.add("card");

        // Enemy card now only displays the image
        enemyCardElement.innerHTML = `<img src="${enemyCard.image}" alt="${enemyCard.name}" width="80">`;
        
        enemySlot.appendChild(enemyCardElement);
    }
}



let hoverTimeout;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            hoverTimeout = setTimeout(() => {
                card.classList.add("enlarged-card");
            }, 3000); // 3 seconds delay
        });

        card.addEventListener("mouseleave", () => {
            clearTimeout(hoverTimeout);
            card.classList.remove("enlarged-card");
        });
    });
});
