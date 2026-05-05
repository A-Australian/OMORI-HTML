document.addEventListener("DOMContentLoaded", () => {
  function makeMildUpDownZalgo(text) {
    const upDiacritics = [];
    const downDiacritics = [];

    // Unicode block for diacritics that stack ABOVE letters
    for (let i = 0x0300; i <= 0x0314; i++)
      upDiacritics.push(String.fromCharCode(i));
    for (let i = 0x033d; i <= 0x0344; i++)
      upDiacritics.push(String.fromCharCode(i));

    // Unicode block for diacritics that stack BELOW letters
    for (let i = 0x0316; i <= 0x031f; i++)
      downDiacritics.push(String.fromCharCode(i));
    for (let i = 0x0321; i <= 0x0333; i++)
      downDiacritics.push(String.fromCharCode(i));

    const diacritics = [...upDiacritics, ...downDiacritics];

    return text
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        let zalgoChar = char;
        const intensity = Math.floor(Math.random() * 200) + 50;

        for (let i = 0; i < intensity; i++) {
          zalgoChar +=
            diacritics[Math.floor(Math.random() * diacritics.length)];
        }
        return zalgoChar;
      })
      .join("");
  }

  const textElement = document.getElementById("dynamic-text");

  if (!textElement) {
    console.error(
      "Zalgo error: Could not find an element with id='dynamic-text'",
    );
    return;
  }

  // 1. Math.random() < 1/60 creates an exact 1 in 60 chance on page load
  if (Math.random() < 1 / 60) {
    // 2. Remember what the original text was so we can put it back
    const originalText = textElement.textContent;

    const newMessage = ">YOU CAN'T SEEK REFUGE IN THAT HOUSE OF YOURS<";

    // 3. Apply the horror text
    textElement.textContent = makeMildUpDownZalgo(newMessage);

    // 4. Set a timer to put the original text back after 2 seconds (2000ms)
    setTimeout(() => {
      textElement.textContent = originalText;
    }, 2000);
  }
});
