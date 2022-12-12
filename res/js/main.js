const vstup = document.getElementById("vstup")
const jmeno = document.getElementById("jmeno");
const jmenobtn = document.getElementById("jmenobtn");
const vstuptext = document.getElementById("vstuptext");
const hrat = document.getElementById("hrat");

const route1 = document.getElementById("route1");
const route2 = document.getElementById("route2");
const route3 = document.getElementById("route3");

const backservis = document.getElementById("backservis");
const backhospoda = document.getElementById("backhospoda");

const rakev = document.getElementById("rakev");
const zavritrakev = document.getElementById("zavritrakev");

const doba = document.getElementById("doba");
const muzvhospode = document.getElementById("muzvhospode");
const zavritmuzvhospodeinfo = document.getElementById("zavritmuzvhospodeinfo");

//Konec proměnných

jmenobtn.onclick = () => {
  const jmenoValue = jmeno.value;
  vstuptext.innerText =
    "Ahoj detektive " +
    `${jmeno.value}` +
    ", dnes budeš mít za úkol vyřesit vraždu majitele autoservisu. Při tvém vyšetřování narazíš na pár zvláštních lidí, okolností a předmětů a bude jen na tobě zjistit, kdo je vrah a zatknout toho pravého. Hodně štěstí.";
  vstuptext.style.display = "block";
  hrat.style.display = "block";
};

hrat.onclick = () => {
  cross.style.display = "block"
  vstup.style.display = "none"
}

route1.onclick = () => {
  servis.style.backgroundImage = "url(./res/img/servis.png)";
  backservis.style.display = "block";
  cross.style.display = "none";
  servis.style.display = "block";
  hospoda.style.display = "none";
};

route2.onclick = () => {
  hospoda.style.backgroundImage = "url(./res/img/hospoda.png)";
  hospoda.style.display = "block";
  cross.style.display = "none";
  backhospoda.style.display = "block";
  doba.style.display = "block";
  muzvhospode.style.display = "block";
};

//Konec křižovatky

backservis.onclick = () => {
  cross.style.backgroundImage = "url(./res/img/krizovatka.png)";
  route1.style.display = "block";
  route2.style.display = "block";
  route3.style.display = "block";
  backservis.style.display = "none";
  cross.style.display = "block";
  servis.style.display = "none";
};

backhospoda.onclick = () => {
  cross.style.backgroundImage = "url(./res/img/krizovatka.png)";
  route1.style.display = "block";
  route2.style.display = "block";
  route3.style.display = "block";
  backhospoda.style.display = "none";
  cross.style.display = "block";
  servis.style.display = "none";
  hospoda.style.display = "none";
  doba.style.display = "none";
  dobainfo.style.display = "none";
  muzvhospode.style.display = "none";
  muzvhospodeinfo.style.display = "none";
};

//Konec zpátečních tlačítek

rakev.onclick = () => {
  dead.style.display = "block";
};

zavritrakev.onclick = () => {
  dead.style.display = "none";
};

//Konec Oběti

doba.onclick = () => {
  dobainfo.style.display = "block";
  const dobainterval = setInterval(() => {
    dobainfo.style.display = "none";
    if ((dobainfo.style.display = "none")) {
      clearInterval(dobainterval);
    }
  }, 1500);
};

muzvhospode.onclick = () => {
  muzvhospodeinfo.style.display = "block";
};

zavritmuzvhospodeinfo.onclick = () => {
  muzvhospodeinfo.style.display = "none";
};

//Konec hospody
