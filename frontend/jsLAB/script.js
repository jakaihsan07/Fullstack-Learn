// ===============================
// STEP 1: Synchronous Execution
// ===============================
console.log("=== STEP 1 ===");
console.log("A");
console.log("B");
console.log("C");


// ===============================
// STEP 2: setTimeout (Macrotask)
// ===============================
console.log("\n=== STEP 2 ===");
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");


// ===============================
// STEP 3: Promise (Microtask)
// ===============================
console.log("\n=== STEP 3 ===");
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


// ===============================
// STEP 4: Microtask vs Macrotask
// ===============================
console.log("\n=== STEP 4 ===");
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


// ===============================
// STEP 5: Async / Await
// ===============================
console.log("\n=== STEP 5 ===");

async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");


// ===============================
// STEP 6: Advanced Challenge
// ===============================
console.log("\n=== STEP 6 ===");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");


// ===============================
// END
// ===============================
console.log("\n=== SELESAI ===");