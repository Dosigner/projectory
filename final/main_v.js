var typingBool = false; 
var typingIdx=0; 
var typingIdx2=0;
var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
//console.log(typingTxt);
typingArray=typingTxt.split("*");
var scrollPosition;
var tyInt;

$(".banner img").fadeIn(1500);

typingTxt1=typingArray[0].split(""); // 한글자씩 자른다. 
typingTxt2=typingArray[1].split("");
console.log(typingTxt1);
console.log(typingTxt2);
setTimeout(function() {
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true;
        tyInt = setInterval(typing,100); // 반복동작
     }
}, 1500);


function typing(){ 
    if(typingIdx<typingTxt1.length){ // 타이핑될 텍스트 길이만큼 반복 
        $(".typing").append(typingTxt1[typingIdx]); // 한글자씩 이어준다. 
        typingIdx++; 
    }
    else if(typingIdx2==0){
        $(".typing").append("<br/>");
        typingIdx2++;
        console.log(typingIdx2);
        console.log("hello");
    }
    else if(typingIdx2<=typingTxt2.length){
        $(".typing").append(typingTxt2[typingIdx2-1]);
        typingIdx2++;
        console.log(typingTxt2[typingIdx2]);
    }
    else { 
        clearInterval(tyInt); //끝나면 반복종료 
    } 
} 

$(function() {
    $("button img[alt='크루']").on("click", function() {
        // <img>요소 중에서 alt 속성값이 "flower"인 요소를 모두 선택함.
        $("img[alt='크루']").attr("src", "/mem_btn2.svg");
        $("img[alt='멤버']").attr("src", "/crew_btn2.svg");
        var list = document.getElementsByClassName("description");
        list[3].innerHTML = '지뉴<br>"자율주행자동차"';
        list[0].innerHTML = '스카이<br>"더빙인사이드"';
        list[1].innerHTML = '바다<br>"다큐멘터리 제작"';
        list[2].innerHTML = '미아<br>"니씨까올리"';
    });
});

$(function() {
    $("button img[alt='멤버']").on("click", function() {
        // <img>요소 중에서 alt 속성값이 "flower"인 요소를 모두 선택함.
        $("img[alt='크루']").attr("src", "/crew_btn.svg");
        $("img[alt='멤버']").attr("src", "/mem_btn.svg");
        var list = document.getElementsByClassName("description");
        list[3].innerHTML = '프로젝토리 워크숍<br>"하늘색은<br> 정말 하늘색일까?"';
        list[0].innerHTML = '여름<br>" 스마트 휴지통 "';
        list[1].innerHTML = '로이<br>" 인형 의상 제작 "';
        list[2].innerHTML = '카드<br>" R U OK "';
    });
});