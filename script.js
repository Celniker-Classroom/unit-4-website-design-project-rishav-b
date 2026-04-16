// code for the star ratings
const starData = new Map([
    ["carmel_mountain", 4.6],
    ["los_penasquitos", 4.7],
    ["gonzales_canyon", 4.4]
])

for (const [key, value] of starData) {
    const starDiv = document.getElementById(key);
    for (let index = 0; index < 5; index++) {
        if (index + 1 > value) {
            const fraction = Math.min(index+1-value, 1);
            const starOverlay = document.createElement("div");
            starOverlay.classList.add("star_container");
            const topStar = document.createElement("img");
            topStar.setAttribute("src", "images/round-star.svg");
            topStar.style.clipPath = `inset(0 ${100*fraction}% 0 0)`
            const bottomStar = document.createElement("img");
            bottomStar.setAttribute("src", "images/round-star.svg");
            starOverlay.appendChild(topStar);
            //starOverlay.appendChild(bottomStar);
            starDiv.appendChild(starOverlay);
        } else {
            const newStar = document.createElement('img');
            newStar.setAttribute("src", "images/round-star.svg");
            starDiv.appendChild(newStar);
        }
    }

}




