// رفتن به گاه‌شمار

function goTimeline(){

document
.getElementById("timeline")
.scrollIntoView({
behavior:"smooth"
});

}



// انیمیشن هنگام اسکرول


const items =
document.querySelectorAll(
".card, .time div, .gallery div"
);



items.forEach(item=>{

item.style.opacity="0";

item.style.transform=
"translateY(50px)";

item.style.transition=
"1s";

});




function showItems(){

items.forEach(item=>{


let top =
item.getBoundingClientRect().top;



if(top <
window.innerHeight - 100){


item.style.opacity="1";

item.style.transform=
"translateY(0)";


}


});


}



window.addEventListener(
"scroll",
showItems
);


window.addEventListener(
"load",
showItems
);





// حالت شب و روز


let modeButton =
document.createElement("button");


modeButton.innerHTML=
"☀️ تغییر حالت";



modeButton.style.position=
"fixed";


modeButton.style.left=
"20px";


modeButton.style.bottom=
"20px";


modeButton.style.zIndex=
"999";



document.body.appendChild(
modeButton
);



modeButton.onclick=function(){


document.body.classList.toggle(
"light"
);


};






// جستجوی ساده تاریخی


let search =
document.createElement("input");



search.placeholder=
"🔎 جستجو در تاریخ ایران";



search.style.position=
"fixed";

search.style.top="20px";

search.style.left="20px";

search.style.padding="10px";

search.style.borderRadius="20px";

search.style.zIndex="999";



document.body.appendChild(search);




search.addEventListener(
"keyup",
()=>{


let value =
search.value.toLowerCase();



document
.querySelectorAll(".card")
.forEach(card=>{


if(
card.innerText
.toLowerCase()
.includes(value)
)

{

card.style.display="block";

}

else{

card.style.display="none";

}


});


});





// سال خودکار فوتر


let footer =
document.querySelector("footer");


footer.innerHTML +=
`
<br>
نسخه هوشمند ایران تمدن - 
${new Date().getFullYear()}
`;
.light{

background:#eee;

color:#111;

}


.light .card,
.light .time div,
.light .gallery div{

background:white;

color:#111;

}


.light footer{

background:#ddd;

} 
