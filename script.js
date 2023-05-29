//document.getElementById("Count-el").innerText = 5 ;
// Javascript runs from top to bottom in ascending order while reading and compiling the code.. 

// STEPS::
// Intializing the number as zero. 
// Listen to the click on the increment button 
// Increment the count variable when the button is clicked
// change the count-el in the html.

let counting = document.getElementById("countUp"); // Pass in argument which means we are giving the JS with some html to work with and modify which results in adding the functionality


let count = 0;
function increment() {
    // count = count + 1 ;
    // Intead of the above line we can do shortcut as below.
    count += 1
    counting.innerText = count;
}

// Steps of save button in this app.
// 1. Grab the save-el paragraph and store it in a variabel called saveEl
let saveEl = document.getElementById("save-el");
// 2. Create a variable that contains both the count and dash separator.
// 3. Render the variable in the saveEl using the innerText
// Note: Make sure to not delete the existing content of the paragraph
function save() {
let countStr = count + " - "
// saveEl.innerText += countStr;
// Now we use textContent instead of innerText because spacebar after string wont be included when we use innerText
saveEl.textContent += countStr;
counting.textContent = 0;
count = 0;
}
// the final functionality of the app is to reset the count to zero as we save.
function reset() {
    saveEl.innerText = "Previous Entries:";
    counting.textContent = 0;
    count = 0;
}
setInterval(() => {
 
const datetime = new Date();
let dateEl = document.getElementById("dateTime");
dateEl.innerText = datetime.toLocaleString();
   
}, 1000);