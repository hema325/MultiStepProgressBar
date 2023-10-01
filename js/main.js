const steps = document.querySelectorAll(".step");
const progressIndicator = document.querySelector(".indicator");
const controls = document.querySelector(".controls");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");


let currentStep = 0;

controls.addEventListener("click", e => {

    if (e.target.classList.contains("next"))
        steps[++currentStep].classList.add("active");
    else if (e.target.classList.contains("prev"))
        steps[currentStep--].classList.remove("active");

    if (currentStep === steps.length - 1)
        nextBtn.setAttribute("disabled", "");
    else
        nextBtn.removeAttribute("disabled");

    if (currentStep === 0)
        prevBtn.setAttribute("disabled", "");
    else
        prevBtn.removeAttribute("disabled");

    let progressWidth = steps[currentStep].offsetLeft + steps[currentStep].offsetWidth / 2;
    progressIndicator.style.width = `${progressWidth}px`;
});