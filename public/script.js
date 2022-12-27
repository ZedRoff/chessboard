let elem = document.getElementById("chessboard");
let arr = [];
let arr_correspondance = [];
for (let i = 0; i < 8; i++) {
  arr.push(new Array(8).fill(""));
  arr_correspondance.push(new Array(8).fill(""));
}

let RW_SVG = `<svg fill="white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 204.2V48c0-8.8 7.2-16 16-16H72c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h56c8.8 0 16 7.2 16 16V204.2c0 12.1-6.8 23.2-17.7 28.6l-28.6 14.3c-10.8 5.4-17.7 16.5-17.5 28.6C322.2 360.7 336 416 336 416H48s13.8-55.3 15.8-140.2c.3-12.1-6.6-23.2-17.5-28.6L17.7 232.8C6.8 227.4 0 216.3 0 204.2zM176 320h32c8.8 0 16-7.2 16-16V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`;
let NW_SVG = `<svg fill="white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 391.6V416H352V224c0-106-86-192-192-192H12.9C5.8 32 0 37.8 0 44.9c0 2 .5 4 1.4 5.8L16 80 9.4 86.6c-6 6-9.4 14.1-9.4 22.6V242.3c0 13.1 8 24.9 20.1 29.7l46.5 18.6c8.5 3.4 18 3 26.2-1.1l6.6-3.3c8-4 14-11.2 16.5-19.8l8.3-28.9c2.5-8.6 8.4-15.8 16.5-19.8L160 208v40.4c0 24.2-13.7 46.4-35.4 57.2L67.4 334.3C45.7 345.2 32 367.3 32 391.6zM72 148c0 11-9 20-20 20s-20-9-20-20s9-20 20-20s20 9 20 20zM352 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/></svg>`;
let FW_SVG = `<svg fill="white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V416H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>`;
let QW_SVG = `<svg fill="white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M312 56c0-30.9-25.1-56-56-56s-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56zM64 480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM34 169.4L9.2 185.8C3.5 189.7 0 196.2 0 203.1c0 3.2 .7 6.4 2.2 9.3L104 416H408L509.8 212.4c1.4-2.9 2.2-6.1 2.2-9.3c0-6.9-3.5-13.4-9.2-17.3L478 169.4c-8.2-5.4-19-4.4-26 2.6c-12.9 12.9-30.9 21.9-48 15.5c-17.9-6.7-28.1-20.1-32.8-35.8C367.5 139 357.3 128 344 128H328c-13.3 0-23.9 11.2-29.6 23.2C292.6 163.4 280.6 176 256 176s-36.6-12.6-42.4-24.8c-5.7-12-16.3-23.2-29.6-23.2H168c-13.3 0-23.5 11-27.3 23.7c-4.7 15.6-14.9 29.1-32.8 35.8c-17 6.4-35.1-2.7-48-15.5c-6.9-6.9-17.8-8-25.9-2.6z"/></svg>`;
let KW_SVG = `<svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M400 448H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm16-288H256v-48h40a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-40V8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v40h-40a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h40v48H32a32 32 0 0 0-30.52 41.54L74.56 416h298.88l73.08-214.46A32 32 0 0 0 416 160z"/></svg>`;
let PW_SVG = `<svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M105.1 224H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v5.49c0 44-4.14 86.6-24 122.51h176c-19.89-35.91-24-78.51-24-122.51V288h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-25.1c29.39-18.38 49.1-50.78 49.1-88a104 104 0 0 0-208 0c0 37.22 19.71 69.62 49.1 88zM304 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>`;

