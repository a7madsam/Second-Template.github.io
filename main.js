let skillBars = document.querySelectorAll(`.skills .bars .bar span`);
let skillsSection = document.querySelector(`.skills`);
let galerry = document.querySelector(`.gallery`);
let scrollToTop = document.querySelector(`.scroll-to-top`);
window.addEventListener("scroll", () => {
    if (window.scrollY >= skillsSection.offsetTop) {
        skillBars.forEach((element) => {
            element.style.width = element.getAttribute("data-custom");
        });
    }
    if (window.scrollY >= galerry.offsetTop) {
        scrollToTop.style.display = "inline";
    } else {
        scrollToTop.style.display = "none";
    }
});
scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
});

//For event counter
let counterDate = new Date("dec 31, 2022 23:59:59").getTime();
let count = setInterval(() => {
    let currentTime = new Date().getTime();
    let dif = counterDate - currentTime;
    let days = Math.floor(dif / (1000 * 60 * 60 * 24));
    days = days < 10 ? ` 0${days}` : days;
    let hoursLeft = (dif % (1000 * 60 * 60 * 24)); //in ms
    let hours = Math.floor(hoursLeft / (1000 * 60 * 60));
    hours = hours < 10 ? ` 0${hours}` : hours;
    let minutesLeft = hoursLeft % (1000 * 60 * 60);
    let minutes = Math.floor(minutesLeft / (1000 * 60));
    minutes = minutes < 10 ? ` 0${minutes}` : minutes;
    let secLeft = minutesLeft % (1000 * 60);
    let sec = Math.floor(secLeft / 1000);
    sec = sec < 10 ? ` 0${sec}` : sec;
    document.querySelector(`.events .box .counter .days h1`).innerHTML = days;
    document.querySelector(`.events .box .counter .hours h1`).innerHTML = hours;
    document.querySelector(`.events .box .counter .minutes h1`).innerHTML = minutes;
    document.querySelector(`.events .box .counter .seconds h1`).innerHTML = sec;
    if (days === 0) {
        clearInterval(count);
    }

}, 1000);
//End For event counter

//states 
let statesNumbers = document.querySelectorAll(`.states .box p:nth-of-type(1)`);
window.addEventListener("scroll", function sc() {
    if (window.scrollY >= document.querySelector(".states").offsetTop) {
        statesNumbers.forEach((ele) => inc(ele));
        window.removeEventListener('scroll', sc);
    }
})
function inc(element) {
    let intInc = setInterval(() => {
        let temp = Number(element.innerHTML) + 1;
        temp.toString();
        element.innerHTML = temp;
        if (element.innerHTML == element.dataset.goal) {
            if (element.hasAttribute("data-unit")) {
                temp = temp + element.getAttribute("data-unit");
            }
            element.innerHTML = temp;
            clearInterval(intInc);
        }
    }, 2000 / element.dataset.goal);
}
//end states 

