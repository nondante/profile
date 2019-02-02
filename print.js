function printError(error){
  console.log(error.message);
}

//Function to print message to the console.
function printMessage(username, badgeCount, point){
  const message = `${username} has ${badgeCount} total badges and ${point} points in JavaScript `;
  console.log(message);
}

module.exports = {
    e: printError,
    m: printMessage
};
