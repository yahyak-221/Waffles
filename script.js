const btn = document.getElementById("build-btn");
const out = document.getElementById("order-summary");
const ul = document.getElementById("l");

const fills = [];
const tops = [];

const MAX_F = 2,
  MAX_T = 3;

const names = {
  ccs: "Chocolate Chips",
  bb: "Blueberries",
  bs: "Banana Slices",
  pb: "Peanut Butter",
  cc: "Cream Cheese",
  dd: "Nutella Dip",
  wc: "Whipped Cream",
  cs: "Chocolate Syrup",
  ms: "Maple Syrup",
  ps: "Powdered Sugar",
  st: "Strawberries",
  sp: "Sprinkles",
};

const imgs = {
  ccs: "./assets/filings/CH.jpg",
  bb: "./assets/filings/BB.jpg",
  bs: "./assets/filings/BL.jpg",
  pb: "./assets/filings/PT.jpg",
  cc: "./assets/filings/CC.jpg",
  dd: "./assets/filings/NT.jpg",
  wc: "./assets/topping/WC.jpg",
  cs: "./assets/topping/CS.jpg",
  ms: "./assets/topping/MS.jpg",
  ps: "./assets/topping/PS.jpg",
  st: "./assets/topping/S.jpeg",
  sp: "./assets/topping/SP.jpg",
};

function msg(txt, type = "") {
  let box = document.querySelector(".mb");
  if (!box) {
    box = document.createElement("div");
    box.className = "mb";
    document.body.appendChild(box);
  }
  box.textContent = txt;
  box.className = "mb " + type;
  box.classList.add("show");
  setTimeout(() => box.classList.remove("show"), 3000);
}

function handleClick(e) {
  const el = e.currentTarget;
  const id = el.dataset.item;
  const type = el.dataset.type;
  const arr = type === "f" ? fills : tops;
  const max = type === "f" ? MAX_F : MAX_T;
  const i = arr.indexOf(id);

  if (i > -1) {
    arr.splice(i, 1);
    el.classList.remove("selected");
  } else if (arr.length < max) {
    arr.push(id);
    el.classList.add("selected");
  } else {
    msg(`Max ${max} ${type === "f" ? "fillings" : "toppings"}`, "warning");
  }
  out.style.display = "none";
}

function build() {
  const base = document.getElementById("wb");
  base.src = "./assets/Waffle-recipe.jpg";
  base.classList.add("final");

  ul.innerHTML = "<li>Waffle Base</li>";

  if (fills.length) {
    ul.innerHTML +=
      "<li><strong>Fillings:</strong></li>" +
      fills.map((i) => `<li>- ${names[i]}</li>`).join("");
  }
  if (tops.length) {
    ul.innerHTML +=
      "<li><strong>Toppings:</strong></li>" +
      tops.map((i) => `<li>- ${names[i]}</li>`).join("");
  }

  out.style.display = "block";
  out.scrollIntoView({ behavior: "smooth" });

  const sfx = document.getElementById("sfx");
  sfx.pause();
  sfx.currentTime = 0;
  sfx.play().catch(() => console.warn("Autoplay blocked"));
}

document
  .querySelectorAll(".item-card")
  .forEach((el) => el.addEventListener("click", handleClick));
btn.addEventListener("click", build);
