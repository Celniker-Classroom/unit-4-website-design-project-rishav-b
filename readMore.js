document.querySelectorAll(".expand").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".read-more").forEach(read => {
            read.classList.toggle("showing");
            if (btn.innerHTML === "Read More") {
                btn.innerHTML = "Read Less";
            } else {
                btn.innerHTML = "Read More";
            }
        });
        document.querySelectorAll(".pink-arrow").forEach(arr => {
            if (arr.getAttribute("src") === "images/uparrow.svg") {
                arr.setAttribute("src", "images/downarrow.svg");
            } else {
                arr.setAttribute("src", "images/uparrow.svg");
            }
        });
        document.querySelectorAll(".hidden").forEach(hidey => {
            hidey.classList.toggle("showing");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const facts = document.querySelectorAll(".fact");

    facts.forEach(fact => {
        fact.addEventListener("click", () => {
            const imgSrc = fact.dataset.image;

            const oldBox = document.getElementById("image-placeholder");

            if (oldBox) {
                oldBox.outerHTML = `<img id="fact-image" src="${imgSrc}" alt="Fact image">`;
            } else {
                const img = document.getElementById("fact-image");
                if (img) {
                    img.src = imgSrc;
                }
            }
        });
    });
});