let RB_SVG = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 204.2V48c0-8.8 7.2-16 16-16H72c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h56c8.8 0 16 7.2 16 16V204.2c0 12.1-6.8 23.2-17.7 28.6l-28.6 14.3c-10.8 5.4-17.7 16.5-17.5 28.6C322.2 360.7 336 416 336 416H48s13.8-55.3 15.8-140.2c.3-12.1-6.6-23.2-17.5-28.6L17.7 232.8C6.8 227.4 0 216.3 0 204.2zM176 320h32c8.8 0 16-7.2 16-16V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`;
let NB_SVG = `<svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 391.6V416H352V224c0-106-86-192-192-192H12.9C5.8 32 0 37.8 0 44.9c0 2 .5 4 1.4 5.8L16 80 9.4 86.6c-6 6-9.4 14.1-9.4 22.6V242.3c0 13.1 8 24.9 20.1 29.7l46.5 18.6c8.5 3.4 18 3 26.2-1.1l6.6-3.3c8-4 14-11.2 16.5-19.8l8.3-28.9c2.5-8.6 8.4-15.8 16.5-19.8L160 208v40.4c0 24.2-13.7 46.4-35.4 57.2L67.4 334.3C45.7 345.2 32 367.3 32 391.6zM72 148c0 11-9 20-20 20s-20-9-20-20s9-20 20-20s20 9 20 20zM352 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/></svg>`;
let FB_SVG = `<svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V416H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>`;
let QB_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M312 56c0-30.9-25.1-56-56-56s-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56zM64 480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM34 169.4L9.2 185.8C3.5 189.7 0 196.2 0 203.1c0 3.2 .7 6.4 2.2 9.3L104 416H408L509.8 212.4c1.4-2.9 2.2-6.1 2.2-9.3c0-6.9-3.5-13.4-9.2-17.3L478 169.4c-8.2-5.4-19-4.4-26 2.6c-12.9 12.9-30.9 21.9-48 15.5c-17.9-6.7-28.1-20.1-32.8-35.8C367.5 139 357.3 128 344 128H328c-13.3 0-23.9 11.2-29.6 23.2C292.6 163.4 280.6 176 256 176s-36.6-12.6-42.4-24.8c-5.7-12-16.3-23.2-29.6-23.2H168c-13.3 0-23.5 11-27.3 23.7c-4.7 15.6-14.9 29.1-32.8 35.8c-17 6.4-35.1-2.7-48-15.5c-6.9-6.9-17.8-8-25.9-2.6z"/></svg>`;
let KB_SVG = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M400 448H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm16-288H256v-48h40a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-40V8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v40h-40a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h40v48H32a32 32 0 0 0-30.52 41.54L74.56 416h298.88l73.08-214.46A32 32 0 0 0 416 160z"/></svg>`;
let PB_SVG = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M105.1 224H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v5.49c0 44-4.14 86.6-24 122.51h176c-19.89-35.91-24-78.51-24-122.51V288h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-25.1c29.39-18.38 49.1-50.78 49.1-88a104 104 0 0 0-208 0c0 37.22 19.71 69.62 49.1 88zM304 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>`;

let correspondance = [
  `RB | ${RB_SVG}`,
  `NB | ${NB_SVG}`,
  `FB | ${FB_SVG}`,
  `QB | ${QB_SVG}`,
  `KB | ${KB_SVG}`,
  `PB | ${PB_SVG}`,
];
let correspondance2 = [
  `RW | ${RW_SVG}`,
  `NW | ${NW_SVG}`,
  `FW | ${FW_SVG}`,
  `QW | ${QW_SVG}`,
  `KW | ${KW_SVG}`,
  `PW | ${PW_SVG}`,
];

let table_svg = {
  RB: RB_SVG,
  NB: NB_SVG,
  FB: FB_SVG,
  KB: KB_SVG,
  QB: QB_SVG,
  PB: PB_SVG,
  RW: RW_SVG,
  NW: NW_SVG,
  FW: FW_SVG,
  QW: QW_SVG,
  KW: KW_SVG,
  PW: PW_SVG,
  "": "",
};
let socket = new WebSocket("wss://echequier.glitch.me/");
let uls = document.querySelectorAll("ul");
socket.onmessage = (ev) => {
  let changed = JSON.parse(ev.data);
  affichage(changed);
};

const affichage = (tab) => {
  uls = document.querySelectorAll("ul");
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {
      arr_correspondance[i][j] = tab[i][j];

      uls[i].children[j].innerHTML = table_svg[tab[i][j]];
    }
  }
};

for (let i = 0; i < 8; i++) {
  arr[1][i] = correspondance[correspondance.length - 1].split(" | ")[1];
  arr_correspondance[1][i] =
    correspondance[correspondance.length - 1].split(" | ")[0];
  arr[6][i] = correspondance2[correspondance2.length - 1].split(" | ")[1];
  arr_correspondance[6][i] =
    correspondance2[correspondance2.length - 1].split(" | ")[0];
}

for (let i = 0; i < 4; i++) {
  let splitter1 = correspondance[i].split(" | ");
  let splitter2 = correspondance2[i].split(" | ");
  let type1 = splitter1[0];
  let type2 = splitter2[0];
  let piece1 = splitter1[1];
  let piece2 = splitter2[1];
  arr[7][i] = piece2;
  arr_correspondance[7][i] = type2;
  arr[0][i] = piece1;
  arr_correspondance[0][i] = type1;

  arr[7][7 - i] = piece2;
  arr_correspondance[7][7 - i] = type2;
  arr[0][7 - i] = piece1;
  arr_correspondance[0][7 - i] = type1;
}
arr[0][4] = correspondance[4].split(" | ")[1];
arr[7][4] = correspondance2[4].split(" | ")[1];

arr_correspondance[0][4] = "KB";
arr_correspondance[7][4] = "KW";

for (let i = 0; i < 8; i++) {
  let new_ul = document.createElement("ul");
  for (let j = 0; j < 8; j++) {
    let new_li = document.createElement("li");
    if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
      new_li.style.background = "#ffadad";
    } else {
      new_li.style.background = "brown";
    }
    new_li.setAttribute("i", i);
    new_li.setAttribute("j", j);
    new_li.setAttribute("type", arr_correspondance[i][j]);
    new_li.innerHTML = arr[i][j];
    new_ul.appendChild(new_li);
  }
  elem.appendChild(new_ul);
}
let elems = document.querySelectorAll("li");

let activated = false;
let activated_piece = "";
let moved = false;
let turn = 0;
let affichage_turn = document.getElementById("turn");
let rotated = 1;
elems.forEach((elem) => {
  elem.addEventListener("click", (ev) => {
  if (elem.style.background == "grey" && activated) {
      let el_x = elem.getAttribute("i");
      let el_y = elem.getAttribute("j");

      let p = activated_piece.split(" | ");
      let p_t = p[0];
      let p_x = parseInt(p[1]);
      let p_y = parseInt(p[2]);

      if (uls[el_x].children[el_y].innerHTML.length != 0) {
        if (
          (uls[el_x].children[el_y].getAttribute("type").includes("B") &&
            p_t.includes("B")) ||
          (uls[el_x].children[el_y].getAttribute("type").includes("W") &&
            p_t.includes("W"))
        )
          return;
      }

    

      uls[el_x].children[el_y].innerHTML = table_svg[p_t];
      uls[p_x].children[p_y].textContent = "";
      uls[el_x].children[el_y].setAttribute("i", el_x);
      uls[el_x].children[el_y].setAttribute("j", el_y);
      arr_correspondance[p_x][p_y] = "";

      arr_correspondance[el_x][el_y] = p_t;
      uls[el_x].children[el_y].setAttribute(
        "type",
        arr_correspondance[el_x][el_y]
      );

      activated_piece = "";
      activated = false;
      moved = true;
      reset();
      console.log("requête lancée");

      socket.send(JSON.stringify(arr_correspondance));

      if ((el_x == 7 && p_t == "PB") || (el_x == 0 && p_t == "PW")) {
        alert("PROMOTION");
      }
    }
    ev.preventDefault();
    let x = parseInt(elem.getAttribute("i"));
    let y = parseInt(elem.getAttribute("j"));

    let type = arr_correspondance[x][y];

    if (moved == true) {
      moved = false;
      return;
    }
    activated = true;
    activated_piece = `${type} | ${x} | ${y}`;
    reset();
    if (type == "PW") {
      if (x == 6) {
        uls[x - 1].children[y].style.background = "grey";
        uls[x - 2].children[y].style.background = "grey";

        if (uls[x - 1].children[y].innerHTML.length == 0) {
          uls[x - 1].children[y].style.background = "grey";
        }

        if (!(x - 1 < 0 || y - 1 < 0 || y - 1 > 7 || x - 1 > 7)) {
          if (uls[x - 1].children[y - 1].innerHTML.length != 0) {
            uls[x - 1].children[y - 1].style.background = "grey";
          }
        }

        if (!(x - 1 < 0 || y + 1 < 0 || y + 1 > 7 || x - 1 > 7)) {
          if (uls[x - 1].children[y + 1].innerHTML.length != 0) {
            uls[x - 1].children[y + 1].style.background = "grey";
          }
        }
      } else {
        if (x - 1 < 0) return;
        if (uls[x - 1].children[y].innerHTML.length == 0) {
          uls[x - 1].children[y].style.background = "grey";
        }
        if (!(x - 1 < 0 || y - 1 < 0 || y - 1 > 7 || x - 1 > 7)) {
          if (uls[x - 1].children[y - 1].innerHTML.length != 0) {
            uls[x - 1].children[y - 1].style.background = "grey";
          }
        }
        if (!(x - 1 < 0 || y + 1 < 0 || y + 1 > 7 || x - 1 > 7)) {
          if (uls[x - 1].children[y + 1].innerHTML.length != 0) {
            uls[x - 1].children[y + 1].style.background = "grey";
          }
        }
      }
    } else if (type == "PB") {
      if (x == 1) {
        uls[x + 1].children[y].style.background = "grey";
        uls[x + 2].children[y].style.background = "grey";
        if (!(x + 1 > 7 || x + 1 < 0 || y + 1 < 0 || y + 1 > 7)) {
          if (uls[x + 1].children[y + 1].innerHTML.length != 0) {
            uls[x + 1].children[y + 1].style.background = "grey";
          }
        }
        if (!(x + 1 > 7 || x + 1 < 0 || y - 1 < 0 || y - 1 > 7)) {
          if (uls[x + 1].children[y - 1].innerHTML.length != 0) {
            uls[x + 1].children[y - 1].style.background = "grey";
          }
        }
      } else {
        if (x + 1 > 7) return;

        if (uls[x + 1].children[y].innerHTML.length == 0) {
          uls[x + 1].children[y].style.background = "grey";
        }
        if (!(x + 1 > 7 || x + 1 < 0 || y + 1 < 0 || y + 1 > 7)) {
          if (uls[x + 1].children[y + 1].innerHTML.length != 0) {
            uls[x + 1].children[y + 1].style.background = "grey";
          }
        }
        if (!(x + 1 > 7 || x + 1 < 0 || y - 1 < 0 || y - 1 > 7)) {
          if (uls[x + 1].children[y - 1].innerHTML.length != 0) {
            uls[x + 1].children[y - 1].style.background = "grey";
          }
        }
      }
    } else if (type == "NB" || type == "NW") {
      if (!(x - 2 < 0 || x - 2 > 7 || y + 1 > 7 || y + 1 < 0)) {
        uls[x - 2].children[y + 1].style.background = "grey";
      }

      if (!(x - 2 < 0 || y - 1 > 7 || y - 1 < 0 || x - 2 > 7)) {
        uls[x - 2].children[y - 1].style.background = "grey";

        if (!(x + 2 > 7 || y + 1 > 7 || y + 1 < 0 || x + 2 < 0)) {
          uls[x + 2].children[y + 1].style.background = "grey";
        }

        if (!(x + 2 > 7 || y - 1 > 7 || y - 1 < 0 || x + 2 < 0)) {
          uls[x + 2].children[y - 1].style.background = "grey";
        }
        if (!(x - 1 < 0 || x - 1 > 7 || y - 2 < 0 || y - 2 > 7)) {
          uls[x - 1].children[y - 2].style.background = "grey";
        }
        if (!(x - 1 < 0 || x - 1 > 7 || y + 2 > 7 || y + 2 < 0)) {
          uls[x - 1].children[y + 2].style.background = "grey";
        }
        if (!(x + 1 < 0 || x + 1 > 7 || y - 2 < 0 || y - 2 > 7)) {
          uls[x + 1].children[y - 2].style.background = "grey";
        }
        if (!(x + 1 < 0 || x + 1 > 7 || y + 2 > 7 || y + 2 < 0)) {
          uls[x + 1].children[y + 2].style.background = "grey";
        }
      }
    } else if (type == "KW" || type == "KB") {
      if (!(x + 1 < 0 || x + 1 > 7 || y + 1 < 0 || y + 1 > 7)) {
        uls[x + 1].children[y + 1].style.background = "grey";
      }
      if (!(x + 1 < 0 || x + 1 > 7 || y - 1 < 0 || y - 1 > 7)) {
        uls[x + 1].children[y - 1].style.background = "grey";
      }
      if (!(x - 1 < 0 || x - 1 > 7 || y - 1 < 0 || y - 1 > 7)) {
        uls[x - 1].children[y - 1].style.background = "grey";
      }
      if (!(x - 1 < 0 || x - 1 > 7 || y + 1 < 0 || y + 1 > 7)) {
        uls[x - 1].children[y + 1].style.background = "grey";
      }
      if (!(x < 0 || x > 7 || y - 1 < 0 || y - 1 > 7)) {
        uls[x].children[y - 1].style.background = "grey";
      }
      if (!(x < 0 || x > 7 || y + 1 < 0 || y + 1 > 7)) {
        uls[x].children[y + 1].style.background = "grey";
      }
      if (!(x - 1 < 0 || x - 1 > 7 || y < 0 || y > 7)) {
        uls[x - 1].children[y].style.background = "grey";
      }
      if (!(x + 1 < 0 || x + 1 > 7 || y < 0 || y > 7)) {
        uls[x + 1].children[y].style.background = "grey";
      }
    } else if (type == "FW" || type == "FB") {
      for (let i = 0; i < 8; i++) {
        if (!(x + i < 0 || x + i > 7 || y + i < 0 || y + i > 7)) {
          uls[x + i].children[y + i].style.background = "grey";
        }
        if (!(x + i < 0 || x + i > 7 || y - i < 0 || y - i > 7)) {
          uls[x + i].children[y - i].style.background = "grey";
        }
        if (!(x - i < 0 || x - i > 7 || y + i < 0 || y + i > 7)) {
          uls[x - i].children[y + i].style.background = "grey";
        }
        if (!(x - i < 0 || x - i > 7 || y - i < 0 || y - i > 7)) {
          uls[x - i].children[y - i].style.background = "grey";
        }
      }
    } else if (type == "RW" || type == "RB") {
      for (let i = 0; i < 8; i++) {
        if (!(x - i < 0 || x - i > 7 || y < 0 || y > 7)) {
          uls[x - i].children[y].style.background = "grey";
        }
        if (!(x < 0 || x > 7 || y + i < 0 || y + i > 7)) {
          uls[x].children[y + i].style.background = "grey";
        }
        if (!(x < 0 || x > 7 || y - i < 0 || y - i > 7)) {
          uls[x].children[y - i].style.background = "grey";
        }
        if (!(x + i < 0 || x + i > 7 || y < 0 || y > 7)) {
          uls[x + i].children[y].style.background = "grey";
        }
      }
    } else if (type == "QB" || type == "QW") {
      for (let i = 0; i < 8; i++) {
        if (!(x - i < 0 || x - i > 7 || y < 0 || y > 7)) {
          uls[x - i].children[y].style.background = "grey";
        }
        if (!(x < 0 || x > 7 || y + i < 0 || y + i > 7)) {
          uls[x].children[y + i].style.background = "grey";
        }
        if (!(x < 0 || x > 7 || y - i < 0 || y - i > 7)) {
          uls[x].children[y - i].style.background = "grey";
        }
        if (!(x + i < 0 || x + i > 7 || y < 0 || y > 7)) {
          uls[x + i].children[y].style.background = "grey";
        }
      }
      for (let i = 0; i < 8; i++) {
        if (!(x + i < 0 || x + i > 7 || y + i < 0 || y + i > 7)) {
          uls[x + i].children[y + i].style.background = "grey";
        }
        if (!(x + i < 0 || x + i > 7 || y - i < 0 || y - i > 7)) {
          uls[x + i].children[y - i].style.background = "grey";
        }
        if (!(x - i < 0 || x - i > 7 || y + i < 0 || y + i > 7)) {
          uls[x - i].children[y + i].style.background = "grey";
        }
        if (!(x - i < 0 || x - i > 7 || y - i < 0 || y - i > 7)) {
          uls[x - i].children[y - i].style.background = "grey";
        }
      }
    }
  });
});

const reset = () => {
  for (let i = 0; i < 8; i++) {
    let uls = document.querySelectorAll("ul");
    for (let j = 0; j < 8; j++) {
      if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
        uls[i].children[j].style.background = "#ffadad";
      } else {
        uls[i].children[j].style.background = "brown";
      }
    }
  }
};
