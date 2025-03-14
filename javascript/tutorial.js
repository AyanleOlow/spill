
    const noe = document.getElementById("noe");
 
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
     
    deck.forEach((card) => {
        const cardResults = document.getElementById("card-results");
        const cardEl = document.createElement("div");
        cardEl.style.width ="200px";
        cardEl.style.height="290px";
        cardEl.style.backgroundImage =`url(${card.image})`;
        cardEl.style.border="solid black";
        cardEl.style.backgroundSize="cover"
        cardEl.style.backgroundRepeat=" no-repeat"
        cardEl.style.gap="10px"
        cardEl.style.padding="20px"
        cardResults.appendChild(cardEl);
    });
     
    // const filteredCards = cards.filter((card) => {
    //   return returnCardType("monster", card) && card.category == "basic";
    // });
     
    // function returnCardType(type, card){
    //   return card.type == type;
    // }
     
    // console.log(filteredCards);
     
    // document.getElementById("all").addEventListener("click", function(){
    //     if 
    // })
            
    
    



