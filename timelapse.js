const timeDiv = document.getElementById("timelapse");
const timeImage = document.getElementById("timelapse-image");
const timeText = document.getElementById("timelapse-text");
const years = [1994,1995,1996,2000,2001,2002,2003,2004,2005,2006,2007,2008];


const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runTimelapse() {
    for (let yearIndex = 0; yearIndex < years.length; yearIndex++) {
        const path = `images/timelapse/${years[yearIndex]}.png`;
        timeText.innerText = years[yearIndex];
        timeImage.setAttribute('src', path);
        console.log(path);
        await wait(1000);
    }
}

runTimelapse();