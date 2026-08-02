// شروع سفر تاریخی
function start(){

    document
    .getElementById("eras")
    .scrollIntoView({
        behavior:"smooth"
    });

}



// انیمیشن ظاهر شدن بخش‌ها

const elements = document.querySelectorAll(
".card, .kings div, .gallery div"
);


function reveal(){

    elements.forEach(item=>{

        let position =
        item.getBoundingClientRect().top;


        if(position <
        window.innerHeight - 100){

            item.style.opacity="1";

            item.style.transform=
            "translateY(0)";

        }

    });

}



window.addEventListener(
"scroll",
reveal
);



window.addEventListener(
"load",
()=>{

elements.forEach(item=>{

item.style.opacity="0";

item.style.transform=
"translateY(50px)";

item.style.transition=
"1s";

});


reveal();

});




// ساعت تاریخی کوچک

const footer =
document.querySelector("footer");


let year =
new Date().getFullYear();


footer.innerHTML +=
`
<br>
نسخه آنلاین - ${year}
`;
