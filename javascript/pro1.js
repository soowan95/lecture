let menu1, menu2, menu3, menu4;
let cont1, cont2, cont3, cont4;
let cont1_box1, cont1_box2, cont1_box3, cont1_box4, cont1_box5, cont1_big;
let cont2_box1, cont2_box2, cont2_box3, cont2_box4, cont2_box5, cont2_big;
let cont3_box1, cont3_box2, cont3_box3, cont3_box4, cont3_box5, cont3_big;
let cont4_box1, cont4_box2, cont4_box3, cont4_box4, cont4_box5, cont4_big;

window.onload = function() {
  /*let spMn, suMn, faMn, wiMn;
  spMn = document.getElementById("spMn");
  suMn = document.getElementById("suMn");
  faMn = document.getElementById("faMn");
  wiMn = document.getElementById("wiMn");

    spMn.addEventListener("click", function() {
      spMa.style.display = "block";
    })
    suMn.addEventListener("click", function() {
      suMa.style.display = "block";
    })
    faMn.addEventListener("click", function() {
      faMa.style.display = "block";
    })
    wiMn.addEventListener("click", function() {
      wiMa.style.display = "block";
    })*/

    //태그 불러오기 노가다
    menu1 = document.querySelector(".menu1");
    menu2 = document.querySelector(".menu2");
    menu3 = document.querySelector(".menu3");
    menu4 = document.querySelector(".menu4");
    cont1 = document.querySelector(".cont1");
    cont2 = document.querySelector(".cont2");
    cont3 = document.querySelector(".cont3");
    cont4 = document.querySelector(".cont4");
    cont1_box1 = document.querySelector(".cont1_box1");
    cont1_box2 = document.querySelector(".cont1_box2");
    cont1_box3 = document.querySelector(".cont1_box3");
    cont1_box4 = document.querySelector(".cont1_box4");
    cont1_box5 = document.querySelector(".cont1_box5");
    cont1_big = document.querySelector(".cont1_big");
    cont2_box1 = document.querySelector(".cont2_box1");
    cont2_box2 = document.querySelector(".cont2_box2");
    cont2_box3 = document.querySelector(".cont2_box3");
    cont2_box4 = document.querySelector(".cont2_box4");
    cont2_box5 = document.querySelector(".cont2_box5");
    cont2_big = document.querySelector(".cont2_big");
    cont3_box1 = document.querySelector(".cont3_box1");
    cont3_box2 = document.querySelector(".cont3_box2");
    cont3_box3 = document.querySelector(".cont3_box3");
    cont3_box4 = document.querySelector(".cont3_box4");
    cont3_box5 = document.querySelector(".cont3_box5");
    cont3_big = document.querySelector(".cont3_big");
    cont4_box1 = document.querySelector(".cont4_box1");
    cont4_box2 = document.querySelector(".cont4_box2");
    cont4_box3 = document.querySelector(".cont4_box3");
    cont4_box4 = document.querySelector(".cont4_box4");
    cont4_box5 = document.querySelector(".cont4_box5");
    cont4_big = document.querySelector(".cont4_big");
    //클릭시 화면 전환
    menu1.addEventListener("click", function() {
      menu1.style.backgroundColor = "skyblue";
      menu2.style.backgroundColor = "white";
      menu3.style.backgroundColor = "white";
      menu4.style.backgroundColor = "white";
      cont1.style.display = "block";
      cont2.style.display = "none";
      cont3.style.display = "none";
      cont4.style.display = "none";
    })
    menu2.addEventListener("click", function() {
      menu1.style.backgroundColor = "white";
      menu2.style.backgroundColor = "skyblue";
      menu3.style.backgroundColor = "white";
      menu4.style.backgroundColor = "white";
      cont1.style.display = "none";
      cont2.style.display = "block";
      cont3.style.display = "none";
      cont4.style.display = "none";
    })
    menu3.addEventListener("click", function() {
      menu1.style.backgroundColor = "white";
      menu2.style.backgroundColor = "white";
      menu3.style.backgroundColor = "skyblue";
      menu4.style.backgroundColor = "white";
      cont1.style.display = "none";
      cont2.style.display = "none";
      cont3.style.display = "block";
      cont4.style.display = "none";
    })
    menu4.addEventListener("click", function() {
      menu1.style.backgroundColor = "white";
      menu2.style.backgroundColor = "white";
      menu3.style.backgroundColor = "white";
      menu4.style.backgroundColor = "skyblue";
      cont1.style.display = "none";
      cont2.style.display = "none";
      cont3.style.display = "none";
      cont4.style.display = "block";
    })
    //클릭시 그림 변환
    cont1_box1.addEventListener("click", function() {
      cont1_big.src = "img/sp1.jpg";
    })
    cont1_box2.addEventListener("click", function() {
      cont1_big.src = "img/sp2.jpg";
    })
    cont1_box3.addEventListener("click", function() {
      cont1_big.src = "img/sp3.jpg";
    })
    cont1_box4.addEventListener("click", function() {
      cont1_big.src = "img/sp4.jpg";
    })
    cont1_box5.addEventListener("click", function() {
      cont1_big.src = "img/sp5.jpg";
    })
    cont2_box1.addEventListener("click", function() {
      cont2_big.src = "img/su1.jpg";
    })
    cont2_box2.addEventListener("click", function() {
      cont2_big.src = "img/su2.jpg";
    })
    cont2_box3.addEventListener("click", function() {
      cont2_big.src = "img/su3.jpg";
    })
    cont2_box4.addEventListener("click", function() {
      cont2_big.src = "img/su4.jpg";
    })
    cont2_box5.addEventListener("click", function() {
      cont2_big.src = "img/su5.jpg";
    })
    cont3_box1.addEventListener("click", function() {
      cont3_big.src = "img/img1.jpg";
    })
    cont3_box2.addEventListener("click", function() {
      cont3_big.src = "img/img2.jpg";
    })
    cont3_box3.addEventListener("click", function() {
      cont3_big.src = "img/img3.jpg";
    })
    cont3_box4.addEventListener("click", function() {
      cont3_big.src = "img/img4.jpg";
    })
    cont3_box5.addEventListener("click", function() {
      cont3_big.src = "img/img5.jpg";
    })
    cont4_box1.addEventListener("click", function() {
      cont4_big.src = "img/img1.jpg";
    })
    cont4_box2.addEventListener("click", function() {
      cont4_big.src = "img/img2.jpg";
    })
    cont4_box3.addEventListener("click", function() {
      cont4_big.src = "img/img3.jpg";
    })
    cont4_box4.addEventListener("click", function() {
      cont4_big.src = "img/img4.jpg";
    })
    cont4_box5.addEventListener("click", function() {
      cont4_big.src = "img/img5.jpg";
    })
}
var obj = {name : "김수완", age : 0};
for (var i of obj) {
  document.write(i + "<br>");
}