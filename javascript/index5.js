
window.onload = function() {
  let  btn1, num1, result1;
  btn1 = document.getElementById("btn1");
  num1 = document.getElementById("num1");
  result1 = document.getElementById("result1");
  btn1.addEventListener("click", btn1_func);
  /*
  btn1.addEventListener("click", function() {
    if (Number(num1.value)%2 == 0) {
      result1.innerHTML = "짝수";
    } else {
      result1.innerHTML = "홀수";
    }
  })
  */
  
  let btn2, num2, result2;
  btn2 = document.getElementById("btn2");
  num2 = document.getElementById("num2");
  result2 = document.getElementById("result2");
  btn2.addEventListener("click", btn2_func);
  /*
  btn2.addEventListener("click", function() {
    if (Number(num2.value%3) == 0) {
      result2.innerHTML = "맞음";
    } else {
      result2.innerHTML = "아님";
    }
  })
  */
  let btn3, num3, result3;
  btn3 = document.getElementById("btn3");
  num3 = document.getElementById("num3");
  result3 = document.getElementById("result3");
  btn3.addEventListener("click", btn3_func);
  /*
  btn3.addEventListener("click", function() {
    if (Number(num3.value) >= 20) {
      result3.innerHTML = "성인";
    } else {
      result3.innerHTML = "미성년자";
    }
  })
  */
  let btn4, num4, result4;
  btn4 = document.getElementById("btn4");
  num4 = document.getElementById("num4");
  result4 = document.getElementById("result4");
  btn4.addEventListener("click", btn4_func);

  let btn5, num5, result5;
  btn5 = document.getElementById("btn5");
  num5 = document.getElementById("num5");
  result5 = document.getElementById("result5");
  btn5.addEventListener("click", btn5_func);
}
function btn1_func() {
  if (Number(num1.value)%2 == 0) {
    result1.innerHTML = "짝수";
  } else {
    result1.innerHTML = "홀수";
  }
}
function btn2_func() {
  if (Number(num2.value)%3 == 0) {
    result2.innerHTML = "3의 배수";
  } else {
    if (Number(num2.value)%3 == 1) {
      result2.innerHTML = "나머지는 1";
    } else {
    result2.innerHTML = "나머지는 2";}
  }
}
function btn3_func() {
  if (Number(num3.value) >= 20) {
    result3.innerHTML = "성인";
  } else {
    result3.innerHTML = 20-Number(num3.value) + "년 후 성인";
  }
}
function btn4_func() {
  if (Number(num4.value >= 0 && num4.value <= 100)) 
    if (Number(num4.value >= 60)) {
      result4.innerHTML = "합격" +"(" + num4.value + "점)";
      result4.style.color = "blue";
    } else {
      result4.innerHTML = "불합격" +"(" + num4.value + "점)";
      result4.style.color = "red";
      } else {
        result4.innerHTML = "점수 입력 오류";
        result4.style.color = "red";
      }
}
function btn5_func() {
  let score = Number(num5.value);
  if (score > 4.5) {
    result5.innerHTML = "점수 입력 오류";
  } else {
    if (score == 4.5) {
      result5.innerHTML = "A+";
    } else {
      if (score >=4.3) {
        result5.innerHTML = "A";
      } else {
        if (score >= 4.0) {
          result5.innerHTML = "A-";
        } else {
          if (score >= 3.5) {
            result5.innerHTML = "B+";
          } else {
            if (score >= 3.3) {
              result5.innerHTML = "B";
            } else {
              if (score >= 3.0) {
                result5.innerHTML = "B-";
              } else {
                if (score >= 2.5) {
                  result5.innerHTML = "C+";
                } else {
                  if (score >= 2.3) {
                    result5.innerHTML = "C";
                  } else {
                    if (score >= 2.0) {
                      result5.innerHTML = "C-";
                    } else {
                      if (score >= 1.5) {
                        result5.innerHTML = "D+";
                      } else {
                        if (score >= 1.3) {
                          result5.innerHTML = "D";
                        } else {
                          if (score >= 1.0) {
                            result5.innerHTML = "D-";
                          } else {
                            if (score >= 0) {
                              result5.innerHTML = "F";
                            } else {
                              result.innerHTML = "점수 입력 오류";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}