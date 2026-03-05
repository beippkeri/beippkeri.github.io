let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let warpUnlocked = false;
let currentLocation = null;

//If you need, add any "helper" functions here
function helpCommand() {
    print("Available commands:\n"
        + "Type an entire option to trigger a location change!\n"
        + "\t.help - Show this help message");
        + "\t.warp <location> - Warp to a specific location (must unlock)"
}

//Make one function for each location
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