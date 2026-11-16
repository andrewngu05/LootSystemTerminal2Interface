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
            const listItem = document.createElement("1i");
            listItem.textContent = "[" + (i + 1) + "] " + loot[i].name + " - " + loot[i].value;
            lootList.appendChild(listItem);
        }

        //To calculate the total value of the collected loot
        totalValue = 0;

        for(let i = 0; i < loot.length; i++){
            totalValue = totalValue + loot[i].value;
        }

        //Displaying the total and making sure it rounds to 2 decimals
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

*/

