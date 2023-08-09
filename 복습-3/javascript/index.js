const menuT = ["스타벅스 주문 메뉴판", "딸기주스", "아이스크림", "아이스 아메리카노", "디저트", "망고주스", "팥빙수"]
const textA = ["딸기는 겨울 과일임", "아이스크림은 너무 차가워", "얼어죽어도 아이스 아메리카노", "디저트는 달짝찌근해", "망고 함량 5%", "팥빙수 먹으면 이 시려"]
window.onload = function() {
  $(".title").html(menuT[0]);
  for(i = 1; i < menuT.length; i++) {
    // $(".menu li:eq(" + (i-1) + ")").html(menuT[i]);
    $(".menu li:nth-child(" + i + ")").html(menuT[i]);
  }
  let c = 1;
  $(".menu li").on("click", pic_func);
  $(".nextB").on("click", function() {
    if (c <= 5) 
      c++;
    $(".disp").html(c + " / 6");
    $("#pic").attr("src", "img/img" + c + ".jpg");
  })
  $(".prevB").on("click", function() {
    if (c > 1) 
      c--;
    $(".disp").html(c + " / 6");
    $("#pic").attr("src", "img/img" + c + ".jpg");
  })
}
function pic_func() {
  let no = $(this).index();
  $("#pic").attr("src", "img/img" + (no+1) + ".jpg");
  $(".text").html(textA[no]);
  $(".disp").html((no+1) + " / 6");
}