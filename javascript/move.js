const imgA = ["big0.jpg", "big1.jpg", "big2.jpg", "big3.jpg"]
let timer = setInterval("movePic()", 3000);
let count = 0;
function movePic() {
  $(".img4").animate({"left":"-=1000px"}, 500, function() {
    $(".img4 li:first").appendTo(".img4");
    $(".img4").css("left", "+=1000px");
  });
  if(count < 3){
    count++;
  } else {
    count = 0;
  }
  $(".disp").html((count + 1) + " / 4");
}
window.onload = function() {
  for(i = 0; i < imgA.length; i++) {
    $(".img4 li:eq(" + i + ")").css("background", "url(복습-4/img/" + imgA[i] + ")")
                                .css("backgroundSize", "100% 100%");
  }
}
$(function() {
  $(".img4 li").on("click", function() {
    let no = $(this).attr("class");
    console.log(no);
  })
  /*
  $(".img4 li").hover(function() {
    clearInterval(timer);
  }, function() {
    timer = setInterval("movePic()", 3000);
  })
  */
  let pos;
  $(".next").on("click", function() {
    if(count < 3)
      count++;
    pos = count * 1000;
    $(".img4").animate({"left":"-" + pos + "px"}, 500);
    $(".disp").html((count + 1) + " / 4");
  })
  $(".prev").on("click", function() {
    if(count > 0)
      count--;
    pos = count * 1000;
    $(".img4").animate({"left":"-" + pos + "px"}, 500);
    $(".disp").html((count + 1) + " / 4");
  })
})