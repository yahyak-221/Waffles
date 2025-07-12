const stack = document.querySelector(".stack");
const list = document.createElement("div");
list.className = "w-list";
stack.appendChild(list);

const btn = document.getElementById("b");
const out = document.getElementById("o");
const ul = document.getElementById("l");
let fills = [],
  tops = [];

const MAX_F = 2,
  MAX_T = 3;

const names = {
  ccs: "Chocolate Chips",
  bb: "Blueberries",
  bs: "Banana Slices",
  pb: "Peanut Butter",
  cc: "Cream Cheese",
  dd: "Dulce de Leche",
  wc: "Whipped Cream",
  cs: "Chocolate Syrup",
  ms: "Maple Syrup",
  ps: "Powdered Sugar",
  st: "Strawberries",
  sp: "Sprinkles",
};

const imgs = {
  ccs: "https://rukminim2.flixcart.com/image/850/1000/kcgk1ow0/baking-ingredient/v/u/g/750-dark-chocolate-chips-choco-chipps-choco-chips-pramix-original-imaftk7yvufzhndb.jpeg?q=90&crop=false",
  bb: "https://zamaorganics.com/cdn/shop/files/Untitleddesign_10_5c05d76a-d244-405b-8702-6fe274f2eb1f_11zon.png?v=1701850639&width=1080",
  bs: "https://www.allrecipes.com/thmb/lc7nSL9L5zMHXz9t6PMAVm9biNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-new-banana-adobe-ar-2x1-917fdde58d194b529b41042ebff1c031.jpg",
  pb: "https://m.media-amazon.com/images/I/71Oo1hV4GsL._AC_UF1000,1000_QL80_.jpg",
  cc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXrG9DiS3RAYOl7fM-Z-bO77WotW98JVlnw&s",
  dd: "https://www.nestleprofessional.in/sites/default/files/2022-07/Dulce-De-Leche-420x330.webp",
  wc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgmrHxs4IK_-0vUrGnsSOp6eiShHjV7rx7Q&s",
  cs: "https://www.allrecipes.com/thmb/lgFmH2OfQhRZW2eM04pZbCUjCbk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-210084-homemade-chocolate-syrup-DDMFS-2x1-hero-e08eb67db6784ee4a8210ae2bf0d5dff.jpg",
  ms: "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/maple-syrup44-d7dd3a0.jpg",
  ps: "https://cdn.loveandlemons.com/wp-content/uploads/2021/02/what-is-powdered-sugar.jpg",
  st: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAm5cXmmHcKfjP_P4L3zsl5kiG3ujMqQHrPg&s",
  sp: "https://m.media-amazon.com/images/I/51TduV9uCRL._UF1000,1000_QL80_.jpg",
};
function prev() {
  list.innerHTML = "";
  [...fills, ...tops].forEach((id) => {
    const box = document.createElement("div");
    box.style =
      "margin:5px;display:flex;flex-direction:column;align-items:center;border:2px solid #ddd;border-radius:10px;padding:5px;width:100px;height:100px;";
    const img = document.createElement("img");
    img.src = imgs[id];
    img.style = "width:90px;height:90px;object-fit:cover;";
    const txt = document.createElement("span");
    txt.textContent = names[id] || id;
    box.append(img, txt);
    list.appendChild(box);
  });
}

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
    msg(`Max ${max} ${type}s`, "warning");
  }

  prev();
  out.style.display = "none";
}

function build() {
  stack.querySelectorAll("img").forEach((i) => i.remove());

  const img = document.createElement("img");
  img.src =
    "https://t4.ftcdn.net/jpg/01/89/78/15/360_F_189781543_EpHDnqryinw4fBlU1L3L0YgLdYUxedfi.jpg";
  img.className = "final";
  img.style = "z-index:4;animation:popIn 0.6s ease";
  stack.appendChild(img);

  ul.innerHTML = "<li>Waffle Base</li>";
  if (fills.length) {
    ul.innerHTML +=
      `<li><strong>Fillings:</strong></li>` +
      fills.map((i) => `<li>- ${names[i]}</li>`).join("");
  }
  if (tops.length) {
    ul.innerHTML +=
      `<li><strong>Toppings:</strong></li>` +
      tops.map((i) => `<li>- ${names[i]}</li>`).join("");
  }

  const sfx = document.getElementById("sfx");
  if (sfx) {
    sfx.pause();
    sfx.currentTime = 0;
    sfx.play().catch(() => console.warn("Autoplay blocked"));
  }

  out.style.display = "block";
  out.scrollIntoView({ behavior: "smooth" });
  list.innerHTML = "";

  setTimeout(() => msg("Your waffle is ready! 🎉", "success"), 300);
  setTimeout(() => msg("Try making it in real life too! 😋", "info"), 2500);
}

document
  .querySelectorAll(".i")
  .forEach((el) => el.addEventListener("click", handleClick));
btn.addEventListener("click", build);
prev();
out.style.display = "none";
