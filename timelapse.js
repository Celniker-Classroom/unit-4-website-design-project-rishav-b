const timeDiv = document.getElementById("timelapse");
const timeImage = document.getElementById("timelapse-image");
const timeText = document.getElementById("timelapse-text");
const years = [1994,1995,1996,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026];


const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runTimelapse() {
    let yearIndex = 0;
    while (yearIndex < years.length) {
        const path = `images/timelapse/${years[yearIndex]}.png`;
        timeText.innerText = years[yearIndex];
        timeImage.setAttribute('src', path);
        yearIndex++;
        yearIndex = yearIndex % years.length;
        console.log(path);
        await wait(500);
    }
}

runTimelapse();