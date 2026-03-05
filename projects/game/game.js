let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//config
let warpUnlocked = false;
let currentLocation = null;

//Commands and other helper functions
function helpCommand() {
    print("Available commands:"
        + "\n\tType an option to trigger a location change"
        + "\n\t.help - Show this help message"
        + "\n\t.warp <location> - Warp to a specific location (must unlock)"
        + "\nGame Info:"
        + "\n\tThis is a simple text-based adventure game. Your goal is to explore the world and find hidden secrets. Each location may have different options for you to choose from. Type the name of the location you want to go to, and press Enter. Good luck!"
        + "\n\tNote: This is a work in progress, so there may be some bugs or unfinished content. If you find any issues, please let me know!"
        + "\n\tAlso, feel free to customize the game and make it your own! You can add new locations, items, or even a storyline. The code is open for you to edit and have fun with!"
        + "\n\tRemember, the most important thing is to have fun and be creative! Happy gaming!"
        + "\n\tIf you ever finish interacting with npcs, check the locations for new options. You never know what you might find!"
    );
}

//Main Areas
function cloudGate() {
    currentLocation = "cloudGate";
    clear();
    print("\nYou have just approached a cloud gate? Will you enter it?");
    print("\nWhere do you want to go?"
         + "\n\tCloudTown"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
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
    
    function processInput(input){
        if (input.toLowerCase() === "cloudgate") {
            cloudGate();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
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
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
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
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudgate") {
            cloudGate();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
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
    currentLocation = "cloudTownEast";
    clear();
    print("\nYou have moved to the east side of Cloud Town!");
    print("\nWhere do you want to go next?"
        + "\n\tCloudTown"
        + "\n\tLibrary"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
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
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
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
        + "\n\tBank"
    );
    
    function processInput(input){
        if (input.toLowerCase() === "cloudtown") {
            cloudTown();
        } else if (input[0] === ".") {
            // Handle help command
            if (input.toLowerCase() === ".help") {
                helpCommand();
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