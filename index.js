// Code your solution in this file!

function distanceFromHqInBlocks (blockDistance) {
  if (blockDistance > 42) {
    return blockDistance - 42;
  } else {
  return 42 - blockDistance;
  }
}

function distanceFromHqInFeet (blockDistance) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}


function calculatesFarePrice(distanceFromHqInFeet) {
  if (distanceFromHqInFeet < 400) {
    console.log(0);
  } else if (distanceFromHqInFeet > 400 && < 2000) {
    console.log(.02 * distanceFromHqInFeet);
  }
   else if (distanceFromHqInFeet > 2000 && < 2500) {
    console.log(25);
   }
   else {
     console.log ("cannot travel that far")
   }
}
