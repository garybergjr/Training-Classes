var dayOfWeek = "Friday";
var totalTrains = 12;
var trainsOperational = 8;

for (trainNumber = 1; trainCount <= totalTrains; trainCount++) {
  if (trainNumber <= operationalTrains && trainNumber != 3)
    console.log("Train #" + trainNumber + " is running.");
} else if (trainNumber == 10 || trainNumber == 12) {
  console.log("Train # " + trainNumber + " will begin running at noon.");
} else if ()
