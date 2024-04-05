const rateContainer = document.querySelector(".rate-container");
const thankYouContainer = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".submit-btn");
const rateBtn = document.querySelectorAll(".rate-btn");
const spanOutput = document.querySelector("#span");

submitBtn.addEventListener("click", () => {
    rateContainer.style.display = "none";
    thankYouContainer.style.display = "block";
})


rateBtn.forEach(rate => {
    rate.addEventListener("click", () => {
        spanOutput.innerHTML = rate.innerHTML
    })
});