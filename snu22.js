// DOM 조작하기
const myParagraph = document.getElementById("my-paragraph");

myParagraph.innerHTML = "여기 한번 눌러주세요.";
myParagraph.style.color = "blue";

// 이벤트 처리 방법
const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  const actionStatus = document.getElementById("action-status");
  let clickStatus = document.createElement("div");
  clickStatus.innerHTML = "서울대학교에 오신걸 환영합니다";
  actionStatus.appendChild(clickStatus);
});