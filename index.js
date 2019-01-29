// Code your solution in this file!

function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}


function calculatesFarePrice(distanceFromHqInFeet) {
  if (distanceFromHqInFeet < 400) {
    return 0;
  } else if (distanceFromHqInFeet > 400 && < 2000) {
    return .02 * distanceFromHqInFeet;
  }
   else if (distanceFromHqInFeet > 2000 && < 2500) {
    return 25;
   }
   else {
     console.log ("cannot travel that far")
   }
}
