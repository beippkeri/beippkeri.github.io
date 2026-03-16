let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//config
let warpUnlocked = false;
let currentLocation = null;
let tutorial = false;
let clokens = 0;
let talkedtoclerk = false;
let inventoryTools = [];
let inventoryConsumables = [];
let inventoryEquipment = [];
let quests = [];
let equippedTool = "Stick"; //Completely Useless
let equippedHelmet = "USB stick"; //Completely Useless
let miningSpeed = 1; //affects time taken to mine
let miningLuck = 1; //affects weight
let miningBlocks = ['coal', 'iron', 'gold', 'diamond', 'ruby', 'obsidian', 'god']; //blocks that can be mined, in order of rarity
let blockWeights = {
    'coal': 75000,
    'iron': 20000,
    'gold': 4000,
    'diamond': 800,
    'ruby': 100,
    'obsidian': 99,
    'god': 1
};
let blockValues = {
    'coal': 1,
    'iron': 5,
    'gold': 50,
    'diamond': 250,
    'ruby': 5000,
    'obsidian': 10000,
    'god': 10000000
};
//Dialogues 
function librarianDialogue() {
    print("\nLibrarian: Hello there! Welcome to the library. We have a wide selection of books on various topics. Is there anything specific you're looking for?");
    print("If you want to rest here, you can!");
}
function receptionistDialogue() {
    print("\nReceptionist: Hi! Welcome to the gym. We have a variety of equipment and classes available.");
    print("In this place, you can work out and get stronger! If you want to rest here, you can!");
    print("If you want to buy a membership, you can!");
}
function clerkDialogue() {
    print("\nClerk: Welcome to the store! We have a variety of items for sale, including pickaxes, potions, and more. Is there anything specific you're looking for?");
    print("If you want to rest here, you can!");
    print("If you want to buy something, just let me know!");
    print("If you want to buy a pickaxe, just let me know which one you want! I recommend you buy one if you want to mine for clokens, which is the currency of this world. You can use clokens to buy better pickaxes and other items that will help you on your adventure!");
    let talkedtoclerk = true;
}
function tutorialGuyDialogue() {
    print("\nTutorial Guy: Hi there! I'm the tutorial guy. I'm here to help you get started with the game and give you tips on how to play. If you have any questions or need any guidance, feel free to ask me!");
    print("Do you need to see the tutorial? (yes/no)");
    function processInput(input){
        if ((input.toLowerCase() === "yes") || (input.toLowerCase() === "y")) {
            tutorialDialogue();
            waitThenCallLong(cloudTown);
            if (!tutorial) {
                clokens += 100;
            }
            let tutorial = true;
        } else if ((input.toLowerCase() === "no") || (input.toLowerCase() === "n")) {
            print("\nTutorial Guy: No problem! If you ever need any help or want to see the tutorial, just let me know. I'm here to assist you in any way I can! Here is 100 clokens to start with!");
            if (!tutorial) {
                clokens += 100;
            }
            let tutorial = true;
            print("You might want to check the locations for new options. You never know what you might find!");
            waitThenCall(cloudTown);
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(tutorialGuyDialogue);
        }
    }
    waitForInput(processInput);
}
function tutorialDialogue() {
    print("\nTutorial Guy: Use the commands to navigate through the game and interact with the world. You can type the name of a location to move there, or talk to NPCs to learn more about the game and get tips. Don't forget to check your inventory and use items you find along the way!");
    print("If you ever need help, just type .help to see a list of available commands and information about the game. Good luck, and have fun exploring! Here's 100 clokens to start! (this is 15 seconds long)");
}
//Commands and other helper functions
function helpCommand() {
    print("Available commands:"
        + "\n\tType an option to trigger the corresponding action or move to a new location."
        + "\n\t.help - Show this help message"
        + "\n\t.warp <location> - Warp to a specific location (must unlock)"
        + "\n\t.inventory - Check your inventory"
        + "\nGame Info:"
        + "\n\tThis is a simple text-based adventure game. Your goal is to explore the world and find hidden secrets. Each location may have different options for you to choose from. Type the name of the location you want to go to, and press Enter. Good luck!"
        + "\n\tNote: This is a work in progress, so there may be some bugs or unfinished content. If you find any issues, please let me know!"
        + "\n\tAlso, feel free to customize the game and make it your own! You can add new locations, items, or even a storyline. The code is open for you to edit and have fun with!"
        + "\n\tRemember, the most important thing is to have fun and be creative! Happy gaming!"
        + "\n\tIf you ever finish interacting with npcs, check the locations for new options. You never know what you might find!"
    );
}
function inventoryCommand() { //need to add equipping
    print("Inventory:"
        + "\n\tTools: " + inventoryTools.join(", ")
        + "\n\tConsumables: " + inventoryConsumables.join(", ")
        + "\n\tHelmets: " + inventoryHelmet.join(", ")
        + "\nClokens: " + clokens
        + "\nEquipped Tool: " + equippedTool
        + "\nEquipped Helmet: " + equippedHelmet
    );
}
function equipCommand(type, item) {
    if (type === "tool") {
        if (inventoryTools.includes(item)) {
            print("You have equipped the " + item + "!");
            // Add logic to equip the tool and apply its effects
            inventoryTools.push(equippedTool);
            inventoryTools.splice(inventoryTools.indexOf(item), 1);
            equippedTool = item;
        } else {
            print("You don't have that tool in your inventory!");
        }

    } else if (type === "equipment") {
        if (inventoryHelmet.includes(item)) {
            print("You have equipped the " + item + "!");
            // Add logic to equip the equipment and apply its effects
            inventoryHelmet.push(equippedHelmet);
            inventoryHelmet.splice(inventoryHelmet.indexOf(item), 1);
            equippedHelmet = item;

        } else {
            print("You don't have that equipment in your inventory!");
        }
    }
}
//Main Areas
function cloudGate() {
    currentLocation = "cloudGate";
    clear();
    print("\nYou have just approached a cloud gate? Will you enter it?");
    print("\nWhere do you want to go?"
         + "\n\tCloudTown"
         + "\n\tBackDown"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input.toLowerCase() === "backdown") {
            backDown();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudGate);
        }
    }
    waitForInput(processInput);
}
function backDown() {
    currentLocation = "backDown";
    clear();
    print("\nYou have decided to turn back down the mountain. You can try entering the cloud gate again if you want to.");
    print("\nWhere do you want to go?"
            + "\n\tCloudGate"
    );
    function processInput(input){
        if (input.toLowerCase() === "cloudgate") {
            print("\nYou tried to enter the cloud gate.");
            print("\nIt's locked");
            print("I guess that's the end");
            print("Is this some sort of \"bad ending\"? Maybe. But I don't really have any more content planned for this part");
            print("Thanks for playing!");
            gameActive = false;
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(backDown);
        }
    }
    waitForInput(processInput);
}s
function cloudTown() {
    currentLocation = "cloudTown";
    clear();
    print("\nYou have entered the Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudGate"
        + "\n\tCloudTownEast"
        + "\n\tCloudTownWest"
        + "\n\tCloudTownSouth"
        + "\n\tCloudTownSquare"
    );
    print("\nWho do you want to talk to?"
        + "\n\tTutorialGuy (He is here to help you get started and give you tips on how to play the game. Feel free to talk to him if you need any assistance or guidance!)"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudgate") {
            cloudGate();
        } else if (input.toLowerCase() === "cloudtowneast") {
            cloudTownEast();
        } else if (input.toLowerCase() === "cloudtownwest") {
            cloudTownWest();
        } else if (input.toLowerCase() === "cloudtownsouth") {
            cloudTownSouth();
        } else if (input.toLowerCase() === "cloudtownsquare") {
            cloudTownSquare();
        }else if (input.toLowerCase() === "tutorialguy") {
            tutorialGuyDialogue();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudTown);
        }
    }
    waitForInput(processInput);
}
// Cloud Town Areas
function cloudTownWest() {
    currentLocation = "cloudTownWest";
    clear();
    print("\nYou have moved to the west side of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
        + "\n\tStore"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudTown") {
            cloudTown();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudTownWest);
        }
    }
    waitForInput(processInput);
}
function cloudTownEast() {
    currentLocation = "cloudTownEast";
    clear();
    print("\nYou have moved to the East side of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
        + "\n\tLibrary"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input.toLowerCase() === "library") {
            cloudTownLibrary();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudTown);
        }
    }
    waitForInput(processInput);
}
function cloudTownWest() {
    currentLocation = "cloudTownWest";
    clear();
    print("\nYou have moved to the west side of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
        + "\n\tStore"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input.toLowerCase() === "store") {
            store(); 
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudTownEast);
        }
    }
    waitForInput(processInput);
}
function cloudTownSouth() {
    currentLocation = "cloudTownSouth";
    clear();
    print("\nYou have moved to the south side of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
        + "\n\tGym"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input.toLowerCase() === "gym") {
            cloudTownGym();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudTownSouth);
        }
    }
    waitForInput(processInput);
}
function cloudTownSquare() {
    currentLocation = "cloudTownSquare";
    clear();
    print("\nYou have moved to the center of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
        + "\n\tCraftingShop"
        + "\n\tWarp Zone"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudTownWest);
        }
    }
    waitForInput(processInput);
}
// Eastern locations
function cloudTownLibrary() {
    currentLocation = "cloudTownLibrary";
    clear();
    print("\nYou have entered the library of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
    );
    print("\nWho do you want to talk to?"
        + "\n\tLibrarian"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input.toLowerCase() === "librarian") {
            librarianDialogue();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudTownLibrary);
        }
    }
    waitForInput(processInput);
}
//South Side Locations

