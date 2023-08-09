const imgA = ["big0.jpg", "big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg", "big5.jpg"];
const textA = ["상영중 | 개봉 예정작", "강남 | 송파 | 마포 | 구리 | 인천 | 부산", "예매 가능 프로 안내", "스토어 중 선택하세요", "무료 시사회 당첨 안내", "사은품 지정 안내해 드립니다."];
const bigA = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg"];
let timer = setInterval("show()", 3000 );
let cnt = 0;
function show() {
  if(cnt < 4) {
    cnt++;
  } else {
    cnt = 1;
  }
  $(".big div").hide();
  $(".big" + cnt).fadeIn();
  $(".big" + cnt).css("background","url(img/" + bigA[cnt - 1]);
  $(".num").html(cnt + " / " + bigA.length);
  $(".opt li").css("background", "white").css("color", "black");
  $(".opt" + cnt).css("background", "red").css("color", "white");
};
window.onload = function() {
  $(".big4").css("background", "url(img/img3.jpg");
  $(".big4").show();
  $(".opt4").css("background", "red").css("color", "white");
  for(i = 0; i < imgA.length; i++) {
    $(".img" + i).css("background","url(img/" + imgA[i] + ")")
                  .css("backgroundSize","100% 100%");
  }
}
$(function() {
  $(".img").hide();
  $(".img0").show();
  let count = 1;
  $("nav div").on("click", function() {
    count = $(this).index();
    $("#no").html((count + 1) + " / 6");
    $(".img").hide();
    $(".img" + count).show();
    $("nav div").css("background", "white").css("color","black");
    $(this).css("background", "black").css("color","white");
    $("#title").html(textA[count]);
    count = count + 1;
  })
  $("#right").on("click", function() {
    if(count < 6)
      count++;
    $("#no").html(count + " / 6");
    $(".img").hide();
    $(".img" + (count - 1)).show();
    $("#title").html(textA[count-1]);
    $("nav div").css("background", "white").css("color","black");
    $("nav div:eq(" + (count - 1) + ")").css("background", "black").css("color","white");
  })
  $("#left").on("click", function() {
    if(count > 1)
      count--;
    $("#no").html(count + " / 6");
    $(".img").hide();
    $(".img" + (count - 1)).show();
    $("#title").html(textA[count-1]);
    $("nav div").css("background", "white").css("color","black");
    $("nav div:eq(" + (count - 1) + ")").css("background", "black").css("color","white");
  })
})