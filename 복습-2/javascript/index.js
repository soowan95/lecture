window.onload = function() {
  $("#btn1").on("click", function() {
    let many, price, point;
    many = document.getElementById("many");
    many = many.value;
    price = Number(many)*320;
    point = price;
    const Num = new Intl.NumberFormat('ko');
    if(price > 30000) {
      $("#sale").html(Num.format(price*0.03) + "원");
      $("#total").html("총 금액은" + Num.format(price) + "원 이고<br>" + "세일은" + Num.format(price*0.03) + "원 받아서<br>" + "계산할 금액은" + Num.format(price*0.97) + "원 입니다.");
    } else {
      $("#total").html(Num.format(price) + "원");
    }
    while(point >= 100) {
      point = point - 100;
      $("#point").html(point + ".point");
    }
  })
}