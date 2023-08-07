const menuA = ["NEW", "BEST", "PANTS", "SHIRTS", "SPORTS", "SWIM", "HIKING", "LIMITTED", "SALE", "QnA"];
const menuTipA = ["신상품", "최고의 인기 상품", "기럭지 길어보이는 바지", "벌도 꼬이는 셔츠", "운동할 때 이거 없으면 불편", "물과 하나가 된 느낌", "히말라야 등산 가능", "지금 아니면 못사고 다음에 후회함", "이 가격이라니...", "뭐든 물어보세요"]
const infoA = ["200,000원", "180,000원", "아주 좋음.", "3,000원 (2개 이상 구매시 무료)", "카드 결재"];
window.onload = function() {
  for(i = 0; i < menuA.length; i++) {
    $("nav div:eq(" + i + ")").html(menuA[i]);
  }
  $("nav div").on("click", function() {
    let no = $(this).index();
    $("nav div").css("background", "white").css("color", "black");
    $(this).css("background", "black").css("color", "white");
    $(".msg").html(menuTipA[no]);
  })
  $(".content1 .images div").on("click", function() {
    let no = $(this).index() + 1;
    $("#big").attr("src", "img/7img" + no + ".jpg");
  })
  for(i = 0; i < infoA.length; i++) {
  $(".info:eq(" + i + ")").html(infoA[i]);
  }
}