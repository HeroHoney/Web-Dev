//1
if (age >= 14 && age <= 90)
//2
if (age < 14 || age > 90)

//3
// Runs.
if (-1 || 0) alert( 'first' );

// Doesn't run
if (-1 && 0) alert( 'second' );

// Executes
if (null || -1 && 1) alert( 'third' );