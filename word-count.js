// word-count.js

const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("Please provide some text.");
  process.exit(0);
}

const words = input.trim().split(/\s+/);
console.log(`Word count: ${words.length}`);


