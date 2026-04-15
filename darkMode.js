function dark() {  
    const baseClasses = ["content", "whitespace", "hiking-header", "stars","header","map"];
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
        if (baseDiv.style.backgroundColor === "rgb(26, 22, 17)") {
            baseDiv.style.backgroundColor = "rgb(95, 79, 60)";
        } else {
            baseDiv.style.backgroundColor = "rgb(26, 22, 17)";
        }
    })

    const darkButton = document.getElementById("dark-image");
    if (darkButton.getAttribute("src").includes("dark_mode")) {
        darkButton.setAttribute("src", "images/light_mode.svg");
    } else {
        darkButton.setAttribute("src", "images/dark_mode.svg");
    }

}

document.getElementById("dark").addEventListener("click", dark);