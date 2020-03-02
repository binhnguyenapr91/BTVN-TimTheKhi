let input = prompt("Enter the year to check:");
process(input);
function process(inputYear) {
    let century = Math.floor(inputYear/100)+1;
    alert("Your entered year is in "+century+" century");
}