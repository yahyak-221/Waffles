const toppings = ["Whipped Cream", "Choco Chips", "Banana", "Sprinkles"];
const spreadMessage = ["Your Waffle Could Include:", ...toppings].join(" ✨ ");
document.getElementById("so").innerHTML += `<br><br><em>${spreadMessage}</em>`;

const facts = [
  "i think the first waffles was from like old greece or somthing like really really long ago",
  "someone said waffle is from a dutch word like wafel or woffel idk but sounds fancy",
  "belgium waffles got super famus after a fair in new york in 1964 i wasnt born then but sounds cool",
  "in some places like scandiavia waffles are not just square they can be hearts or round lol",
  "america has a waffle day on august 24 i think its like a big deal there or maybe just an excuse to eat more",
];

function fact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  alert("🧇 Waffle Fact:\n" + fact);
}

function greet() {
  const hr = new Date().getHours();
  const greet =
    hr < 12 ? "Good Morning!" : hr < 18 ? "Good Afternoon!" : "Good Evening!";
  alert(`👋 ${greet} Welcome to WaffleZone!`);
}

function mood() {
  const m = prompt(
    "How are you feeling today? (happy/sad/excited/curious)"
  ).toLowerCase();
  if (m === "happy") {
    alert("Sprinkles are for you!!!");
  } else if (m === "sad") {
    alert("Whipped cream can always fix you?");
  } else if (m === "excited") {
    alert("Choco chips will make it better");
  } else if (m === "curious") {
    alert("Bananas are a great topping to explore, lol");
  } else {
    alert("How about trying something new?");
  }
}

greet();
