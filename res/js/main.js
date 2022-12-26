const backgroundMusic = document.getElementById("backgroundMusic");
const clickAudio = document.getElementById("clickAudio");
const ztlumitMuziku = document.getElementById("ztlumitMuziku");
const zapnoutMuziku = document.getElementById("zapnoutMuziku");

const hrat = document.getElementById("hrat");

const route1 = document.getElementById("route1");
const route2 = document.getElementById("route2");
const route3 = document.getElementById("route3");
const route4 = document.getElementById("route4");

const backservis = document.getElementById("backservis");
const backhospoda = document.getElementById("backhospoda");
const backbyt = document.getElementById("backbyt");
const backrekognice = document.getElementById("backrekognice");

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
const obalka = document.getElementById("obalka");
const pokutaZavrit = document.getElementById("pokutaZavrit");

const rekognice1btn = document.getElementById("rekognice1btn");
const rekognice2btn = document.getElementById("rekognice2btn");
const rekognice3btn = document.getElementById("rekognice3btn");

const zavritrekognice1 = document.getElementById("zavritrekognice1");
const zavritrekognice2 = document.getElementById("zavritrekognice2");
const zavritrekognice3 = document.getElementById("zavritrekognice3");

const zatknout = document.getElementById("zatknout");

const fightpolicista = document.getElementById("fightpolicista");
const fightmuz = document.getElementById("fightmuz");

const policistahpcounter = document.getElementById("policistahpcounter");
const muzhpcounter = document.getElementById("muzhpcounter");

const novahra = document.getElementById("novahra");

let policistahp = 20;
let muzhp = 20;

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

route4.onclick = () => {
  cross.style.display = "none";
  rekognice.style.display = "block";
  backrekognice.style.display = "block";
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
  muzvhospode2info.style.display = "none";
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

backrekognice.onclick = () => {
  rekognice.style.display = "none";
  cross.style.display = "block";
  audioClick.play();
};

rekognice1btn.onclick = () => {
  rekognice.style.display = "none";
  rekognicebad1.style.display = "block";
  audioClick.play();
};

rekognice2btn.onclick = () => {
  rekognice.style.display = "none";
  rekognicebad2.style.display = "block";
  audioClick.play();
};

rekognice3btn.onclick = () => {
  rekognice.style.display = "none";
  rekogniceok.style.display = "block";
  audioClick.play();
};

zavritrekognice1.onclick = () => {
  rekognice.style.display = "block";
  rekognicebad1.style.display = "none";
  audioClick.play();
};
zavritrekognice2.onclick = () => {
  rekognice.style.display = "block";
  rekognicebad2.style.display = "none";
  audioClick.play();
};
zavritrekognice3.onclick = () => {
  rekognice.style.display = "block";
  rekogniceok.style.display = "none";
  audioClick.play();
};

const newGame = () => {
  novahraInterval = setInterval(() => {
    novahra.style.display = "block";
    if ((novahra.style.display = "block")) {
      clearInterval(novahraInterval);
    }
  }, 1000);
};

zatknout.onclick = () => {
  fight.style.display = "block";
  rekogniceok.style.display = "none";
  audioClick.play();
  fightInterval = setInterval(() => {
    policistahp--;
    policistahpcounter.innerHTML = `Počet životů: ${policistahp}`;
    if (policistahp <= 20) {
      policistahpcounter.style.backgroundColor = "lime";
    }
    if (policistahp <= 10) {
      policistahpcounter.style.backgroundColor = "orange";
    }
    if (policistahp <= 5) {
      policistahpcounter.style.backgroundColor = "red";
    }
    if (policistahp == 0) {
      clearInterval(fightInterval);
      policistadead.style.display = "block";
      fight.style.display = "none";
      newGame();
    }
  }, 1000);
};

fightmuz.onclick = () => {
  muzhp--;
  muzhpcounter.innerHTML = `Počet životů: ${muzhp}`;
  if (muzhp <= 20) {
    muzhpcounter.style.backgroundColor = "lime";
  }
  if (muzhp <= 10) {
    muzhpcounter.style.backgroundColor = "orange";
  }
  if (muzhp <= 5) {
    muzhpcounter.style.backgroundColor = "red";
  }
  if (muzhp == 0) {
    clearInterval(fightInterval);
    fight.style.display = "none";
    muzdead.style.display = "block";
    newGame();
  }
};

novahra.onclick = () => {
  window.location.reload();
};
