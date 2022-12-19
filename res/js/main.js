const backgroundMusic = document.getElementById("backgroundMusic");
const clickAudio = document.getElementById("clickAudio");
const ztlumitMuziku = document.getElementById("ztlumitMuziku");
const zapnoutMuziku = document.getElementById("zapnoutMuziku");

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

const muzvbyte = document.getElementById("muzvbyte");
const zavritmuzvbyteinfo = document.getElementById("zavritmuzvbyteinfo");
const backbyt = document.getElementById("backbyt");
const obalka = document.getElementById("obalka");
const pokutaZavrit = document.getElementById("pokutaZavrit");

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
  muzvbyte.style.display = "block";
  obalka.style.display = "block";
  audioClick.play();
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

backbyt.onclick = () => {
  byt.style.display = "none";
  cross.style.display = "block";
  muzvbyte.style.display = "none";
  obalka.style.display = "none";
  muzvbyteinfo.style.display = "none";
  audioClick.play();
};

muzvbyte.onclick = () => {
  muzvbyteinfo.style.display = "block";
  audioClick.play();
};

zavritmuzvbyteinfo.onclick = () => {
  muzvbyteinfo.style.display = "none";
  audioClick.play();
};

obalka.onclick = () => {
  pokuta.style.display = "block";
  byt.style.display = "none";
  muzvbyteinfo.style.display = "none";
  audioClick.play();
};

pokutaZavrit.onclick = () => {
  pokuta.style.display = "none";
  byt.style.display = "block";
  audioClick.play();
};
