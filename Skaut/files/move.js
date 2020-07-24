var positon = 0;
var positionHor = 0;

window.onload = function(){
    document.getElementById("domu").addEventListener("click", () => scroll(0));
    document.getElementById("info").addEventListener("click", () => scroll(1));
    document.getElementById("akce").addEventListener("click", () => scroll(2));
    document.getElementById("home").addEventListener("click", () => scroll(3));
    document.getElementById("clen").addEventListener("click", () => scroll(4));
    document.getElementById("pristav").addEventListener("click", () => scroll(5));
    document.getElementById("ostatni").addEventListener("click", () => scroll(6));

    document.getElementById("clenove").addEventListener("click", () => scrollDownOne(-1));
    scroll(3);
    scrollDownOne(0);

    document.getElementById("calendar").innerHTML = '<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FPrague&amp;src=c2thdXQuY3pfNHNibnB1bnE0cHBlNDJkY2F2MHYzMWtpbHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=c2thdXQuY3pfa3RqYnBxMWxka2hlaDZsc2trMmE3MHZwcnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239E69AF&amp;color=%234285F4&amp;showTitle=0&amp;showNav=1&amp;showTabs=1&amp;showCalendars=1" style="border-width:0" width="700vh" height="500vh" frameborder="0" scrolling="no"></iframe></div>';
}

window.onresize = function() {
    scroll(positon);
    scrollDownOne(positionHor);
}

function scroll(move) {
positon = move;
positionHor = 0;
const horizontal = -move * window.innerWidth;
document.getElementById("allContents").style.left = horizontal;
document.getElementById("allContents").style.top = positionHor * window.innerHeight;
}

function scrollDownOne(down) {
    positionHor = down;
    document.getElementById("allContents").style.top = positionHor * window.innerHeight;
}