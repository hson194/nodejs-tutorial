const path = require("path");

console.log(path.sep); // Shows the platform-specific path separator

// Path to the file
const filePath = path.join("/content", "/subfolder///", "test.txt");
console.log(filePath);

// Base name of the file
const base = path.basename(filePath);
console.log(base);

// Absolute path to the file
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