function cloudTownGym() {
    currentLocation = "cloudTownGym";
    clear();
    print("\nYou have entered the gym of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
    );
    print("\nWho do you want to talk to?"
        + "\n\tReceptionist"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input.toLowerCase() === "receptionist") {
            receptionistDialogue();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(cloudTownGym);
        }
    }
    waitForInput(processInput);
}

//West Side Locations
function store() {
    currentLocation = "store";
    clear();
    print("\nYou have entered the store of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
    );
    print("\nWho do you want to talk to?"
        + "\n\tClerk"
    );
    print("\nWhat do you want to buy?"
        + "\n\tPickaxes:"
        + "\n\tRustyPickaxe (50 clokens)"
        + "\n\tShinyPickaxe (200 clokens)"
        + "\n\tMythicalPickaxe (1,000 clokens)"
        + "\n\tRubyPickaxe (12,500 clokens)"
        + "\n\tDiamondPickaxe (50,000 clokens)"
        + "\n\tObsidianPickaxe (100,000 clokens)"
        + "\n\tRainbowPickaxe (1,000,000 clokens)"
        + "\n\tCloudGodPickaxe (1,000,000,000 clokens)"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input.toLowerCase() === "clerk") {
            clerkDialogue();
        } else if (input.toLowerCase() === "rustypickaxe") {
            if (clokens >= 50) {
                print("You have purchased the Rusty Pickaxe!");
                clokens -= 50;
                inventoryTools.push("rustypickaxe");
            } else {
                print("You don't have enough clokens to buy the Rusty Pickaxe!");
            }
        } else if (input.toLowerCase() === "shinypickaxe") {
            if (clokens >= 200) {
                print("You have purchased the Shiny Pickaxe!");
                clokens -= 200;
                inventoryTools.push("shinypickaxe");
            } else {
                print("You don't have enough clokens to buy the Shiny Pickaxe!");
            }
        } else if (input.toLowerCase() === "mythicalpickaxe") {
            if (clokens >= 1000) {
                print("You have purchased the Mythical Pickaxe!");
                clokens -= 1000;
                inventoryTools.push("mythicalpickaxe");
            } else {
                print("You don't have enough clokens to buy the Mythical Pickaxe!");
            }
        } else if (input.toLowerCase() === "rubypickaxe") {
            if (clokens >= 12500) {
                print("You have purchased the Ruby Pickaxe!");
                clokens -= 12500;
                inventoryTools.push("rubypickaxe");
            } else {
                print("You don't have enough clokens to buy the Ruby Pickaxe!");
            }
        } else if (input.toLowerCase() === "diamondpickaxe") {
            if (clokens >= 50) {
                print("You have purchased the Rusty Pickaxe!");
                clokens -= 50;
                inventoryTools.push("diamondpickaxe");
            } else {
                print("You don't have enough clokens to buy the Diamond Pickaxe!");
            }
        } else if (input.toLowerCase() === "obsidianpickaxe") {
            if (clokens >= 200) {
                print("You have purchased the Obsidian Pickaxe!");
                clokens -= 200;
                inventoryTools.push("obsidianpickaxe");
            } else {
                print("You don't have enough clokens to buy the Obsidian Pickaxe!");
            }
        } else if (input.toLowerCase() === "rainbowpickaxe") {
            if (clokens >= 1000) {
                print("You have purchased the Rainbow Pickaxe!");
                clokens -= 1000;
                inventoryTools.push("rainbowpickaxe");
            } else {
                print("You don't have enough clokens to buy the Rainbow Pickaxe!");
            }
        } else if (input.toLowerCase() === "cloudgodpickaxe") {
            if (clokens >= 12500) {
                print("YOU HAVE BECOME ONE WITH THE CLOUDS! You have purchased the CLOUD GOD PICKAXE!");
                clokens -= 12500;
                inventoryTools.push("cloudgodpickaxe");
            } else {
                print("You don't have enough clokens to buy the CLOUD GOD PICKAXE!");
            }
            }else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
            } else if (input.toLowerCase() === ".inventory") {
                inventoryCommand();
            } else {
                stayHere();
            }
        } else {
            stayHere();
            waitThenCall(store);
        }
    }
    waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            cloudGate();
    }
    waitForInput(processInput);
}