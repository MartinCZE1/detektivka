const route1 = document.getElementById("route1");
const route2 = document.getElementById("route2");
const route3 = document.getElementById("route3");

const back = document.getElementById("back");

route1.onclick = () => {
  servis.style.backgroundImage = "url(./res/img/servis.png)";
  route1.style.display = "none";
  route2.style.display = "none";
  route3.style.display = "none";
  back.style.display = "block";
  cross.style.display = "none";
  servis.style.display = "block";
};

back.onclick = () => {
  cross.style.backgroundImage = "url(./res/img/krizovatka.png)";
  route1.style.display = "block";
  route2.style.display = "block";
  route3.style.display = "block";
  back.style.display = "none";
  cross.style.display = "block";
  servis.style.display = "none";
};
