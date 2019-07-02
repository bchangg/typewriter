const sentence = "hello there from lighthouse labs";
let count = 0;

// The for loop will set a new setTimeout for each time it loops through
// as a result, we must increment the delay for each loop so that each character gets "queued" in the stack
// at the correct time to be printed.
// In this case, we have made it so that a {count} variable is used to keep track of the increasing delay each letter
// must take to print in a timely manner.
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count);
  count += 50;
}

setTimeout(() => {
  console.log();
  console.log("test");
}, count);
