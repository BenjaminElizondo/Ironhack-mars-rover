// Rover Object Goes Here
// ======================
let rover = { direction: "N", x: 0, y: 0, travelLog: [] };
// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called!");
  rover.travelLog.push("Direction: " + rover.direction + " x:" + rover.x + " y:" + rover.y);
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
  rover.travelLog.push("Direction: " + rover.direction + " x:" + rover.x + " y:" + rover.y);
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        rover.y -= 1;
      }
      else {
        console.log("Minimum value for Y reached");
      }
      break;
    case "W":
      if (rover.x > 0) {
        rover.x -= 1;
      }
      else {
        console.log("Minimum value for X reached");
      }
      break;
    case "S":
      if (rover.y < 10) {
        rover.y += 1;
      }
      else {
        console.log("Maximum value for Y reached");
      }
      break;
    case "E":
      if (rover.x < 10) {
        rover.x += 1;
      }
      else {
        console.log("Maximum value for X reached");
      }
      break;
  }
  console.log("moveForward was called");
  rover.travelLog.push("Direction: " + rover.direction + " x:" + rover.x + " y:" + rover.y);
}

function listOfCommands(commands) {
  for (let i = 0; i < commands.length; i++){
    switch (commands[i]) {
      case "l":
      turnLeft(rover.direction);
      break;
      case "r":
      turnRight(rover.direction);
      break;
      case "f":
      moveForward(rover.direction);
      break;
      default:
      console.log("Not a valid command, please enter one of the following: l, r, f");
      break;
    }
  } 
  console.log(rover.travelLog);
}





