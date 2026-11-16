//Array to store the loot

const loot = [];

//declared varables at the top

let input = "";
let value = 0;
let totalValue = 0;

//Variables that are from html
const nameInput = document.getElementById("lootName");
const valueInput = document.getElementById("lootValue");
const addButton = document.getElementById("addLootButton");
const message = document.getElementById("message");
const lootList = document.getElementById("lootList");
const totalDisplay = document.getElementById("totalDisplay");

//using function to ensure that the code runs when ever the add button is pressed
function addLoot(event){

    //stops page from rreloading
    event.preventDefault();

    //reads the loots name and value
    input = nameInput.value.trim();
    value = Number(valueInput.value);

    //checks that name and values will work
    if(input === ""){
        message.textContent = "Please enter a loot name.";

    }else if(valueInput.value === "" || isNaN(value)){
        message.textContent = "Value must be a valid number.";

    }else if(value < 0){
        message.textContent = "Value cannot be negative.";

    }else{
        //this makes it so that once the input is accepted the old messages will go away
        message.textContent = "";

        //Creates a object for the loot to enter into the array
        const item = {name: input, value: value };
        loot.push(item);

        //Displays all items index and value
        lootList.textContent = "";

        for(let i = 0; i < loot.length; i++){
            const listItem = document.createElement("li");
            listItem.textContent = "[" + (i + 1) + "] " + loot[i].name + " - " + loot[i].value;
            lootList.appendChild(listItem);
        }

        //To calculate the total value of the collected loot
        totalValue = 0;

        for(let i = 0; i < loot.length; i++){
            totalValue = totalValue + loot[i].value;
        }

        //Displaying the total and making sure it rounds to 2 decimals if needed since we are talking about value
        totalDisplay.textContent = Math.round(totalValue * 100) / 100;

        //Clears what ever is in the box and brings cursor back there
        nameInput.value = "";
        valueInput.value = "";
        nameInput.focus();
    }
}

//For when the Add button is pressed to add the loot
addButton.addEventListener("click", addLoot);

/*
Debugging Reflection

After adding a breakpoint inside my addLoot function and added in the new loot and value, what I noticed that the loot array
was still empty but if we scrolled down a little bit we would see that a new item was created (example the name was chest and value was 20).
It showed that the item was created but was not pushed into the array yet. 

After that I stepped over the push command/line and the item is now found in the array and array now contained 1 item but the loot collected 
hasn't updated yet and still says "no loot added" as well as the total value it was still at 0.

Once I resumed the code the screen was then updated adding both the new loot and the total value of the collected loot.
*/

