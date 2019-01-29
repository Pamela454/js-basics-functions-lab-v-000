// Code your solution in this file!

distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockDistance) {
  return distanceFromHqInBlocks(blockDistance) * 264;
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
