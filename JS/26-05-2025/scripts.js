let transport = prompt("Choose your transportation:\n1. Bike\n2. Auto\n3. Car");

let destination = prompt("Enter your destination:");

let distance = parseInt(prompt("Enter the distance in kilometers:"));

let rate;
let transportName;

if (transport === '1') {
  rate = 10;
  transportName = "Bike";
} else if (transport === '2') {
  rate = 12;
  transportName = "Auto";
} else if (transport === '3') {
  rate = 17;
  transportName = "Car";
} else {
  alert("Invalid transportation choice!");
}

if (rate) {
  let totalFare = rate * distance;
  alert(`Transport: ${transportName}\nDestination: ${destination}\nDistance: ${distance} km\nTotal Fare: ₹${totalFare}`);
}
