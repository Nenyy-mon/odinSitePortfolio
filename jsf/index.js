let moreLess = document.querySelector("#more-less")
let moreLessBtn = document.querySelector("less-more")
let tip = document.querySelector(".tips")

moreLess.innerHTML = "This is my OdinProject-GithubRepo-CSS,HTML,JS fundamentals-jobfinding project"

function moreLesss(event) {
    moreLess.innerHTML = "More with less words"
    event.target.style.display = "none"
    tip.style.display = "none"
}
console.log(moreLessBtn)