function dark() {  
    const baseClasses = ["content", "whitespace", "hiking-header", "stars","header","map","timelapse-text"];
    const baseIds = ["nav-bar"];
    
    baseClasses.forEach((className) => {
        // Select elements that have either class
        const divList = document.querySelectorAll(`.${className}, .${className}-dark`);
        
        divList.forEach((div) => {
            if (div.classList.contains(className)) {
                div.classList.replace(className, `${className}-dark`);
            } else {
                div.classList.replace(`${className}-dark`, className);
            }
        });
    });

    baseIds.forEach((baseId) => {
        const baseDiv = document.getElementById(baseId);
        const colorPairs = [
            [ "rgb(26, 22, 17)", "rgb(207, 174, 133)" ],
            [ "rgb(110, 157, 201)", "rgb(4, 23, 39)" ]
        ];

        const currentStyle = window.getComputedStyle(baseDiv).backgroundColor;

        colorPairs.forEach(pairing => {
            if (currentStyle === pairing[0]) {
                baseDiv.style.backgroundColor = pairing[1];
            } else if (currentStyle === pairing[1]) {
                baseDiv.style.backgroundColor = pairing[0];
            }
        });
    })

    const darkButton = document.getElementById("dark-image");
    if (darkButton.getAttribute("src").includes("dark_mode")) {
        darkButton.setAttribute("src", "images/light_mode.svg");
    } else {
        darkButton.setAttribute("src", "images/dark_mode.svg");
    }

}

document.getElementById("dark").addEventListener("click", dark);