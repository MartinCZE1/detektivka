const backgroundMusic = document.getElementById("backgroundMusic");
const clickAudio = document.getElementById("clickAudio");
const ztlumitMuziku = document.getElementById("ztlumitMuziku");
const zapnoutMuziku = document.getElementById("zapnoutMuziku");

const vstup = document.getElementById("vstup");
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
const zavritmuzvhospode2info = document.getElementById(
  "zavritmuzvhospode2info"
);
const muzvhospode2 = document.getElementById("muzvhospode2");

const backbyt = document.getElementById("backbyt");

//Konec proměnných

ztlumitMuziku.onclick = () => {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  ztlumitMuziku.style.display = "none";
  zapnoutMuziku.style.display = "block";
};

zapnoutMuziku.onclick = () => {
  backgroundMusic.play();
  zapnoutMuziku.style.display = "none";
  ztlumitMuziku.style.display = "block";
};

//Konec muziky

jmenobtn.onclick = () => {
  const jmenoValue = jmeno.value;
  vstuptext.innerText =
    "Ahoj detektive " +
    `${jmeno.value}` +
    ", dnes budeš mít za úkol vyřesit vraždu majitele autoservisu. Při tvém vyšetřování narazíš na pár zvláštních lidí, okolností a předmětů a bude jen na tobě zjistit, kdo je vrah a zatknout toho pravého. Hodně štěstí.";
  vstuptext.style.display = "block";
  hrat.style.display = "block";
  audioClick.play();
};

hrat.onclick = () => {
  cross.style.display = "block";
  vstup.style.display = "none";
  audioClick.play();
};

route1.onclick = () => {
  servis.style.backgroundImage = "url(./res/img/servis.png)";
  backservis.style.display = "block";
  cross.style.display = "none";
  servis.style.display = "block";
  hospoda.style.display = "none";
  audioClick.play();
};

route2.onclick = () => {
  hospoda.style.backgroundImage = "url(./res/img/hospoda.png)";
  hospoda.style.display = "block";
  cross.style.display = "none";
  backhospoda.style.display = "block";
  doba.style.display = "block";
  muzvhospode.style.display = "block";
  audioClick.play();
  muzvhospode2.style.display = "block";
};

route3.onclick = () => {
  cross.style.display = "none";
  byt.style.display = "block";
  backbyt.style.display = "block";
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
  audioClick.play();
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
  audioClick.play();
  muzvhospode2.style.display = "none";
};

backbyt.onclick = () => {
  byt.style.display = "none";
  cross.style.display = "block";
  audioClick.play();
};

//Konec zpátečních tlačítek

rakev.onclick = () => {
  dead.style.display = "block";
  audioClick.play();
};

zavritrakev.onclick = () => {
  dead.style.display = "none";
  audioClick.play();
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
  audioClick.play();
};

muzvhospode.onclick = () => {
  muzvhospodeinfo.style.display = "block";
  audioClick.play();
};

zavritmuzvhospodeinfo.onclick = () => {
  muzvhospodeinfo.style.display = "none";
  audioClick.play();
};

zavritmuzvhospode2info.onclick = () => {
  muzvhospode2info.style.display = "none";
  audioClick.play();
};

muzvhospode2.onclick = () => {
  muzvhospode2info.style.display = "block";
  audioClick.play();
};

//Konec hospody
