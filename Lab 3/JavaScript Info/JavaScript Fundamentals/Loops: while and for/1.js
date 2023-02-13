//1
let i = 3;
alert(i--); // shows 3, decreases i to 2
alert(i--) // shows 2, decreases i to 1
alert(i--) // shows 1, decreases i to 0

//2
//From 1 to 4
let i = 0;
while (++i < 5) alert( i );

//From 1 to 5
let i = 0;
while (i++ < 5) alert( i );

//3
for (let i = 0; i < 5; ++i) alert( i );
for (let i = 0; i < 5; i++) alert( i );


//Use the for loop to output even numbers from 2 to 10.
 for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//Output prime numbers
let n = 10;
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert( i ); 
}