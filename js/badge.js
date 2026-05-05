// 1. Find the paragraph element by its ID
const textElement = document.getElementById("dynamic-text");

// 2. Generate a random decimal between 0 and 1
// 3. Check if it is less than 0.01 (representing a 1% chance)
if (Math.random() < 0.01) {
  textElement.textContent = ">Home?<";
}
