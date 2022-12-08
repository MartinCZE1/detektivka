const route1 = document.getElementById("route1");
const route2 = document.getElementById("route2");
const route3 = document.getElementById("route3");

const backservis = document.getElementById("backservis");
const backhospoda = document.getElementById("backhospoda");

const rakev = document.getElementById("rakev");

const doba = document.getElementById("doba");

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
};

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
};

rakev.onclick = () => {
  dead.style.display = "block";
};

doba.onclick = () => {
  dobainfo.style.display = "block";
};
