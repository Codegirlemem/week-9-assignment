// 2) Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.

const colors = ["red", "blue", "yellow", "green", "white", "purple", "black"];

function itemLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

itemLoop(colors);
