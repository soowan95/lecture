const dataA = ["China", "검정블라우스", "검정", "Small"];
const menuA = ["BEST ITEM", "NEW ARRIVAL", "OUTER", "TOP", "DRESS", "BOTTOM", "SET", "ACC", "SALE"]
window.onload = function() {
  for(i = 0; i < menuA.length; i++) {
    // $("nav div:nth-child(" + i + ")").html(menuA[i - 1]); //1부터 시작
    $("nav div:eq(" + i + ")").html(menuA[i]);
  }
  $("nav div").css("cursor", "pointer");
  $("nav div").on("click", function() {
    $("nav div").css("color", "black");
    $(this).css("color", "red");
    $(".url").html($(this).text() + " 메뉴 작업 중");
  })
  /*
  for(i = 0; i < dataA.length; i++) {
    console.log(dataA[i]);
  }
  */
  let data = document.getElementsByClassName("data");
  for(i = 0; i < dataA.length; i++) {
    data[i].innerHTML = dataA[i];
  }
  /*
  let data1, data2, data3, data4;
  data1 = document.querySelector(".data1");
  data2 = document.querySelector(".data2");
  data3 = document.querySelector(".data3");
  data4 = document.querySelector(".data4");
  data1.innerHTML = dataA[0];
  data2.innerHTML = dataA[1];
  data3.innerHTML = dataA[2];
  data4.innerHTML = dataA[3];
  */
  // ---------------그림 클릭하면 큰 그림 화면전환-------------
  $(".small li").on("click", function() {
    let no = $(this).index() + 1;
    $("#pic").attr("src", "img/newImg" + no + ".jpg")
  })

  /*
  let menu;
  menu = document.querySelector(".small").getElementsByTagName("li");
  menu[0].addEventListener("click", menu0_func);
  */

  let ju = document.querySelector(".ju");
  ju.addEventListener("click", price_func);
}

$(function() {
    
})
function menu0_func() {
  let pic = document.getElementById("pic");
  pic.src = "img/newImg1.jpg";
}
function price_func() {
  let su = document.querySelector(".su");
  let price = document.querySelector(".price");
  let gap = Number(su.value);
  let str = "";
  str += "원산지 :" + dataA[0] + "<br>";
  str += "상품명 :" + dataA[1] + "<br>";
  str += "색  상 :" + dataA[2] + "<br>";
  str += "사이즈 :" + dataA[3] + "<br>";
  str += "수  량 :" + su.value + "개<br>";
  str += "주문하셨습니다.";
  str += "결재 금액은 " + "<strong>" + gap*500 + "</strong> 원 입니다.";
  price.innerHTML = str;
}