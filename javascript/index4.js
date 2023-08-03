window.onload=function() {
  let ok_btn = document.getElementById("ok_btn");
  ok_btn.onclick = function() {
    let kor, eng, mat, total, average, hap;
    kor = document.getElementById("kor");
    eng = document.getElementById("eng");
    mat = document.getElementById("mat");
    total = document.getElementById("total");
    average = document.getElementById("average");

    hap = Number(kor.value) + Number(eng.value) + Number(mat.value);
    avg = hap/3
    
    total.innerHTML = "총합 : " + hap;
    average.innerHTML = "평균 : " + avg.toFixed(2);
  }
  let kor, eng, mat;
    kor = document.getElementById("kor");
    eng = document.getElementById("eng");
    mat = document.getElementById("mat");
    kor.onclick = function() {
      kor.value = "";
    }
    eng.onclick = function() {
      eng.value = "";
    }
    mat.onclick = function() {
      mat.value = "";
    }
// ----------------------------------------------------------------
  let count, duha, bba, ord, cen , priClo, priOk;
    count = document.getElementById("count");
    duha = document.getElementById("duha");
    bba = document.getElementById("bba");
    ord = document.getElementById("ord");
    cen = document.getElementById("cen");
    priClo = document.getElementById("priClo");
    priOk = document.getElementById("priOk");
    count.onclick = function() {
      count.value = "";
    }
    duha.onclick = function () {
      count.value = Number(count.value) + 1;
    }
    bba.onclick = function () {
      count.value = Number(count.value) - 1;
    }
    ord.onclick = function() {
      price.style.display = "block";
      let totalPrice = Number(count.value) * 500;
      priInfo.innerHTML = totalPrice + "원 입니다.";
    }
    cen.onclick = function() {
      count.value = 0;
    }
    priClo.onclick = function() {
      price.style.display = "none";
      priOk.style.background = "white";
      priClo.style.display = "none";
    }
    priOk.onclick = function() {
      priClo.style.display = "block";
      priOk.style.background = "black";
    }
// -------------------------------------------------------
    let add, result, count1=0, pic;
    pic = document.getElementById("pic");
    add = document.querySelector(".add");
    sub = document.querySelector(".sub");
    result = document.querySelector(".result");
    /*add.onclick = function() {
      count1++;
      console.log(count1);
      result.innerHTML = count1;
    }*/
    add.addEventListener("click", function(){
      if (count1 <= 10) {
        count1++;
      }
      else {;}
      result.innerHTML = count1;
      pic.src = "img/img" + count1 + ".jpg";
    })
    function min(){
      if (count1 >1) {
        count1--;
      }
      result.innerHTML = count1;
      pic.src = "img/img" + count1 + ".jpg";
    }
    sub.addEventListener("click", min );
}
function ok() {
  let kor = 50;
  let eng = 60, mat = 70;
  let sum, avg = 0;
  sum = kor + eng + mat;
  avg = sum/3;
  // document.write("총점은" + sum + "점<br><br>");
  // document.write("평균은" + avg + "점" + "\( 총점 \/ 3 \)");
  a.innerHTML = sum;
  d.innerHTML = avg;
}
function cel() {
  celbr.innerHTML = "환영합니다.";
  celbr.style.color = "black";
  celbr.style.fontSize = "3rem";
}
function clo() {
  layout.style.display = "none";
  celbr.style.color = "red";
  celbr.style.fontSize = "2rem";
  celbr.innerHTML = "가입완료를 클릭하세요.";
}
function show() {
  layout.style.display = "block";
}