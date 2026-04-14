function dark() {  
    const baseClasses = ["content", "whitespace", "hiking-header", "stars","header"];
    
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
}

document.getElementById("dark").addEventListener("click", dark);