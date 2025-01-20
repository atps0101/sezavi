document.addEventListener("DOMContentLoaded", function() {


    const textsAnimateTop = document.querySelectorAll(".animate-top");
    const textsAnimateBottom = document.querySelectorAll(".animate-bottom");
    const animatePrintTexts = document.querySelectorAll(".animatePrint");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("animate-top")) {
                    entry.target.classList.remove("animate-top");
                }
                if (entry.target.classList.contains("animate-bottom")) {
                    entry.target.classList.remove("animate-bottom");
                }
                if (entry.target.classList.contains("animatePrint")) {
                    animatePrintText(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1
    });

    textsAnimateTop.forEach(text => observer.observe(text));
    textsAnimateBottom.forEach(text => observer.observe(text));
    animatePrintTexts.forEach(text => observer.observe(text));
});

function animatePrintText(textElement) {
    const fullText = textElement.textContent;
    textElement.textContent = ''; 

    let index = 0;
    let intervalId = null;

    function typeLetter() {
        if (index < fullText.length) {
            textElement.textContent += fullText.charAt(index);
            index++;
        } else {
            clearInterval(intervalId); 
        }
    }


    if (!textElement.dataset.animationRunning) {
        textElement.dataset.animationRunning = true;
        intervalId = setInterval(typeLetter, 50);
    }
}


