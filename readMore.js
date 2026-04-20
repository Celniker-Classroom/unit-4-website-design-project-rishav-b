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
    });
});