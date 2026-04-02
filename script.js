let currentStep = 0;

function goToStep(step) {
  currentStep = step;

  const steps = document.querySelectorAll(".msf--form-step");
  const indicators = document.querySelectorAll(".msf--step-indicator");

  // hide all steps
  steps.forEach(function (s) {
    s.style.display = "none";
  });

  //show the matching step
  document.querySelector(`.msf--form-step[data-step="${step}"]`).style.display =
    "flex";

  //remove active from all indicators
  indicators.forEach(function (indicator) {
    indicator.classList.remove("active");
  });

  // add active to matching indicator
  document
    .querySelector(`.msf--step-indicator[data-step="${step}"]`)
    .classList.add("active");

  const btnBack = document.querySelector(".btn-back");
  const btnNext = document.querySelector(".btn-next");

  if (currentStep === 1) {
    btnBack.classList.add("hidden");
  } else {
    btnBack.classList.remove("hidden");
  }

  if (currentStep === 5) {
    btnNext.textContent = "Confirm";
  } else {
    btnNext.textContent = "Next Step";
  }
}

goToStep(1);

document.querySelector(".btn-next").addEventListener("click", function () {
  if (currentStep < 5) {
    goToStep(currentStep + 1);
  }
});

document.querySelector(".btn-back").addEventListener("click", function () {
  if (currentStep > 1) {
    goToStep(currentStep - 1);
  }
});
