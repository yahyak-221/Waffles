const toppings = ["Whipped Cream", "Choco Chips", "Banana", "Sprinkles"];
const spreadMessage = ["Your Waffle Could Include:", ...toppings].join(" ✨ ");
document.getElementById("so").innerHTML += `<br><br><em>${spreadMessage}</em>`;

const facts = [
  "Waffles date back to Ancient Greece, where they cooked flat cakes between metal plates — kind of like early waffle irons!",
  "The word 'waffle' comes from the Dutch word 'wafel', which was brought to America by early settlers.",
  "Belgian waffles became famous in the U.S. after the 1964 New York World's Fair — originally sold as 'Brussels waffles'!",
  "Not all waffles are square — in Scandinavia, heart-shaped waffles are super popular and often served with jam and cream.",
  "National Waffle Day in the U.S. is celebrated on August 24 — marking the day the first waffle iron was patented in 1869.",
];

function fact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  alert("🧇 Waffle Fact:\n" + fact);
}

function greet() {
  const hr = new Date().getHours();
  const greet =
    hr < 12 ? "Good Morning!" : hr < 18 ? "Good Afternoon!" : "Good Evening!";
  alert(`👋 ${greet} Welcome to Waffle World!`);
}

function mood() {
  const m = prompt(
    "How are you feeling today? (happy / sad / excited / curious)"
  )
    .toLowerCase()
    .trim();

  switch (m) {
    case "happy":
      alert("Yay! 🎉 Sprinkles and smiles for you — waffle party mode ON!");
      break;
    case "sad":
      alert("Oh no! 😢 Sending you whipped cream hugs and syrupy cheer!");
      break;
    case "excited":
      alert("Woohoo! ⚡ Let’s throw in extra choco chips and a waffle dance!");
      break;
    case "curious":
      alert(
        "Love that vibe! 🧐 Try bananas, peanut butter, or something wild today!"
      );
      break;
    default:
      alert(
        "Hmm… how about a surprise topping to match your mystery mood? 🎁🧇"
      );
      break;
  }
}

greet();
